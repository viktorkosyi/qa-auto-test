class TrialPlanPage {
    get cloudButton() {
        return $('[class="currency-container col-12 signup-plan-column js-details-container mr-sm-2 "]');
    }  
    get serverButton() {
        return $('[class="currency-container col-12 signup-plan-column js-details-container"]');
    }    
}
module.exports = new TrialPlanPage();