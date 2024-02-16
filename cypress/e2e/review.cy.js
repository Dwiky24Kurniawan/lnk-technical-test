import {faker} from '@faker-js/faker'
import ReviewPage from "../pageobjects/reviewPage"
const reviewPage = new ReviewPage()

describe('Test Suite - Review our product - LNK Technical Test', () => {
  it('TC001 - Positive - Submit response with valid data', () => {
    cy.visit('/')
    var fakeFullname = faker.person.firstName()
    var fakePhoneNumber = faker.phone.number('+6282#########')
    reviewPage.getTextboxFullname().clear().type(fakeFullname)
    cy.wait(1000)
    reviewPage.getTextboxPhoneNumber().clear().type(fakePhoneNumber)
    cy.wait(1000)
    reviewPage.getRadioButtonExpensive().click()
    cy.wait(1000)
    reviewPage.getFiveStars().click()
    cy.wait(1000)
    reviewPage.getDatePicker().click()
    cy.wait(1000)
    reviewPage.getSelectDate().click()
    cy.wait(1000)
    reviewPage.getButtonSubmit().click()
    cy.wait(1000)
    reviewPage.getAssertResponseSuccessful()
    cy.wait(1000)
  })

  it('TC002 - Negative - Submit response with invalid data', () => {
    cy.visit('/')
    reviewPage.getButtonSubmit().click()
    cy.wait(1000)
    reviewPage.getAssertBlankField()
    cy.wait(1000)
  })

})
