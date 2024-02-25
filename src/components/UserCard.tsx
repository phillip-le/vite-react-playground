import { FC } from "react";
import { User } from "../data/userData";
import { Link } from "react-router-dom";

type UserCardProps = {
  user: User;
};

export const UserCard: FC<UserCardProps> = ({ user }) => (
  <div>
    <p>
      <Link to={`/user/${user.id}`}>{user.name}</Link>
    </p>
  </div>
);
