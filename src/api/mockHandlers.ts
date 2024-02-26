import { http, HttpResponse } from "msw";
import { userData } from "../data/userData";

export const happyPathHandlers = [
  http.get(
    "https://jsonplaceholder.typicode.com/users/:userId",
    async ({ params }) => {
      const { userId } = params;

      const user = userData.find(({ id }) => id === userId);

      if (!user) {
        return new Response(null, {
          status: 404,
        });
      }

      return HttpResponse.json(user);
    }
  ),
  http.get("https://jsonplaceholder.typicode.com/users", async () => {
    return HttpResponse.json(userData);
  }),
];
