const { CartPage } = require("./POCartPage");
const { HomePage } = require("./POHomePage");
const { LoginPage } = require("./POLoginPage");
const { OrderHistorPage } = require("./POOrderHistoryPage");
const { PlaceOrderPage } = require("./POPlaceOrderPage");
const { ShippingInformation } = require("./POShippingInformation");
exports.POManager = 
class POManager
{
    constructor(page)
    {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.homepage = new HomePage(this.page);
        this.cartpage = new CartPage(this.page);
        this.placeorderpage = new PlaceOrderPage(this.page);
        this.shippingpage = new ShippingInformation(this.page);
        this.orderhistory = new OrderHistorPage(this.page);
    }

    getLoginPage()
    {
        return this.loginPage;
    }

    getHomePage()
    {
        return this.homepage;
    }
    getCartPage()
    {
        return this.cartpage;
    }
    getPlaceOrderPage()
    {
        return this.placeorderpage;
    }
    getShippingPage(){
        return this.shippingpage;
    }
    getOrderHistoryPage()
    {
        return this.orderhistory;
    }
}