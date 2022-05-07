import {
    Given,
    When,
    Then,
    And
} from 'cypress-cucumber-preprocessor/steps'
import {
    WelcomePage
} from "../page-object/WelcomePage";

const welcomePage = new WelcomePage();

Given('I navigate to the webpage', () => {
    cy.visit('/');
});

When('I enter {string} in username box', (text) => {
    welcomePage.typeUsername(text);
});

When('I enter {string} in password box', (text) => {
    welcomePage.typePassword(text);
});

And('I click on Login', ()=>{
welcomePage.clickOnLogin();
});

Then('This message {string} should be visible',(message)=>{
    welcomePage.verifyMessage(message);
})