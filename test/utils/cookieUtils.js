/**
 * Cookie acceptance utility for Volvo Cars website
 * Handles cookie consent dialog dismissal
 */

export async function acceptCookies(page) {
  try {
    // Wait for cookie consent dialog and accept it
    const cookieButton = page.getByRole("button", { name: "Accept All" });
    if (await cookieButton.isVisible({ timeout: 5000 }).catch(() => false)) {
      await cookieButton.click();
      await page.waitForTimeout(500); // Brief pause to ensure cookies are set
    }
  } catch (e) {
    // Cookie dialog may not always appear, continue without error
  }
}
