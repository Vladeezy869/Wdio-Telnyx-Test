const seeIndustriesButton = '[href="#industries"]>span'
const seeUseCasesButton = '[href="#use-cases"]>span'
const healthcareButton = '[href="/solutions/healthcare"]'
const accountNotificationWindow = 'ul>li:first-child>div'

class SolutionsPage {
    async clickSeeIndustriesButton() {
        await $(seeIndustriesButton).click()
    }
    async scrollToSeeIndustriesButton() {
        await $(seeIndustriesButton).scrollIntoView()
    }
    async clickSeeUseCasesButton() {
        await $(seeUseCasesButton).click()
    }
    async checkHealthcareButtonVisibility() {
        await expect (await $(healthcareButton)).toBeDisplayed() == true
    }
    async checkAccountNotificationWindowVisibility() {
        await expect (await $(accountNotificationWindow)).toBeDisplayed() == true
    }
}

module.exports = new SolutionsPage()