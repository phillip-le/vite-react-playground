import { request } from "gaxios";
import { User } from "../data/userData";

export const getUser = async (id: User["id"]): Promise<User> => {
  console.log("sending request");
  const response = await request({
    baseURL: "https://localhost:3000",
    url: `/users/${id}`,
    method: "GET",
    responseType: "json",
  });
  console.log("got response", response);

  return response.data as User;
};
