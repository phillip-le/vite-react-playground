import { FC } from "react";
import { User } from "../data/userData";
import { UserCard } from "./UserCard";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../api/getUsers";

export const UserList: FC = () => {
  const { data: users, status } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  if (status === "pending") {
    return <p>Loading...</p>;
  }

  if (status === "error") {
    return <p>Error!</p>;
  }

  return users.map((user) => <UserCard key={user.id} user={user} />);
};
