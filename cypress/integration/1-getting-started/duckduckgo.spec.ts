import {
    HomePage
} from "../page-object/HomePage";

const homePage = new HomePage();

describe('example duckduckgo', () => {
    beforeEach(() => {
        cy.visit('https://duckduckgo.com/')
    })

    it('enter recherche', () => {
        homePage.clickOnText('DuckDuckGo')
    })
})