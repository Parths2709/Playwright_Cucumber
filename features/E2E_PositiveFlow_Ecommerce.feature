Feature: Ecommerce validation
@Regression
Scenario Outline: placing order
    Given a login to ecom application with "<username>" and "<password>"
    When Add "<productName>" item to cart 
    Then verfiy "<productName>" is displayed in the cart
    When Enter valid personal infomation 
    When Enter Valid detais, click on place order button and verfiy the order message and id
    Then Verfiy order is present in th OrderHistory Page


Examples:
    | username                    | password    | productName    |
    | Miketest240611@yopmail.com  | Admin@1234  | ZARA COAT 3    |
    | Smithtest0723@yopmail.com   | Admin@1234  | IPHONE 13 PRO  |