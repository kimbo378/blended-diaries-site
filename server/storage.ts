import { type User, type InsertUser, type EmailSignup, type InsertEmailSignup, type ContactSubmission, type InsertContactSubmission } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createEmailSignup(signup: InsertEmailSignup): Promise<EmailSignup>;
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getEmailSignups(): Promise<EmailSignup[]>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private emailSignups: Map<string, EmailSignup>;
  private contactSubmissions: Map<string, ContactSubmission>;

  constructor() {
    this.users = new Map();
    this.emailSignups = new Map();
    this.contactSubmissions = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createEmailSignup(insertSignup: InsertEmailSignup): Promise<EmailSignup> {
    const id = randomUUID();
    const signup: EmailSignup = {
      ...insertSignup,
      id,
      createdAt: new Date(),
    };
    this.emailSignups.set(id, signup);
    return signup;
  }

  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = randomUUID();
    const submission: ContactSubmission = {
      ...insertSubmission,
      id,
      createdAt: new Date(),
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }

  async getEmailSignups(): Promise<EmailSignup[]> {
    return Array.from(this.emailSignups.values());
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values());
  }
}

export const storage = new MemStorage();
