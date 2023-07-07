const pricingDropdown = '//header/div/div/div/nav/button/div/span/span[contains(text(),"Pricing")]'
const productsDropdown = '//header/div/div/div/nav/button/div/span/span[contains(text(),"Products")]'
const globalNumbersPricingOption = 'div>a[href="/pricing/numbers"]>span'
const globalNumbersProductsOption = 'a[href="/products/phone-numbers"]>span>span'
const whyTelnyxDropdown = '//header/div/div/div/nav/button/div/span/span[contains(text(),"Why Telnyx")]'
const partnersOption = 'a[href="/partnerships"]>span'
const solutionsButton = 'header>div>div>div>nav>a[href="/solutions"]'
const missionControlOption = '[href="/mission-control"]>span'
const smsApiOption = '[href="/products/sms-api"]>span'
const contactUsButton = 'header>div>div>div>div>a[href="/contact-us"]'
const signUpOption = '[id="header-sign-up"]'

class MainPage {
    async clickPricingDropdown() {
        await $(pricingDropdown).click()
    }
    async clickProductsDropdown() {
        await $(productsDropdown).click()
    }
    async clickGlobalNumbersPricingOption() {
        await $(globalNumbersPricingOption).click()
    }
    async clickGlobalNumbersProductsOption() {
        await $(globalNumbersProductsOption).click()
    }
    async clickWhyTelnyxDropdown() {
        await $(whyTelnyxDropdown).click()
    }
    async clickPartnersOption() {
        await $(partnersOption).click()
    }
    async clickSolutionsButton() {
        await $(solutionsButton).click()
    }
    async clickMissionControlOption() {
        await $(missionControlOption).click()
    }
    async clickSmsApiOption() {
        await $(smsApiOption).click()
    }
    async clickContactUsButton() {
        await $(contactUsButton).click()
    }
    async clickSignUpButton() {
        await $(signUpOption).click()
    }
}

module.exports = new MainPage() 