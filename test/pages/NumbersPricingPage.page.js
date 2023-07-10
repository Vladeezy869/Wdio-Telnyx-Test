const payAsYouGoText = 'h2#pay-as-you-go'
const numberPrisingTable = 'table#Number-pricing>tbody'
const payAsYouGoDropdown = 'button#country-filter'
const canadaOption = 'div>a[href="/pricing/numbers/ca"]'
const ukraineOption = 'div>a[href="/pricing/numbers/ua"]'
const usingAnExistingNumberText = '//th[text() = "Using an existing number"]'

class NumbersPricingPage {
    async selectCanadaOptionInPayAsYouGoDropdown() {
        await $(numberPrisingTable).scrollIntoView({ block: 'center', inline: 'center' })
        await $(payAsYouGoDropdown).click()
        await $(canadaOption).click()
    }
    async selectUkraineOptionInPayAsYouGoDropdown() {
        await $(payAsYouGoDropdown).click()
        await $(ukraineOption).click()
    }
    async checkUsingAnExistingNumberTextVisibility() {
        await $(usingAnExistingNumberText).waitForDisplayed()
        await expect(await $(usingAnExistingNumberText)).toBeDisplayed() == true
    }
    async scrollDownPayAsYouGoText() {
        await $(payAsYouGoText).waitForDisplayed()
        await $(payAsYouGoText).scrollIntoView({ block: 'center', inline: 'center' })
    }
    async checkUsingAnExistingNumberTextNotVisible() {
        await expect(await $(usingAnExistingNumberText)).toBeExisting() == false
    }
}

module.exports = new NumbersPricingPage()