const {test,expect } = require("@playwright/test");
exports.OrderHistorPage = 
class OrderHistorPage
{
    constructor(page)
    {
        this.page = page;
        this.Orderbutton = page.locator("li [routerlink='/dashboard/myorders']")
        this.orderTable = page.locator("tbody");
        this.orderRowID = page.locator("tbody tr");
        this.orderSummary_orderID = page.locator("[class='col-text -main']");

    }

    async ValidateAddedProduct(orderId)
    {
        await this.Orderbutton.click();
        await this.orderTable.waitFor();              
        for(let i=0;i <await this.orderRowID.count(); i++)
        {
            //await this.rowOrderId.waitFor();
            //const rowOrderId = await this.row.nth(i).locator("th").textContent();
            const rowOrderId = await this.orderRowID.nth(i).locator("th").textContent(); 
            if(orderId.includes(rowOrderId))
            {
                await this.orderRowID.nth(i).locator("button").first().click();
                break;
            }
        }    
    }

    async validateOrderIDOnSummaryPage()
    {
         //const orderSummaryPage_orderID = await this.orderSummaryPage_orderID.textContent()
         const orderSummaryPage_orderID = await this.orderSummary_orderID.textContent();
         console.log("OrderId on History Page: " + orderSummaryPage_orderID)
         //await expect(this.orderSummaryPage_orderID).toHaveText(this.OrderId)
         const bool = await this.orderSummary_orderID.isVisible();;
         console.log(bool);
    }

}