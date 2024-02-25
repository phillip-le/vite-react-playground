import { FC } from "react";
import { userData } from "../data/userData";
import { UserCard } from "./UserCard";

export const UserList: FC = () =>
  userData.map((user) => <UserCard key={user.id} user={user} />);
