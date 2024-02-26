import request from "axios";
import { User } from "../data/userData";

export const getUsers = async (): Promise<User[]> => {
  const response = await request({
    baseURL: "https://jsonplaceholder.typicode.com",
    url: "/users/",
    method: "GET",
    responseType: "json",
  });

  return response.data as User[];
};
