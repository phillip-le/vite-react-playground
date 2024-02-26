import { test, expect } from "@playwright/test";
import { userData } from "../src/data/userData";

test.describe("UserDetails", () => {
  test("should be able to see user details", async ({ page }) => {
    await page.route(`**/users/${userData[0].id}`, (route) =>
      route.fulfill({
        status: 200,
        body: JSON.stringify(userData[0]),
      })
    );

    await page.goto(
      `http://localhost:5173/vite-react-playground/user/${userData[0].id}`
    );

    await page.waitForLoadState("networkidle");

    await expect(page.getByText(/User Details/i)).toBeVisible();
    await expect(page.getByText(userData[0].name)).toBeVisible();
  });
});
