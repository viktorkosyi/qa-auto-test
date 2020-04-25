class CareersPage {
    get openPositionsButton() { 
        return $('[href="#positions"]');
    }
    get testLabel() {
        return $$('[class="pb-md-6"] div[class="Details js-details-container"]');
    }    
}
module.exports = new CareersPage();