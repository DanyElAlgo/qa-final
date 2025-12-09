Feature: Comprar y remover un producto

Scenario:
    Given I am on the login page
    When I login with "standard_user" and "secret_sauce"
    Then I should see products to buy
    When I add the first product to the cart
    And I check the cart
    And I remove the product from the cart
    Then the cart should be empty
