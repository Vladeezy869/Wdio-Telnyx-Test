const submitButton = 'form[aria-label="signup-form"]>button[type="submit"]>span:first-child'
const emailField = '#email'
const lastNameField = '#last_name'
const firstNameField = '#first_name'
const passwordField = '#password'
const agreeButton = '#terms_and_conditions'
const errorEmailTextMessage = '#email_message'
const errorTextMessage = '#first_name_message'
const logInLinkButton = 'p>a[href*="telnyx"]'
const telnyxsTermsLinkButton = 'span>a[href="/terms-and-conditions-of-service"]'
const privacyPolicyLinkButton = 'span>a[href="/privacy-policy"]'
const titleText = 'div>h1'
const promoCodeButton = 'a[aria-hidden="false"]>span>span'
const promoCodeField = '#promo_code'

class SignUpPage {
    async enterEmailFieldValue(Email) {
        await $(emailField).setValue(Email)
    }
    async enterFirstNameFieldValue(Name) {
        await $(firstNameField).setValue(Name)
    }
    async enterLastNameFieldValue(Name) {
        await $(lastNameField).setValue(Name)
    }
    async enterPasswordFieldValue(Password) {
        await $(passwordField).setValue(Password)
    }
    async clickAgreeButton() {
        await $(agreeButton).click()
    }
    async clickSubmitButton() {
        await $(submitButton).click()
    }
    async checkSubmitMessageVisibility() {
        await expect(await $(errorEmailTextMessage)).toBeDisplayed() == true
    }
    async checkErrorMessageVisibility() {
        await $(errorTextMessage).scrollIntoView()
        await expect(await $(errorTextMessage)).toBeDisplayed() == true
    }
    async scrollToLogInLinkButton() {
        await $(logInLinkButton).scrollIntoView()
    }
    async scrollToTelnyxsTermsLinkButton() {
        await $(telnyxsTermsLinkButton).scrollIntoView({ block: 'center', inline: 'center' })
    }
    async clickLogInLinkButton() {
        const elem = await $(logInLinkButton)
        await browser.execute(function (elem) {
            elem.removeAttribute('target');
        }, elem);
        await $(logInLinkButton).click()
    }
    async clickTelnyxsTermsLinkButton() {
        await $(telnyxsTermsLinkButton).click()
    }
    async checkTitleTextVisibility() {
        await $(titleText).waitForDisplayed(5000)
        await expect(await $(titleText)).toBeDisplayed() == true
        await browser.switchWindow('/')
    }
    async clickPrivacyPolicyLinkButton() {
        await $(privacyPolicyLinkButton).click()
    }
    async clickPromoCodeButton() {
        await $(promoCodeButton).click()
    }
    async enterPromoCodeFieldValue(Number) {
        await $(promoCodeField).setValue(Number)
    }

}

module.exports = new SignUpPage()