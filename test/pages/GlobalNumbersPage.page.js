const searchNumbersButton = 'a[title="[Talk to sales] Global Numbers - Button"]:first-child'
const askOurExpertsButton = 'p>a[href="/contact-us"]>span'
const seePricingButton = '[href="https://telnyx.com/pricing/"]'

class GlobalNumbersPage {
    async clickSearchNumbersButton() {
        await $(searchNumbersButton).click()
    }
    async clickAskOurExpertsButton() {
        await $(askOurExpertsButton).click()
    }
    async scrollToSeePricingButton() {
        await $(seePricingButton).scrollIntoView({ block: 'center', inline: 'center' })
    }
    async clickSeePricingButton() {
        await $(seePricingButton).click()
    }
}

module.exports = new GlobalNumbersPage()