export class ReviewPage{

    getTextboxFullname() {
        return cy.get(':nth-child(1) > .-bQ-47 > .-a-51 > .-na-62 > .-_W-61')
    }
    
    getTextboxPhoneNumber(){
        return cy.get(':nth-child(2) > .-bQ-47 > .-a-51 > .-na-62 > .-_W-61')
    }
    
    getRadioButtonExpensive(){
        return cy.get(':nth-child(2) > div > .--D-78 > .-a-79 > .-gW-80')
    }
    
    getFiveStars(){
        return cy.get('#question-list > div:nth-child(4) > div.-bQ-47 > div > div > div:nth-child(5) > span')
    }
    
    getDatePicker() {
        return cy.get('#DatePicker0-label')
    }

    getSelectDate() {
        return cy.get('tr td button span').eq(31)
    }

    getButtonSubmit() {
        return cy.get('button[data-automation-id="submitButton"]')
    }

    getAssertResponseSuccessful(){
        return cy.get('.text-format-content').should('be.visible')
    }

    getAssertBlankField(){
        return cy.get('div[data-automation-id="validationError"]').should('be.visible')
    }

}

export default ReviewPage