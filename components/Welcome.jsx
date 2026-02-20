import { useParams, useNavigate } from "react-router-dom";

export const Welcome = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome {username}!</h1>
      <div>Welcome component</div>
      <button onClick={() => navigate("/todos")}>Manage Todos</button>
    </div>
  );
}