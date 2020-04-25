class EnterprisePage {
    get freeTrialButton() {
        return $('[class="mr-4 float-left"] a[href="/organizations/enterprise_plan"]');
    }    
}
module.exports = new EnterprisePage();