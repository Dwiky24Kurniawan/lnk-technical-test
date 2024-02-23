export class ReviewPage{

    getTextboxFullname() {
        return cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/span[1]/input[1]')
    }
    
    getTextboxPhoneNumber(){
        return cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[2]/div[2]/div[2]/div[1]/span[1]/input[1]')
    }
    
    getRadioButtonExpensive(){
        return cy.get('input[value="Expensive"]')
    }
    
    getFiveStars(){
        return cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[2]/div[4]/div[2]/div[1]/div[1]/div[5]/span[1]/span[1]')
    }
    
    getDatePicker() {
        return cy.get('#DatePicker0-label')
    }

    getSelectDate() {
        // return cy.get('tr td button span').eq(36)
        return cy.xpath('//*[@id="DatePicker-Callout1"]/div/div/div[2]/div[2]/div[2]/table/tbody/tr[6]/td[7]/button/span')
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