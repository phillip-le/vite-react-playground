import { setupServer } from "msw/node";
import { happyPathHandlers } from "./mockHandlers";

export const server = setupServer(...happyPathHandlers);
server.events.on("request:start", ({ request }) => {
  console.log("Outgoing:", request.method, request.url);
});
