Feature: Login into the page

  Scenario Outline: As a user, I can log in

    Given I am on the login page
    When I login with <username> and <password>
    Then I log out

    Examples:
      | username      | password        |
      | standard_user | secret_sauce    |
