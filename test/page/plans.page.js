class PlansPage {
    get joinFreeButton() {
        return $('[class="d-flex container-xl mx-auto overflow-x-scroll pricing-plans-container js-pricing-plans-container flex-md-justify-center pt-2 pb-4"] div:nth-of-type(1) div a');
    }    
}
module.exports = new PlansPage();