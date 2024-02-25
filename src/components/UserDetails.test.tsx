import { render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { UserDetails } from "./UserDetails";
import { userData } from "../data/userData";

describe("UserDetails", () => {
  it("should navigate back to / when clicking button", async () => {
    const user = userEvent.setup();

    const screen = render(
      <MemoryRouter initialEntries={[`/user/${userData[0].id}`]}>
        <Routes>
          <Route path="/user/:userId" element={<UserDetails />} />
          <Route path="/" element={<p>Dummy page</p>} />
        </Routes>
      </MemoryRouter>
    );

    const buttonToClick = screen.getByRole("button");

    await user.click(buttonToClick);

    expect(screen.getByText("Dummy page")).toBeVisible();
  });
});
