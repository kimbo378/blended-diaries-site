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
            width: "240px", // reduced from 300px for better balance
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
            padding: "0 18px", // adjusted slightly so it lines up better
            fontSize: "16px",
            marginLeft: "8px",
            borderRadius: "6px",
            backgroundColor: "#00c2a8", // turquoise brand colour
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Subscribe
        </button>
      </form>
    </footer>
  );
};

export default Footer;
