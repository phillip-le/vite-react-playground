import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { User } from "../data/userData";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../api/getUser";

export const UserDetails: FC = () => {
  const navigate = useNavigate();

  const { userId } = useParams();
  if (!userId) {
    throw new Error("Should not happen");
  }

  const {
    data: user,
    status,
    error,
  } = useQuery<User>({
    queryKey: ["users", userId],
    queryFn: () => getUser(userId),
    retry: false,
  });

  if (status === "pending") {
    return <p>Loading...</p>;
  }

  if (status === "error") {
    return <p>Something went wrong {JSON.stringify(error)}</p>;
  }

  return (
    <div>
      <h1>User Details</h1>
      <p>{user.name}</p>
      <button
        onClick={() => {
          navigate("../..", {
            relative: "path",
          });
        }}
      >
        Back to list
      </button>
    </div>
  );
};
