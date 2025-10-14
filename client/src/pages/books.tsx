import React from "react";

export default function BooksPage() {
  const books = [
    {
      id: "taylor",
      title: "Taylor's Diary",
      cover: "/assets/taylorcover.png",
      audience: "Diary for teenagers and adults... if you dare",
      status: "Available now",
      color: "#0aa5a5", // turquoise
    },
    {
      id: "caleb",
      title: "Caleb's Diary",
      audience: "Diary for teenagers and adults... if you dare",
      status: "Coming soon",
      color: "#1e3a8a", // lighter navy blue
    },
    {
      id: "libby",
      title: "Libby's Diary",
      audience: "Diary for adults only",
      status: "Coming soon",
      color: "#7a2e8a", // purple
    },
    {
      id: "pumpkin",
      title: "Pumpkin's Diary",
      audience: "Diary for kids",
      status: "Coming soon",
      color: "#e67e22", // orange
    },
  ];

  const pageStyles = {
    padding: "40px 20px",
    backgroundColor: "#fffefb",
    minHeight: "100vh",
  };

  const gridStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "20px",
    justifyItems: "center",
    alignItems: "stretch",
  };

  const cardStyles = {
    background: "#fff",
    border: "2px dashed #d3d3d3",
    borderRadius: "14px",
    padding: "18px",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "540px",
    width: "100%",
    maxWidth: "280px",
  };

  const hoverEffect = {
    transform: "translateY(-3px)",
    boxShadow: "0 5px 14px rgba(0,0,0,0.08)",
  };

  const coverBox = {
    width: "100%",
    height: "320px",
    borderRadius: "10px",
    marginBottom: "10px",
    background: "#f7f7f7",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#999",
    fontSize: "1rem",
    textTransform: "capitalize",
  };

  return (
    <section style={pageStyles}>
      <h2
        style={{
          textAlign: "center",
          color: "#0aa5a5",
          fontSize: "2rem",
          marginBottom: "30px",
        }}
      >
        The Diaries
      </h2>

      <div style={gridStyles}>
        {books.map((b) => (
          <div
            key={b.id}
            style={cardStyles}
            onMouseEnter={(e) => {
              Object.assign(e.currentTarget.style, hoverEffect);
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = cardStyles.boxShadow;
            }}
          >
            {b.cover ? (
              <img
                src={b.cover}
                alt={`${b.title} cover`}
                style={{
                  width: "100%",
                  height: "320px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "10px",
                }}
              />
            ) : (
              <div style={coverBox}>Cover coming soon</div>
            )}

            <h3
              style={{
                color: b.color,
                fontWeight: "700",
                fontSize: "1.15rem",
                marginBottom: "6px",
              }}
            >
              {b.title}
            </h3>

            <p
              style={{
                fontStyle: "italic",
                fontSize: "0.95rem",
                color: "#444",
                marginBottom: "4px",
              }}
            >
              {b.audience}
            </p>

            <p style={{ color: "#666", fontSize: "0.9rem" }}>{b.status}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
