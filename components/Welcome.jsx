import { useParams } from "react-router-dom";

export const Welcome = () => {
  const { username } = useParams();
  return (
    <div>
      <h1>Welcome {username}!</h1>
      <div>Welcome component</div>
    </div>
  );
}