class TextGenerator{
    randomText() {
        let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let charLength = chars.length;
        let result = '';
        for ( let i = 0; i < 15; i++ ) {
            result += chars.charAt(Math.floor(Math.random() * charLength));
        }
        return result;
    }
    randomEmail() {
        const result = this.randomText();
        return (result + '@gmail.com');
    }
    randomNumber() {
        let chars = '0123456789';
        let charLength = chars.length;
        let result = '';
        for ( let i = 0; i < 11; i++ ) {
            result += chars.charAt(Math.floor(Math.random() * charLength));
        }
        return result;
    }
    randomName() {
        let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let charLength = chars.length;
        let result = '';
        for ( let i = 0; i < 15; i++ ) {
            result += chars.charAt(Math.floor(Math.random() * charLength));
        }
        return result;
    }
    randomLongText() {
        let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let charLength = chars.length;
        let result = '';
        for ( let i = 0; i < 50; i++ ) {
            result += chars.charAt(Math.floor(Math.random() * charLength));
        }
        return result;
    }
    randomWebsite() {
        const result = this.randomName()
        return ('www.' + result + '.com')
    }
    randomPassword() {
        const result = this.randomText();
        return (result + 'aW2_');
    }
}

module.exports = new TextGenerator()