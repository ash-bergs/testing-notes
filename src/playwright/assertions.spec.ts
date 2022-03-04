import { test, expect } from '@playwright/test'
/*=============================================
=                   Assertions                   =
=============================================*/
/*
Playwright uses the expect library for assertions
it also offers many matchers, including convenience async matchers that will wait until the expected condition is met
* https://playwright.dev/docs/test-assertions
 */
test('Assertions', async({ page }) => {
    await page.goto('https://www.example.com');
    // not very useful in this case, but comparing url is very handy when testing redirects
    await expect(page).toHaveURL('https://www.example.com');
    // also useful for testing redirects and accessibility/usability
    await expect(page).toHaveTitle('Example Domain');
    
    //*/** asserting visibility */
    const titleElement = await page.locator('h1');
    await expect(titleElement).toBeVisible();
    //? what is the difference between toHaveText and toContainText? 🔎
    await expect(titleElement).toHaveText('Example Domain');
    // assert how many titleElements there will be:
    await expect(titleElement).toHaveCount(1);
    
    //*/** asserting invisibility/missing elements */
    const nonExistingEl = await page.locator('h5');
    await expect(nonExistingEl).not.toBeVisible();
});

/* Negating Matchers
-------------------------------------------------- */
/* In general, we can expect the opposite to be true by adding .not to the front of the matchers */
test('Negating matchers', async({ page }) => {
    await page.goto('https://www.example.com');
    const titleElement = await page.locator('h1');
    
    await expect(titleElement).not.toContainText('Example Website');
});
/* End of Negating Matchers
-------------------------------------------------- */

/* Soft Assertions
-------------------------------------------------- */
/*
By default a failed assertion in Playwright will terminate test execution
To counter, Playwright supports soft assertions
If a soft assertions fails the test will continue executing and be marked as failed
*/
test('Soft assertions', async({ page }) => {
    await page.goto('https://www.example.com');
    const titleElement = await page.locator('h1');
    const linkElement = await page.locator('a');
    
    await expect.soft(titleElement).toHaveText('Example Website');
    //* these tests will still be performed - after the 5sec default timeout for the soft assertion above */
    await expect(titleElement).toBeVisible();
    await expect(linkElement).toBeVisible();
    
    //*/** asserting invisibility/missing elements */
    const nonExistingEl = await page.locator('h5');
    await expect(nonExistingEl).not.toBeVisible();
});

/* End of Soft Assertions
-------------------------------------------------- */
/*============  End of Assertions  =============*/
