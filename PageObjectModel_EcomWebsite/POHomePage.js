exports.HomePage =
class HomePage 
{
    constructor(page)
    {
        this.page = page;
        this.productList = page.locator(".card-body") // home page product list name
        //this.AddTocartProduct = page.locator("[class='btn w-10 rounded']"); // Add to cart button
        this.clickonCartIcon = page.locator("[routerlink='/dashboard/cart']") // cart button
    }

    // async addingProductToCart (productName2)
    // {
    //     const productList = await this.productList.allTextContents();
    //     console.log(productList)
    //     for (const product of await productList)
    //     {
    //         if (await product.locator("b").textContent() === await productName2)
    //         {
    //             //await product.click();
    //             await product.locator('text=Add To Cart').click();
    //             //break;
    //         }
    //     }
    //   }

    async addingProductToCart (productName2)
    {
        const productList = await this.productList.allTextContents();
        console.log(productList)
        const productListcount = await this.productList.count();
        for (let i=0; i<productListcount; i++)
        {
            if (await this.productList.nth(i).locator("b").textContent() === await productName2)
            {
                await this.productList.nth(i).locator("text= Add To Cart").click();
                break;
            }
        }
    }

    
    async ClickOnCartIcon()
    {
        await this.clickonCartIcon.click();

    }

}

