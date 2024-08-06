const { test, expect } = require('@playwright/test');
// const { LoginPage } = require('../PageObjectModel_EcomWebsite/POLoginPage');
// const { HomePage} = require('../PageObjectModel_EcomWebsite/POHomePage');
// const { CartPage } = require('../PageObjectModel_EcomWebsite/POCartPage');
// const { PlaceOrderPage } = require('../PageObjectModel_EcomWebsite/POPlaceOrderPage');
// const { ShippingInformation } = require('../PageObjectModel_EcomWebsite/POShippingInformation');
// const { OrderHistorPage } = require('../PageObjectModel_EcomWebsite/POOrderHistoryPage');
const { POManager } = require('../PageObjectModel_EcomWebsite/POManager');
//const { LandingPage } = require('../PageObjectModel/POLandingPage');


test('E2E JS_with_Cucumber PageObject testcases', async ({ page }) => {

   
    //----------------------------Login Screen ----------------------------
    //const login = new LoginPage(page)
    const poManager = new POManager(page);
    const login = poManager.getLoginPage(page)
    await login.gotoLoginPage();
    await login.UserCredentialLogin('Miketest240611@yopmail.com','Admin@1234');

    //---------------------Home Screen---------------
    const productName2 = "IPHONE 13 PRO";
    //const home = new HomePage(page);
    const home = poManager.getHomePage(page)
    await page.waitForLoadState('networkidle');
    await home.addingProductToCart(productName2);
    await home.ClickOnCartIcon();
    
    //----------------------Cart Screen------------------------
    //const cart = new CartPage(page)
    const cart = poManager.getCartPage(page)
    await cart.checkProductIncart(productName2);
    await cart.checkoutbutton();

    //-----------------------PlaceOrder Screen Personal Information----------------------
    //const placeorder = new PlaceOrderPage(page)
    const placeorder = poManager.getPlaceOrderPage(page);
    await page.waitForLoadState('networkidle');
    await placeorder.EnterPaymentdetails('4542 5599 0012 2293','10','15','425','Miketest')
    await placeorder.ApplyCoupon('rahulshettyacademy')
    await placeorder.VerfiyTheCouponMsgIsvisible();
    //await page.pause();

    //------------Shipping Information---------------
    //const shippingPage = new ShippingInformation(page)
    const shippingPage = poManager.getShippingPage(page);
    await shippingPage.VerifytheUserEmail()
    await shippingPage.SelectCountryValuefromDropDown("ind", " India")
    await shippingPage.PlaceOrderBtn()
    await shippingPage.VerfiytheOrderConfimationtextMessga();
    const orderId = await shippingPage.VerfiyOrderIdText();

    //------------Order History Page--------------
    //const historyPage = new OrderHistorPage(page);
    const historyPage = poManager.getOrderHistoryPage(page);
    await historyPage.ValidateAddedProduct(orderId);
    await historyPage.validateOrderIDOnSummaryPage();
     
});
