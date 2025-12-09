Feature: Comprar y remover un producto

Scenario:
    Given I am on the login page
    When I login as "standard_user" and "secret_sauce"
    And I add the first product to the cart
    And I check the cart
    And I remove the product from the cart
    Then the cart should be empty
