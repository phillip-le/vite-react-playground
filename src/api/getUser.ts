import request from "axios";
import { User } from "../data/userData";

export const getUser = async (id: User["id"]): Promise<User> => {
  const response = await request({
    baseURL: "https://jsonplaceholder.typicode.com",
    url: `/users/${id}`,
    method: "GET",
    responseType: "json",
  });

  return response.data as User;
};
