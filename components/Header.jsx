export const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "#2563eb",
        color: "#ffffff",
        padding: "14px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontFamily: "Arial, sans-serif",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
      }}
    >
      <span style={{ fontSize: "20px", fontWeight: 700, letterSpacing: "0.5px" }}>
        Todo App
      </span>
      <nav style={{ display: "flex", gap: "24px", fontSize: "14px", fontWeight: 600 }}>
        <a href="/" style={{ color: "#ffffff", textDecoration: "none" }}>Login</a>
        <a href="/todos" style={{ color: "#ffffff", textDecoration: "none" }}>Todos</a>
        <a href="/logout" style={{ color: "#fca5a5", textDecoration: "none" }}>Logout</a>
      </nav>
    </header>
  );
};
