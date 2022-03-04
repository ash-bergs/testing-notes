import { test, expect } from '@playwright/test'
/*=============================================
=                   Click Events                   =
=============================================*/
test('Click Events', async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/index.html');
    // do we need to keep using await? even before locator functions?
    // is there a way to abstract this need away, and if there is, should we really do it?
    // alternately, is there just a better way?
    /* const signInButton = await page.locator('#signin_button');
    await page.click(signInButton); */
    // ^ this pattern doesn't seem to work like I expected? I can't grab the button and operate on it
    // when I grab an element with the locator fn, *what* am I really grabbing?
    await page.click('#signin_button');
    // search by text:
    await page.click('text=Sign in');
    // expect the error message (signing in without actually entering info)
    // .class-name convention used - . reference class name, # reference id
    const errorMsg = await page.locator('.alert-error');
    await expect(errorMsg).toBeVisible();
});
/*============  End of Click Events  =============*/