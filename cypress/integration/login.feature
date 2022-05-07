Feature: Login

Login the app

    Scenario: Login with wrong password
        Given I navigate to the webpage
        When I enter "standard_user" in username box
        And I enter "worngpassword" in password box
        And I click on Login
        Then This message "Epic sadface: Username and password do not match any user in this service" should be visible