const randomInput = require('../page/randomInput.js')
class EnterpriseServerForm {

    randomLogin = randomInput.randomInput(9);
    randomEmail = randomInput.randomInput(9) + '@' + randomInput.randomInput(5) + '.com';
    randomCompany = randomInput.randomInput(15);
    randomQuestion = randomInput.randomInput(44);
    randomPhone = randomInput.randomPhone();

    get loginInput() {
        return $('#contact_request_name');
    }
    get emailInput() {
        return $('#contact_request_email');
    }
    get companyInput() {
        return $('#contact_request_organization_name');
    }
    get phoneInput() {
        return $('#contact_request_phone');
    }
    get installationTypeNotSure() {
        return $('#contact_request_instance_type_not_sure');
    }
    get questionsRadoiYes() {
        return $('#questions_yes');
    }
    get acceptCheckbox() {
        return $('[class="js-tou-checkbox tou-checkbox"]');
    }
    get questionsList() {
        return $('#questions-list');
    }

    enterCredentials() {
        this.loginInput.clearValue();
        this.companyInput.clearValue();
        this.emailInput.clearValue();
        this.phoneInput.clearValue();
        this.loginInput.setValue(this.randomLogin);
        this.companyInput.setValue(this.randomCompany);
        this.emailInput.setValue(this.randomEmail);
        this.phoneInput.setValue(this.randomPhone);
        this.installationTypeNotSure.click();
        this.questionsRadoiYes.click();
        browser.pause(1000);
        this.questionsList.clearValue();
        this.questionsList.setValue(this.randomQuestion);
        this.acceptCheckbox.click();
    }
}
module.exports = new EnterpriseServerForm();
