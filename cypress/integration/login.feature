Feature: Login

Login the app

    Scenario: Login with wrong password
        Given I navigate to the webpage
        When I enter "standard_user"
        And I enter "worngpassword"
        And I click on "Login"
        Then This message "qsqdsq" should be visible