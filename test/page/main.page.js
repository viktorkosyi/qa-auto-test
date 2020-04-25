const randomInput = require('../page/randomInput');

class MainPage {
    randomLogin = randomInput.randomInput(9);
    randomEmail = randomInput.randomInput(9) + '@' + randomInput.randomInput(5) + '.com';
    randomPassword = randomInput.randomInput(15);

    get usernameInput() {
        return $('[id="user[login]"]');
    }
    get emailInput() {
        return $('[id="user[email]"]');
    }
    get passwordInput() {
        return $('[id="user[password]"]');
    }
    get singupButton() {
        return $('[class="btn-mktg btn-primary-mktg btn-large-mktg f4 btn-block my-3 js-add-experiment-labels-to-ga-click"]');
    }
    get usernameInputBasement() {
        return $('[id="user[login]-footer"]');
    }
    get emailInputBasement() {
        return $('[id="user[email]-footer"]');
    }
    get passwordInputBasement() {
        return $('[id="user[password]-footer"]');
    }
    get singupButtonBasement() {
        return $('[class="btn-mktg btn-primary-mktg btn-block mt-n1"]');
    }
    get singInButton() {
        return $('[href="/login"]');
    }
    get navWhyGit() {
        return $('nav ul li:nth-of-type(1) [class="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap d-block d-lg-inline-block"]');
    }
    get navExplore() {
        return $('nav ul li:nth-of-type(4) [class="HeaderMenu-details details-overlay details-reset width-full"]');
    }
    get navPricing() {
        return $('nav ul li:nth-of-type(6) [class="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap d-block d-lg-inline-block"]');
    }
    get navWhyGitDrop() {
        return $('[class="dropdown-menu flex-auto rounded-1 bg-white px-0 mt-0 pb-4 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4"]');
    }
    get navExploreDrop() {
        return $('[class="dropdown-menu flex-auto rounded-1 bg-white px-0 pt-2 pb-0 mt-0 pb-4 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4"]');
    }
    get navPricingDrop() {
        return $('[class="dropdown-menu flex-auto rounded-1 bg-white px-0 pt-2 pb-4 mt-0 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4"]');
    }
    get plansPageButton() {
        return $('[class="pb-2 lh-condensed-ultra d-block link-gray-dark no-underline h5 Bump-link--hover"]');
    }
    get exploreGitButton() {
        return $('[href="/explore"]');
    }
    get inputSearch() {
        return $('[class="form-control input-sm header-search-input jump-to-field js-jump-to-field js-site-search-focus "]');
    }
    get searchButton() {
        return $('[class="js-jump-to-badge-search-text-global"]');
    }
    get navEnterpriseButton() {
        return $('nav ul li:nth-of-type(3) a[href="/enterprise"]');
    }
    get careersLink() {
        return $('[href="/about/careers"]');
    }

    checkInput() {
        while (this.usernameInput.isDisplayed() == false) {
            //browser.deleteCookies();
            browser.reloadSession();
            browser.url('https://github.com');
        }
    }
    enterRandomCredentials() {
        this.usernameInput.clearValue();
        this.emailInput.clearValue();
        this.passwordInput.clearValue();
        this.usernameInput.setValue(this.randomLogin);
        this.emailInput.setValue(this.randomEmail);
        this.passwordInput.setValue(this.randomPassword);
        this.singupButton.click();
    }
    enterRandomCredentialsBsement() {
        this.usernameInputBasement.clearValue();
        this.emailInputBasement.clearValue();
        this.passwordInputBasement.clearValue();
        this.usernameInputBasement.setValue(this.randomLogin);
        this.emailInputBasement.setValue(this.randomEmail);
        this.passwordInputBasement.setValue(this.randomPassword);
        this.singupButtonBasement.click();
    }
    singInClick() {
        this.singInButton.click();
    }
    startSearch() {
        this.inputSearch.clearValue();
        this.inputSearch.setValue('webdriverio');
        this.searchButton.click();       
    }
}
module.exports = new MainPage();