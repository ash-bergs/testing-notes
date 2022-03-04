import { test, expect } from '@playwright/test'
/*=============================================
=                   Basic Example                   =
=============================================*/
test('Basic tests', async ({ page }) => {
    await page.goto('https://www.example.com');
    // 'locator function'
    const pageTitle = await page.locator('h1');
    await expect(pageTitle).toContainText(/example domain/i);
});
/*============  End of Basic Example  =============*/


