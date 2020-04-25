class HomePage {
    get title() { 
        return $('aside [class="f5 mb-1"]');
    }
    get avatar() {
        return $('[class="avatar avatar-user "]');
    }
    get userName() {
        return $('[class="css-truncate-target"]');
    }
    get logOutButton() {
        return $('[class="dropdown-item dropdown-signout"]');
    }

    checkHomePage() {
        this.avatar.click();
    }
    logOut() {
        this.logOutButton.click();
    }
}
module.exports = new HomePage();