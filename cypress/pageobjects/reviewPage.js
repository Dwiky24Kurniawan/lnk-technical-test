export class ReviewPage{

    getTextboxFullname() {
        return cy.get('#question-list > div:nth-child(1) > div.-bT-48 > div > span > input')
    }
    
    getTextboxPhoneNumber(){
        return cy.get('#question-list > div:nth-child(2) > div.-bT-48 > div > span > input')
    }
    
    getRadioButtonExpensive(){
        return cy.get('#question-list > div:nth-child(3) > div.-bT-48 > div > div.-a-77 > div:nth-child(2) > div > label > span.-a-80 > input')
    }
    
    getFiveStars(){
        return cy.get('#question-list > div:nth-child(4) > div.-bT-48 > div > div > div:nth-child(5) > span')
    }
    
    getDatePicker() {
        return cy.get('#DatePicker0-label')
    }

    getSelectDate() {
        return cy.get('tr td button span').eq(36)
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