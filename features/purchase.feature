Feature: Compra de dos productos

Scenario:
    Given I am on the login page
    When I login as "standard_user" and "secret_sauce"
    And I add the second product to the cart
    And I add the first product to the cart
    And I check the cart
    And I proceed to checkout with "Juan" "Perez" "12345"
    Then I should see the order confirmation
