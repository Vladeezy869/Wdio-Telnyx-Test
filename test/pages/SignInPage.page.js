const emailField = 'form>div>div>label>div>div>input[name="email"]'
const passwordField = 'form>div>div>label>div>div>input[name="password"]'
const logInButton = '//button[text()="Log in"]'
const errorMesage = 'div>div>span[class*="Message__MessageCopy"]'
const emptyFieldErrorMesage = 'div:first-child>label>div>div[class*="TextField__Error"]'
const rememberMyEmailAddressButton = 'svg[aria-hidden="true"]'

class SignInPage {
    async enterEmailFieldValue(Email) {
        await $(emailField).waitForExist()
        await $(emailField).click()
        await browser.pause(2000)
        await $(emailField).setValue(Email)
    }
    async enterPasswordFieldValue(Password) {
        await $(passwordField).setValue(Password)
    }
    async clickLogInButton() {
        await $(emailField).waitForExist()
        await $(logInButton).click()
    }
    async checkErrorMesageVisibility() {
        await expect(await $(errorMesage)).toBeDisplayed() == true
        await browser.switchWindow('/')
    }
    async checkEmptyFieldErrorMesageVisibility() {
        await expect(await $(emptyFieldErrorMesage)).toBeDisplayed() == true
        await browser.switchWindow('/')
    }
    async clickRememberMyEmailAddressButton() {
        await $(rememberMyEmailAddressButton).click()
    }
}

module.exports = new SignInPage()