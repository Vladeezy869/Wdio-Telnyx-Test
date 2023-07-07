const submitButton = 'div>button>span:first-child'

class Coockies {
    async acceptCookie(){
        if (await ($(submitButton).isDisplayedInViewport()) == true){
            await $(submitButton).click();
        }
    }
}

module.exports = new Coockies()