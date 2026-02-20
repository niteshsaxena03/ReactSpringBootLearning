export const Error = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f3f4f6",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 10px 24px rgba(0, 0, 0, 0.12)",
          padding: "48px 64px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "80px", margin: 0, color: "#2563eb" }}>404</h1>
        <h2 style={{ margin: "8px 0 12px", color: "#1f2937" }}>Page Not Found</h2>
        <p style={{ color: "#6b7280", marginBottom: "24px" }}>
          Oops! The page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          style={{
            display: "inline-block",
            padding: "10px 24px",
            backgroundColor: "#2563eb",
            color: "#ffffff",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          Go Home
        </a>
      </div>
    </div>
  );
};
