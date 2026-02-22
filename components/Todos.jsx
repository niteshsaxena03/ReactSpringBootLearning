import { useState } from "react";
import {
  deleteTodoById,
  retrieveTodosForUsername,
} from "../api/TodoApiService";
import { useEffect } from "react";

export const Todos = () => {
  const [todos, setTodos] = useState([]);

  const retrieveTodos = async () => {
    try {
      const response = await retrieveTodosForUsername("in28minutes");
      console.log(response);
      setTodos(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const deleteTodo = async (id) => {
    try {
      const response=await deleteTodoById("in28minutes", id);
      //console.log(response.data);
      retrieveTodos();
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    retrieveTodos();
  }, []);
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
              <th
                style={{
                  padding: "10px 16px",
                  textAlign: "left",
                  borderRadius: "8px 0 0 0",
                }}
              >
                ID
              </th>
              <th style={{ padding: "10px 16px", textAlign: "left" }}>
                Description
              </th>
              <th style={{ padding: "10px 16px", textAlign: "left" }}>
                Is Done
              </th>
              <th style={{ padding: "10px 16px", textAlign: "left" }}>
                Target Date
              </th>
              <th
                style={{
                  padding: "10px 16px",
                  textAlign: "left",
                  borderRadius: "0 8px 0 0",
                }}
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id} style={{ borderBottom: "1px solid #e5e7eb" }}>
                <td style={{ padding: "10px 16px", color: "#374151" }}>
                  {todo.id}
                </td>
                <td style={{ padding: "10px 16px", color: "#374151" }}>
                  {todo.description}
                </td>
                <td style={{ padding: "10px 16px", color: "#374151" }}>
                  {todo.isDone ? "Yes" : "No"}
                </td>
                <td style={{ padding: "10px 16px", color: "#374151" }}>
                  {todo.targetDate}
                </td>
                <td style={{ padding: "10px 16px" }}>
                  <button
                    style={{
                      padding: "4px 12px",
                      backgroundColor: "#ef4444",
                      color: "#ffffff",
                      border: "none",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontWeight: 600,
                      fontSize: "13px",
                    }}
                    onClick={() => deleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
