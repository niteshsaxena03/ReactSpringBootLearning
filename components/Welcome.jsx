import { useParams, useNavigate } from "react-router-dom";

export const Welcome = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f3f4f6",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "16px",
          boxShadow: "0 12px 32px rgba(0, 0, 0, 0.1)",
          padding: "48px 56px",
          textAlign: "center",
          maxWidth: "480px",
          width: "100%",
        }}
      >
        <div style={{ fontSize: "56px", marginBottom: "16px" }}>👋</div>
        <h1
          style={{
            margin: "0 0 8px",
            fontSize: "32px",
            color: "#1f2937",
            fontWeight: 700,
          }}
        >
          Welcome back,
        </h1>
        <h2
          style={{
            margin: "0 0 12px",
            fontSize: "28px",
            color: "#2563eb",
            fontWeight: 700,
          }}
        >
          {username}!
        </h2>
        <p style={{ color: "#6b7280", marginBottom: "32px", fontSize: "15px" }}>
          Great to see you. Ready to tackle your todos today?
        </p>
        <button
          onClick={() => navigate("/todos")}
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#2563eb",
            color: "#ffffff",
            border: "none",
            borderRadius: "10px",
            fontSize: "16px",
            fontWeight: 700,
            cursor: "pointer",
            letterSpacing: "0.3px",
          }}
        >
          Manage Todos →
        </button>
      </div>
    </div>
  );
}