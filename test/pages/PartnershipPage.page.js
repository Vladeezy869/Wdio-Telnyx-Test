const becomeAPartnerButton = 'div>a[title="Partnerships - Hero - CTA"]>span:first-child'
const firstNameField = '#FirstName'
const lastNameField = '#LastName'
const companyField = '#Company'
const emailField = '#Email'
const countryDropdown = '#Phone_Number_Extension__c'
const canadaOption = '//option[text()="Canada (+1)"]'
const phoneNumberField = '#Phone_Number_Base__c'
const partnerTypeDropdown = '#Partner_Type__c'
const resellerOption = '//option[text()="Reseller "]'
const tellUsField = '#Form_Additional_Information__c'
const applyNowButton = '[type="submit"]'
const submitMessageText = 'h1>span'
const errorMessageText = '#ValidMsgFirstName'

class PartnershipPage {
    async clickBecomeAPartnerButton() {
        await $(becomeAPartnerButton).waitForDisplayed(5000)
        await $(becomeAPartnerButton).click()
    }
    async enterFirstNameFieldValue(Name) {
        await $(firstNameField).setValue(Name)
    }
    async enterLastNameFieldValue(Name) {
        await $(lastNameField).setValue(Name)
    }
    async enterEmailFieldValue(Email) {
        await $(emailField).setValue(Email)
    }
    async selectCanadaOptionInCountryDropdown() {
        await $(countryDropdown).click()
        await $(canadaOption).click()
    }
    async enterPhoneNumberFieldValue(Number) {
        await $(phoneNumberField).setValue(Number)
    }
    async enterCompanyFieldValue(Name) {
        await $(companyField).setValue(Name)
    }
    async selectResellerOptionInPartnerTypeDropdown() {
        await $(partnerTypeDropdown).click()
        await $(resellerOption).click()
    }
    async enterTellUsFieldValue(Text) {
        await $(tellUsField).setValue(Text)
    }
    async clickApplyNowButton() {
        await $(applyNowButton).click()
    }
    async checkSubmitMessageVisibility(text) {
        await expect(await $(submitMessageText)).toHaveText(text)
    }
    async checkErrorMessageVisibility() {
        await expect(await $(errorMessageText)).toBeDisplayed() == true
    }
}

module.exports = new PartnershipPage()