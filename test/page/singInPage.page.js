class SingInPage {
    login = 'testBanan16';
    password = 'Test1Privet';
    email = 'testBanan16@gmail.com';

    get loginInput() {
        return $('#login_field');
    }
    get passwordInput() {
        return $('#password');
    }
    get singInButton() {
        return $('[class="btn btn-primary btn-block"]');
    }
    get forgotPassLink() {
        return $('[class="label-link"]');
    }
    
    enterExistCredentials(){
        this.loginInput.clearValue();
        this.passwordInput.clearValue();
        this.loginInput.setValue(this.login);
        this.passwordInput.setValue(this.password);
        this.singInButton.click();
    }
}
module.exports = new SingInPage();