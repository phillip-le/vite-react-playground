import { http, HttpResponse } from "msw";
import { userData } from "../data/userData";

export const happyPathHandlers = [
  http.get("https://localhost:3000/users/:userId", async ({ params }) => {
    console.log("Received request");
    const { userId } = params;

    const user = userData.find(({ id }) => id === userId);

    if (!user) {
      return new Response(null, {
        status: 404,
      });
    }

    return HttpResponse.json(user);
  }),
];
