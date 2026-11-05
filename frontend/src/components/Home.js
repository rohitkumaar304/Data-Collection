import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f4f8",
        padding: "2rem",
      }}
    >
      <h1 style={{ color: "#1E3A8A", fontSize: "2.5rem", fontWeight: "700" }}>
        Welcome to Data Collection App
      </h1>
      <p style={{ fontSize: "1.2rem", color: "#333", maxWidth: "600px", textAlign: "center" }}>
        This application allows you to create, view, and manage your data efficiently.
      </p>

      <div style={{ marginTop: "2rem" }}>
        <Link
          to="/"
          className="btn btn-primary me-3"
          style={{ fontWeight: "600", backgroundColor: "#1E3A8A", border: "none" }}
        >
          Create Data
        </Link>
        <Link
          to="/all"
          className="btn btn-outline-primary"
          style={{ fontWeight: "600", color: "#1E3A8A", borderColor: "#1E3A8A" }}
        >
          View All Data
        </Link>
      </div>
    </div>
  );
};

export default Home;
