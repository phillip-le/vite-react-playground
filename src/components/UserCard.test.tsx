import { userEvent } from "@testing-library/user-event";
import { render } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { UserCard } from "./UserCard";
import { userData } from "../data/userData";

describe("UserCard", () => {
  it("should link to the user details page", async () => {
    const user = userEvent.setup();

    const screen = render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<UserCard user={userData[0]} />} />
          <Route path={`/user/${userData[0].id}`} element={<p>Dummy page</p>} />
        </Routes>
      </MemoryRouter>
    );

    const linkToUserDetails = screen.getByRole("link");

    await user.click(linkToUserDetails);

    expect(screen.getByText("Dummy page")).toBeVisible();
  });
});
