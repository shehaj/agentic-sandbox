import { expect, test } from "@playwright/test";

test("filters runs by vehicle and clears the filter", async ({ page }) => {
  await page.goto("/");
  const rows = page.getByRole("row");

  await expect(rows).toHaveCount(5);
  await page.getByLabel("Filter by vehicle").fill("WVW-1001");
  await expect(rows).toHaveCount(3);
  await expect(page.getByRole("cell", { name: "WVW-1001", exact: true })).toHaveCount(2);
  await expect(page.getByRole("cell", { name: "WVW-2042", exact: true })).toHaveCount(0);

  await page.getByLabel("Filter by vehicle").clear();
  await expect(rows).toHaveCount(5);
});
