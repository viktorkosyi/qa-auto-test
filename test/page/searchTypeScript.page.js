class SearchTypeScriptPage {
    get firstLink(){
        return $('div ul li:nth-of-type(1) a[class="v-align-middle"]');
    }    
}
module.exports = new SearchTypeScriptPage();