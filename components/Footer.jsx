export const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#1f2937",
        color: "#9ca3af",
        padding: "16px 32px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        fontSize: "13px",
        marginTop: "auto",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      © {new Date().getFullYear()} Todo App. All rights reserved.
    </footer>
  );
};
