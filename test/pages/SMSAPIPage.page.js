const portalButton = '[href="/sign-up"]>span>span'

class SMSAPIPage {
    async clickPortalButton() {
        await $(portalButton).click()
    }
}

module.exports = new SMSAPIPage()