import {
    Given,
    When,
    Then
} from 'cypress-cucumber-preprocessor/steps'
import {
    WelcomePage
} from "../page-object/WelcomePage";

const welcomePage = new WelcomePage();

Given('I navigate to the webpage', () => {
    cy.visit('/');
});

When('I enter {string}', (text) => {
    welcomePage.typeUsername(text);
});