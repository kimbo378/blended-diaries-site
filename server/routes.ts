import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertEmailSignupSchema, insertContactSubmissionSchema } from "@shared/schema";
import { z } from "zod";
import fs from "fs";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve sitemap.xml from project root
  app.get("/sitemap.xml", (req, res) => {
    try {
      const sitemapPath = path.resolve(import.meta.dirname, "..", "sitemap.xml");
      const sitemap = fs.readFileSync(sitemapPath, "utf-8");
      res.set("Content-Type", "application/xml");
      res.send(sitemap);
    } catch (error) {
      res.status(404).send("Sitemap not found");
    }
  });

  // Serve robots.txt from project root
  app.get("/robots.txt", (req, res) => {
    try {
      const robotsPath = path.resolve(import.meta.dirname, "..", "robots.txt");
      const robots = fs.readFileSync(robotsPath, "utf-8");
      res.set("Content-Type", "text/plain");
      res.send(robots);
    } catch (error) {
      res.status(404).send("Robots.txt not found");
    }
  });

  // Email signup endpoint
  app.post("/api/email-signup", async (req, res) => {
    try {
      const validatedData = insertEmailSignupSchema.parse(req.body);
      const signup = await storage.createEmailSignup(validatedData);
      res.json({ success: true, signup });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      res.json({ success: true, submission });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Get email signups (for admin purposes)
  app.get("/api/email-signups", async (req, res) => {
    try {
      const signups = await storage.getEmailSignups();
      res.json(signups);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Get contact submissions (for admin purposes)
  app.get("/api/contact-submissions", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
