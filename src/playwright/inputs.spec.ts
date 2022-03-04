import { test, expect } from '@playwright/test'
/*=============================================
=                   Inputs                   =
=============================================*/
//todo: add more notes here
//todo: docs link
test('Interacting with inputs', async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/index.html');
    await page.click('#signin_button');
    
    /** interacting with inputs with .type and filling out the form */
    //* page.type('selector', 'string') 
    await page.type('#user_login', 'someUser');
    await page.type('#user_password', 'somePassword');
    await page.click('text=Sign in');
    
    const errorMsg = await page.locator('.alert-error');
    await expect(errorMsg).toBeVisible();
});
/*============  End of Inputs  =============*/


