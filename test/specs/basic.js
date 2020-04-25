const assert = require('assert');
const mainPage = require('../page/main.page.js');
const homePage = require('../page/home.page.js');
const singInPagePage = require('../page/singInPage.page.js');
const singupPage = require('../page/singup.page.js');
const resetPass = require('../page/resetPass.page.js');
const passSent = require('../page/passSent.page.js');
const passNotSent = require('../page/passNotSent.page.js');
const plansPage = require('../page/plans.page.js');
const exploreGitPage = require('../page/exploreGit.page.js');
const searchPositivePage = require('../page/searchPositive.page.js');
const searchTypeScriptPage = require('../page/searchTypeScript.page.js');
const enterprisePage = require('../page/enterprise.page.js');
const trialPlanPage = require('../page/trialPlan.page.js');
const enterpriseServerForm = require('../page/enterpriseServerForm.page.js');
const careersPage = require('../page/careers.page.js');

describe('final project', () => {

    it('enter random credentials', () => {
        browser.url('https://github.com');
        mainPage.checkInput();
        mainPage.enterRandomCredentials();
        browser.getUrl();
        assert.strictEqual(browser.getUrl().includes('join'), true);
        assert.strictEqual(singupPage.titleVerify.isDisplayed(), true);

    })
    it('enter random credentials in footer form', () => {
        browser.url('https://github.com');
        mainPage.enterRandomCredentialsBsement();
        browser.getUrl();
        assert.strictEqual(browser.getUrl().includes('join'), true);
        assert.strictEqual(singupPage.titleVerify.isDisplayed(), true);
    })
    it('should sing in with exist credentials', () => {
        browser.url('https://github.com');
        mainPage.singInButton.click();
        singInPagePage.enterExistCredentials();
        homePage.checkHomePage();
        assert.strictEqual(homePage.title.isDisplayed(), true);
        assert.strictEqual(homePage.userName.isDisplayed(), true);
        homePage.logOut();
    })
    it('should send forgot password email', () => {
        browser.url('https://github.com');
        mainPage.singInButton.click();
        singInPagePage.forgotPassLink.click();
        resetPass.sendExistEmail();
        assert.strictEqual(passSent.title.isDisplayed(), true);
    })
    it('should not send forgot password email - wrong', () => {
        browser.url('https://github.com');
        mainPage.singInButton.click();
        singInPagePage.forgotPassLink.click();
        resetPass.sendWrongInput();
        assert.strictEqual(passNotSent.title.isDisplayed(), true);
    })
    it('should not send forgot password email - empty', () => {
        browser.url('https://github.com');
        mainPage.singInButton.click();
        singInPagePage.forgotPassLink.click();
        resetPass.sendEmptyEmail();
        assert.strictEqual(passNotSent.title.isDisplayed(), true);
    })
    it('should show drop-down lists WhyGit', () => {
        browser.url('https://github.com');
        mainPage.singInButton.moveTo();
        mainPage.navWhyGit.moveTo();
        assert.strictEqual(mainPage.navWhyGitDrop.isDisplayed(), true);
        mainPage.navWhyGit.click();
    })
    it('should show drop-down lists Explore', () => {
        browser.url('https://github.com');
        mainPage.singInButton.moveTo();
        mainPage.navExplore.moveTo();
        assert.strictEqual(mainPage.navExploreDrop.isDisplayed(), true);
        mainPage.navExplore.click();
    })
    it('should show drop-down lists Pricing', () => {
        browser.url('https://github.com');
        mainPage.singInButton.moveTo();
        mainPage.navPricing.moveTo();
        assert.strictEqual(mainPage.navPricingDrop.isDisplayed(), true);
        mainPage.navPricing.click();
    })
    it('should enter creditionals on plans page', () => {
        browser.url('https://github.com');
        mainPage.singInButton.moveTo();
        mainPage.navPricing.moveTo();
        mainPage.plansPageButton.click()
        plansPage.joinFreeButton.click();
        singupPage.enterCreditionals(); 
        assert.strictEqual(singupPage.title.isDisplayed(), true);
    })
    it('should go to Topics page', () => {
        browser.url('https://github.com');
        mainPage.singInButton.moveTo();
        mainPage.navExplore.moveTo();
        mainPage.exploreGitButton.click();
        exploreGitPage.topicsButton.click();
        assert.strictEqual(exploreGitPage.title.isDisplayed(), true);
    })
    it('should have webbdriverio in Url', () => {
        browser.url('https://github.com');
        mainPage.startSearch();
        searchPositivePage.asideTypeScript.moveTo();
        assert.strictEqual(searchPositivePage.asideTypeScript.isDisplayed(), true);
        searchPositivePage.asideTypeScript.click();
        searchTypeScriptPage.firstLink.click();
        assert.strictEqual(browser.getUrl().includes('webdriverio'), true);
    })
    it('should enter credentials on Enterprise > Free trial', () => {
        browser.url('https://github.com');
        mainPage.navEnterpriseButton.click();
        enterprisePage.freeTrialButton.click();
        trialPlanPage.cloudButton.click();
        singupPage.enterCreditionals();
        assert.strictEqual(singupPage.userLoginInput.getValue() !== "" , true);
        browser.back();
        trialPlanPage.serverButton.click();
        enterpriseServerForm.enterCredentials();
        assert.strictEqual(enterpriseServerForm.questionsList.getValue() !== "" , true);
    })
    it('should print is console open positions', () => {
        browser.url('https://github.com');
        mainPage.careersLink.click();
        careersPage.openPositionsButton.click();
        for(let i=0; i<careersPage.testLabel.length; i++) {
            console.log(careersPage.testLabel[i].$('h3').getText());
        } 
    })
})