const topicText = 'div>h1'
const industryLeadingLincButton = 'header>p>a'

class MissionControlPage {
    async scrollToIndustryLeadingLincButton() {
        await $(industryLeadingLincButton).scrollIntoView()
    }
    async checkIndustryLeadingLincButtonVisibility() {
        await expect(await $(industryLeadingLincButton)).toBeDisplayed()
    }
    async checkTopicTextMaching(text) {
        await expect(await $(topicText)).toHaveText(text)
    }
    async clickIndustryLeadingLincButton() {
        await $(industryLeadingLincButton).click()
    }
}

module.exports = new MissionControlPage()