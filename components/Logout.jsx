import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const Logout = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 10px 24px rgba(0,0,0,0.12)",
          padding: "40px 48px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#1f2937", marginTop: 0 }}>You have been logged out</h2>
        <p style={{ color: "#6b7280", marginBottom: "24px" }}>
          See you next time!
        </p>
        <button
          onClick={() => { logout(); navigate("/"); }}
          style={{
            padding: "10px 24px",
            backgroundColor: "#2563eb",
            color: "#ffffff",
            border: "none",
            borderRadius: "8px",
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Back to Login
        </button>
      </div>
    </div>
  );
};
