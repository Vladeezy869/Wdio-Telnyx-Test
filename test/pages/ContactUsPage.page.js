const firstNameField = '#FirstName'
const lastNameField = '#LastName'
const emailField = '#Email'
const countryDropdown = '[name="Phone_Number_Extension__c"]'
const canadaOption = '//option[text()="Canada (+1)"]'
const reasonForContactDropdown = '#Reason_for_Contact__c'
const supportOption = '//option[text()="Support"]'
const phoneNumberField = '#Phone_Number_Base__c'
const companyWebsiteField = '#Website'
const describeYourRequestField = '#Form_Additional_Information__c'
const submitButton = '[type="Submit"]'
const submitMessageText = 'h1>span'
const howDidYouHearAboutTelnyxField = '#How_did_you_hear_about_Telnyx_Open__c'
const logInButton = 'li[title="Contact us related resources 2"] a[title]'
const supportCenerLinkButton = 'p>a[href="https://support.telnyx.com/en/"]'
const supportCenerText = 'section>h1'
const errorMessageText = '#ValidMsgReason_for_Contact__c'

class ContactUsPage {
    async selectSupportOptionInReasonForContactDropdown() {
        await $(reasonForContactDropdown).click()
        await $(supportOption).click()
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
    async enterCompanyWebsiteFieldValue(Website) {
        await $(companyWebsiteField).setValue(Website)
    }
    async clickSubmitButton() {
        await $(submitButton).click()
    }
    async checkSubmitMessageText(text) {
        await expect($(submitMessageText)).toHaveText(text)
    }
    async enterDescribeYourRequestField(Text) {
        await $(describeYourRequestField).setValue(Text)
    }
    async enterHowDidYouHearAboutTelnyxFieldValue(Text) {
        await $(howDidYouHearAboutTelnyxField).setValue(Text)
    }
    async clickLogInLinkButton() {
        const elem = await $(logInButton)
        await browser.execute(function (elem) {
            elem.removeAttribute('target');
        }, elem);
        await $(logInButton).click()
    }
    async scrollToLogInLinkButton() {
        await $(logInButton).scrollIntoView()
    }
    async clickSupportCenerLinkButton() {
        const elem = await $(supportCenerLinkButton)
        await browser.execute(function (elem) {
            elem.removeAttribute('target');
        }, elem);
        await $(supportCenerLinkButton).click()
    }
    async scrollToSupporCenerLinkButton() {
        await $(supportCenerLinkButton).scrollIntoView()
    }
    async checkSupportCenerText() {
        await expect($(supportCenerText)).toBeDisplayed() == true
    }
    async checkErrorMessageText(text) {
        await expect($(errorMessageText)).toHaveText(text)
    }
}

module.exports = new ContactUsPage()