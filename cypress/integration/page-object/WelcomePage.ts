export class WelcomePage{
    typeUsername(username:string){
        return cy.get('[data-test="username"]').type(username)
    }
    typePassword(password:string){
        return cy.get('[data-test="password"]').type(password)
    }
    clickOnLogin(){
        return cy.get('[data-test="login-button"]').click()
    }
    verifyMessage(message:string){
        return cy.contains(message)
    }
}