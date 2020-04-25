const randomInput = require('../page/randomInput.js');

class SingupPage {
    randomLogin = randomInput.randomInput(9);
    randomEmail = randomInput.randomInput(9) + '@' + randomInput.randomInput(5) + '.com';
    randomPassword = randomInput.randomInput(15);
    
    get title() {
        return $('[class="my-3"] h2');
    }
    get userLoginInput() {
        return $('#user_login');
    }
    get userEmailInput() {
        return $('#user_email');
    }
    get userPasswordInput() {
        return $('#user_password');
    }
    get titleVerify () {
        return $('[class="f4 mb-3"]');
    }

    enterCreditionals(){
        this.userLoginInput.clearValue(this.randomLogin);
        this.userEmailInput.clearValue(this.randomEmail);
        this.userPasswordInput.clearValue(this.randomPassword);
        this.userLoginInput.setValue(this.randomLogin);
        this.userEmailInput.setValue(this.randomEmail);
        this.userPasswordInput.setValue(this.randomPassword);
    }
}
module.exports = new SingupPage();