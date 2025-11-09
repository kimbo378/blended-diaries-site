import React from "react";
import taylorCover from "../../assets/taylorcover.png";
import pumpkinCover from "../../assets/pumpkincover.png";
// path from client/src/pages → client/assets

export default function Books() {
  const styles = {
    container: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "40px",
      margin: "40px auto",
      maxWidth: "1100px",
      padding: "0 16px",
      fontFamily: "Poppins, sans-serif",
    } as React.CSSProperties,
    card: {
      background: "#fff",
      borderRadius: "20px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      width: "280px",
      textAlign: "center",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      transition: "all 0.2s ease",
    } as React.CSSProperties,
    cover: {
      width: "220px",
      height: "320px",
      borderRadius: "12px",
      background: "#f2f2f2",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      marginBottom: "15px",
      padding: "10px",
      textAlign: "center",
    } as React.CSSProperties,
    img: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
    } as React.CSSProperties,
    title: {
      fontSize: "20px",
      fontWeight: 700,
      color: "#00b9b9",
      margin: 0,
      textDecoration: "none",
    } as React.CSSProperties,
    desc: {
      marginTop: "6px",
      fontSize: "15px",
      color: "#000",
      fontWeight: 500,
    } as React.CSSProperties,
    status: {
      marginTop: "8px",
      fontSize: "15px",
      fontWeight: 800,
    } as React.CSSProperties,
    available: { color: "green" } as React.CSSProperties,
    coming: { color: "gray" } as React.CSSProperties,
  };

  return (
    <main style={styles.container}>
      {/* Taylor's Diary */}
      <a
        href="/taylor"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Buy Taylor's Diary on Amazon"
        style={{ textDecoration: "none" }}
      >
        <article style={styles.card}>
          <div style={styles.cover}>
            <img
              src={taylorCover}
              alt="Taylor's Diary cover"
              style={styles.img}
            />
          </div>
          <h3 style={styles.title}>Taylor's Diary</h3>
          <p style={styles.desc}>Diary for teenagers and adults… if you dare</p>
          <p style={{ ...styles.status, ...styles.available }}>
            Now Available - Click to Buy
          </p>
        </article>
      </a>

      {/* Caleb's Diary */}
      <article style={styles.card}>
        <div style={styles.cover}>
          <p>Cover coming soon</p>
        </div>
        <h3 style={styles.title}>Caleb's Diary</h3>
        <p style={styles.desc}>Diary for teenagers and adults… if you dare</p>
        <p style={{ ...styles.status, ...styles.coming }}>Coming soon</p>
      </article>

      {/* Libby's Diary */}
      <article style={styles.card}>
        <div style={styles.cover}>
          <p>Cover coming soon</p>
        </div>
        <h3 style={styles.title}>Libby's Diary</h3>
        <p style={styles.desc}>Diary for adults only</p>
        <p style={{ ...styles.status, ...styles.coming }}>Coming soon</p>
      </article>

      {/* Pumpkin's Diary */}
      <a
        href="https://mybook.to/PumpkinsDiary"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Buy Pumpkin's Diary on Amazon"
        style={{ textDecoration: "none" }}
      >
        <article style={styles.card}>
          <div style={styles.cover}>
            <img
              src={pumpkinCover}
              alt="Pumpkin's Diary cover"
              style={styles.img}
            />
          </div>
          <h3 style={styles.title}>Pumpkin's Diary</h3>
          <p style={styles.desc}>The Dog's Diary, for kids</p>
          <p style={{ ...styles.status, ...styles.available }}>
            Now Available - Click to Buy
          </p>
        </article>
      </a>

      {/* The Blended Diaries: Always Evolving */}
      <article style={styles.card}>
        <div style={styles.cover}>
          <p>The Blended Diaries: Always Evolving</p>
        </div>
        <h3 style={styles.title}>More Families Coming Soon</h3>
        <p style={styles.desc}>
          Our world’s expanding with new families, new dramas, and new diaries,
          proving there’s no one way to be a family but plenty of ways to laugh
          about it.
        </p>
        <p style={{ ...styles.status, ...styles.coming }}>Stay tuned</p>
      </article>
    </main>
  );
}
