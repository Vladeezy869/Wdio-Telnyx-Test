const payAsYouGoText = 'h2#pay-as-you-go'
const payAsYouGoDropdown = 'button#country-filter'
const canadaOption = 'a[href="/pricing/numbers/ca"]'
const ukraineOption = 'a[href="/pricing/numbers/ua"]'
const usingAnExistingNumberText = '//th[text() = "Using an existing number"]'

class NumbersPricingPage {
    async selectCanadaOptionInPayAsYouGoDropdown() {
        await $(payAsYouGoDropdown).click()
        await $(canadaOption).click()
    }
    async selectUkraineOptionInPayAsYouGoDropdown() {
        await $(payAsYouGoDropdown).click()
        await $(ukraineOption).click()
    }
    async checkUsingAnExistingNumberTextVisibility() {
        await expect(await $(usingAnExistingNumberText)).toBeDisplayed() == true
    }
    async scrollDownPayAsYouGoText() {
        await $(payAsYouGoText).scrollIntoView({ block: 'center', inline: 'center' })
    }
    async checkUsingAnExistingNumberTextNotVisible() {
        await expect(await $(usingAnExistingNumberText)).toBeDisplayed() == false
    }
}

module.exports = new NumbersPricingPage()