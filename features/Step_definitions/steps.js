const {Given, When, Then} = require('@cucumber/cucumber');
const playwright = require('@playwright/test');
const {expect} = require('@playwright/test')
const {POManager} = require('../../PageObjectModel_EcomWebsite/POManager');



//------------------------Login Screen--------------
Given('a login to ecom application with {string} and {string}', {timeout:100*1000},async function(username, password) 
{
   this.login = this.poManager.getLoginPage(); 
   await this.login.gotoLoginPage();
   await this.login.UserCredentialLogin(username,password);
});

//--------------------------HomeScreen (Adding item to cart)-----------------------

When('Add {string} item to cart', async function (productName2) {
  // Write code here that turns the phrase above into concrete actions
    //const home = new HomePage(page);
    this.home = this.poManager.getHomePage()
    await this.page.waitForLoadState('networkidle');
    await this.home.addingProductToCart(productName2);
    await this.home.ClickOnCartIcon();
});

//------------------------- Cart Screen-------------------
Then('verfiy {string} is displayed in the cart', async function (productName2) {
  // Write code here that turns the phrase above into concrete actions
    //const cart = new CartPage(page)
    const cart = this.poManager.getCartPage()
    await cart.checkProductIncart(productName2);
    await cart.checkoutbutton();
});

//-------------------Place Order (Personal information)--------------
When('Enter valid personal infomation', async function () {
  // Write code here that turns the phrase above into concrete actions
    //const placeorder = new PlaceOrderPage(page)
    const placeorder = this.poManager.getPlaceOrderPage();
    await this.page.waitForLoadState('networkidle');
    await placeorder.EnterPaymentdetails('4542 5599 0012 2293','10','15','425','Miketest')
    await placeorder.ApplyCoupon('rahulshettyacademy')
    await placeorder.VerfiyTheCouponMsgIsvisible();
});

//-------------------------Shipping information(Enter and data,click on place order button and verfiy the order message and id)---------------
When('Enter Valid detais, click on place order button and verfiy the order message and id', {timeout:200*2000}, async function () {
  // Write code here that turns the phrase above into concrete actions
  //const shippingPage = new ShippingInformation(page)
  const shippingPage = this.poManager.getShippingPage();
  await shippingPage.VerifytheUserEmail()
  await shippingPage.SelectCountryValuefromDropDown("ind", " India")
  await shippingPage.PlaceOrderBtn()
  await shippingPage.VerfiytheOrderConfimationtextMessga();
  await shippingPage.VerfiyOrderIdText();
});

//--------------------------- Order history page (order is present in th OrderHistory Page)------------------

Then('Verfiy order is present in th OrderHistory Page', async function () {
  // Write code here that turns the phrase above into concrete actions
    //const historyPage = new OrderHistorPage();
    const historyPage = this.poManager.getOrderHistoryPage()
    await historyPage.ValidateAddedProduct(this.orderId);
    await historyPage.validateOrderIDOnSummaryPage();
});

//--------------------Login Negative Flow scenarios---------------------
Given('a login to ecom2 application with {string} and {string}', async function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
  await this.page.goto("https://rahulshettyacademy.com/client");
  console.log(await this.page.title());
  await expect(this.page).toHaveTitle("Let's Shop");
  await this.page.locator("#login").click();
});

Then('Verify the error message.', async function () {
  // Write code here that turns the phrase above into concrete actions
    const EmailErrorMessage = await this.page.getByText('*Email is required').textContent();
    console.log("Email Error Message:  " + EmailErrorMessage);
    //await expect(page.getByText('*Email is required')).toContainText("*Email is required")
    const bool = await this.page.getByText('*Email is required').isVisible();
    console.log(bool);

    const PasswordErrorMessage =  await this.page.getByText('*Password is required').textContent();
    console.log("Password Error Message " + PasswordErrorMessage);
    //await expect(page.getByText('*Password is required')).toHaveText('*Password is required')
    const bool1 = await this.page.getByText('*Password is required').isVisible();
    console.log(bool1);
});