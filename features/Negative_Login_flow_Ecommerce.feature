Feature: Ecommerce validation
@Validation
Scenario Outline: Login Negative Scenario
    Given a login to ecom2 application with "<username>" and "<password>"
    Then Verify the error message.

Examples:
    | username | password   | message |
    |          |            |         |