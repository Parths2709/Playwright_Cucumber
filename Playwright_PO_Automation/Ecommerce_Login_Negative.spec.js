const { test, expect } = require('@playwright/test');
const exp = require('constants');


test('Login Negative', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/client");
    console.log(await page.title());
    await expect(page).toHaveTitle("Let's Shop");
    await page.locator("#login").click();
    

    //-----------Blank username-----------------
    //await page.locator("#userEmail").fill("")
    const EmailErrorMessage = await page.getByText('*Email is required').textContent();
    console.log("Email Error Message:  " + EmailErrorMessage);
    await expect(page.getByText('*Email is required')).toContainText("*Email is required")
    const bool = await page.getByText('*Email is required').isVisible();
    console.log(bool);

   
    //-----------Blank Password---------------------
    //await page.locator("#userPassword").fill("")
    const PasswordErrorMessage =  await page.getByText('*Password is required').textContent();
    console.log("Password Error Message " + PasswordErrorMessage);
    await expect(page.getByText('*Password is required')).toHaveText('*Password is required')
    const bool1 = await page.getByText('*Password is required').isVisible();
    console.log(bool1);

   

});