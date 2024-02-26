import { render, waitForElementToBeRemoved } from "@testing-library/react";
import { server } from "../api/mockServer";
import { UserList } from "./UserList";
import { userData } from "../data/userData";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter } from "react-router-dom";

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
// if you need to add a handler after calling setupServer for some specific test
// this will remove that handler for the rest of themr
// (which is important for test isolation):
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("UserList", () => {
  it("should render list of users", async () => {
    const queryClient = new QueryClient();

    const screen = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <UserList />
        </MemoryRouter>
      </QueryClientProvider>
    );

    expect(screen.getByText("Loading...")).toBeVisible();

    await waitForElementToBeRemoved(() => screen.getByText("Loading..."));

    for (const user of userData) {
      expect(screen.getByText(user.name)).toBeVisible();
    }
  });
});
