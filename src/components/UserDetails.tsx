import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { userData } from "../data/userData";

export const UserDetails: FC = () => {
  const navigate = useNavigate();

  const { userId } = useParams();
  if (!userId) {
    return <p>404</p>;
  }

  const user = userData.find(({ id }) => id === userId);
  if (!user) {
    return <p>404</p>;
  }

  return (
    <div>
      <h1>User Details</h1>
      <p>{user.name}</p>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Back to list
      </button>
    </div>
  );
};
