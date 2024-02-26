import { test, expect } from "@playwright/test";
import { userData } from "../src/data/userData";

test.describe("UserList", () => {
  test("displays users", async ({ page }) => {
    await page.route("**/users", (route) =>
      route.fulfill({
        status: 200,
        body: JSON.stringify(userData),
      })
    );

    await page.goto("http://localhost:5173/vite-react-playground/");

    await expect(page.getByText(/Users/i)).toBeVisible();
    for (const user of userData) {
      await expect(page.getByRole("link", { name: user.name })).toBeVisible();
    }
  });
});
