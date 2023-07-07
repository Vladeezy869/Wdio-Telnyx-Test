const talkToAnExpertButton = 'a[href="/contact-us"]:first-child>span:first-child'

class G2ComparePage {
    async clickTalkToAnExpertButton() {
        await $(talkToAnExpertButton).click()
    }
}
module.exports = new G2ComparePage()