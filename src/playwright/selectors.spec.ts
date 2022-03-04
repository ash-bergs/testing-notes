import { test, expect } from '@playwright/test'
/*=============================================
=                   Selectors                   =
=============================================*/
test('Selectors', async ({ page }) => {
//* TEXT
    await page.click('text=some example text');
//* CSS SELECTORS
//* html element:
    await page.click('button');
//* id: 
    await page.click('#id-text');
//* classname:
    await page.click('.classname');

    // only visible css selectors
    // a nice playwright feature! works with above css selectors
    await page.click('.classname:visible')

//* COMBO MOVES
//many combinations of selectors can be used, this is just 1 ex
//* id + classname:
    await page.click('#id-text .classname');

//* XPATH
//? what is an xpath to an element? 🔎 
    await page.click('//button')
});
/*============  End of Selectors  =============*/