const randomInput = require('../page/randomInput');

class ResetPass {
    email = 'testBanan16@gmail.com';

    get inputEmail() { 
        return $('#email_field');
    }
    get sendButton() {
        return $('[class="btn btn-primary btn-block"]');
    }
   
    sendExistEmail() {
        this.inputEmail.clearValue();
        this.inputEmail.setValue(this.email);
        this.sendButton.click();
    }
    sendEmptyEmail() {
        this.inputEmail.clearValue();
        this.sendButton.click();
    }
    sendWrongInput() {
        this.inputEmail.clearValue();
        this.inputEmail.setValue(randomInput.randomInput(10));
        this.sendButton.click();
    }
}
module.exports = new ResetPass();