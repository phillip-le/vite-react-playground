import { render, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { UserDetails } from "./UserDetails";
import { userData } from "../data/userData";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { server } from "../api/mockServer";

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
// if you need to add a handler after calling setupServer for some specific test
// this will remove that handler for the rest of themr
// (which is important for test isolation):
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("UserDetails", () => {
  it("should navigate back to / when clicking button", async () => {
    console.log("happening");
    const queryClient = new QueryClient();
    const user = userEvent.setup();

    const screen = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={[`/user/${userData[0].id}`]}>
          <Routes>
            <Route path="/user/:userId" element={<UserDetails />} />
            <Route path="/" element={<p>Dummy page</p>} />
          </Routes>
        </MemoryRouter>
      </QueryClientProvider>
    );

    await waitFor(
      async () => {
        const buttonToClick = screen.getByRole("button");

        await user.click(buttonToClick);
      },
      {
        timeout: 2000,
      }
    );

    await waitFor(() => expect(screen.getByText("Dummy page")).toBeVisible(), {
      timeout: 2000,
    });
  });
});
