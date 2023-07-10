const emailField = 'form>div>div>label>div>div>input[name="email"]'
const passwordField = 'form>div>div>label>div>div>input[name="password"]'
const logInButton = '//button[text()="Log in"]'
const errorMesage = 'span[class*="Message__MessageCopy"]'
const emptyFieldErrorMesage = 'div:first-child>label:first-child>div>div[class*="TextField__ErrorMessage"]'
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
        await $(logInButton).waitForClickable()
        await $(logInButton).click()
    }
    async checkErrorMesageVisibility(text) {
        await $(errorMesage).waitForDisplayed()
        await expect(await $(errorMesage)).toHaveText(text) == true
    }
    async checkEmptyFieldErrorMesageVisibility(text) {
        await $(emptyFieldErrorMesage).waitForDisplayed()
        if (await ($(emptyFieldErrorMesage).isDisplayedInViewport()) == false){
            await $(logInButton).click();
        }
        await expect(await $(emptyFieldErrorMesage)).toHaveText(text) == true
    }
    async clickRememberMyEmailAddressButton() {
        await $(rememberMyEmailAddressButton).click()
    }
}

module.exports = new SignInPage()