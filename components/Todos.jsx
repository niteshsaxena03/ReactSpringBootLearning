const todos = [
  { id: 1, description: "Buy groceries", isDone: false, targetDate: "2026-03-10" },
  { id: 2, description: "Read a book", isDone: false, targetDate: "2026-04-05" },
  { id: 3, description: "Go for a walk", isDone: false, targetDate: "2026-05-20" },
];

export const Todos = () => {
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
          padding: "32px",
          width: "480px",
        }}
      >
        <h2 style={{ marginTop: 0, marginBottom: "20px", color: "#1f2937" }}>
          Todo List
        </h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#2563eb", color: "#ffffff" }}>
              <th style={{ padding: "10px 16px", textAlign: "left", borderRadius: "8px 0 0 0" }}>
                ID
              </th>
              <th style={{ padding: "10px 16px", textAlign: "left" }}>Description</th>
              <th style={{ padding: "10px 16px", textAlign: "left" }}>Is Done</th>
              <th style={{ padding: "10px 16px", textAlign: "left", borderRadius: "0 8px 0 0" }}>
                Target Date
              </th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr
                key={todo.id}
                style={{ borderBottom: "1px solid #e5e7eb" }}
              >
                <td style={{ padding: "10px 16px", color: "#374151" }}>{todo.id}</td>
                <td style={{ padding: "10px 16px", color: "#374151" }}>{todo.description}</td>
                <td style={{ padding: "10px 16px", color: "#374151" }}>{todo.isDone ? "Yes" : "No"}</td>
                <td style={{ padding: "10px 16px", color: "#374151" }}>{todo.targetDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
