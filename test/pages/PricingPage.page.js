const payAsYouGoWindow = 'section>div>div:first-child>strong:first-child'
const volumeBasedPrising = 'section>div>div:nth-child(2)>strong:first-child'

class PricingPage {
    async checkPayAsYouGoWindowVisibility() {
        await expect(await $(payAsYouGoWindow)).toBeDisplayed() == true
    }
    async checkVolumeBasedPrisingVisibility() {
        await expect(await $(volumeBasedPrising)).toBeDisplayed() == true
    }
}

module.exports = new PricingPage()