import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#111",
        color: "#fff",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <h3>Subscribe</h3>
      <p>Get free samples & updates straight to your inbox.</p>
      <form
        action="https://your-kit-form-link-here" // replace with your Kit form action URL
        method="post"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "15px",
        }}
      >
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          style={{
            width: "240px",
            height: "45px",
            padding: "8px 12px",
            fontSize: "16px",
            boxSizing: "border-box",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />
        <button
          type="submit"
          style={{
            height: "45px",
            padding: "0 18px",
            fontSize: "16px",
            marginLeft: "8px",
            borderRadius: "6px",
            backgroundColor: "#00c2a8",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Subscribe
        </button>
      </form>

      {/* Social Icons */}
      <div
        style={{
          marginTop: "25px",
          display: "flex",
          justifyContent: "center",
          gap: "15px",
        }}
      >
        <a
          href="mailto:hello@theblendeddiaries.com"
          style={{
            backgroundColor: "#6a0dad", // purple for email
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: "20px",
            textDecoration: "none",
          }}
        >
          ✉️
        </a>
        <a
          href="https://www.tiktok.com/@blendeddiaries1"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: "#ff0050", // TikTok pink/red
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: "20px",
            textDecoration: "none",
          }}
        >
          ♬
        </a>
        <a
          href="https://www.instagram.com/theblendeddiaries"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: "#fccc63", // Instagram gold/yellow accent
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#000",
            fontSize: "20px",
            textDecoration: "none",
          }}
        >
          📸
        </a>
      </div>

      {/* Copyright */}
      <p style={{ marginTop: "20px", fontSize: "14px", color: "#aaa" }}>
        © {new Date().getFullYear()} The Blended Diaries. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
