import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [authStatus, setAuthStatus] = useState(null);
  const navigate = useNavigate();
  const { login } = useAuth();

  function handleSubmit() {
    if (userName === "nitesh" && password === "testing") {
      setAuthStatus("success");
      login();
      navigate(`/welcome/${userName}`);
    } else {
      setAuthStatus("failed");
    }
  }
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f3f4f6",
      }}
    >
      <div
        className="LoginForm"
        style={{
          width: "340px",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 10px 24px rgba(0, 0, 0, 0.12)",
          padding: "24px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h2 style={{ marginTop: 0, marginBottom: "18px", color: "#1f2937" }}>Login</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "14px",
          }}
        >
          <label style={{ marginBottom: "6px", color: "#374151", fontWeight: 600 }}>
            User Name
          </label>
          <input
            type="text"
            name="username"
            style={{
              padding: "10px",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              outline: "none",
            }}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "16px",
          }}
        >
          <label style={{ marginBottom: "6px", color: "#374151", fontWeight: 600 }}>
            Password
          </label>
          <input
            type="password"
            name="password"
            style={{
              padding: "10px",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              outline: "none",
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button
            type="button"
            name="login"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "40px",
              border: "none",
              borderRadius: "8px",
              backgroundColor: "#2563eb",
              color: "#ffffff",
              fontWeight: 700,
              cursor: "pointer",
            }}
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
        {authStatus === "success" && (
          <div
            style={{
              marginTop: "14px",
              padding: "10px",
              borderRadius: "8px",
              backgroundColor: "#dcfce7",
              color: "#166534",
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            Authentication Success
          </div>
        )}
        {authStatus === "failed" && (
          <div
            style={{
              marginTop: "14px",
              padding: "10px",
              borderRadius: "8px",
              backgroundColor: "#fee2e2",
              color: "#991b1b",
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            Authentication Failed
          </div>
        )}
      </div>
    </div>
  );
};
