export class HomePage{
    clickOnText(text:string){
        return cy.contains(text).click();
    }
}