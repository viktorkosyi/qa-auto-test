class ExploreGitPage {

    get topicsButton(){
        return $('[class="d-flex flex-wrap flex-items-center flex-justify-center flex-md-justify-start text-center text-md-left"]:nth-of-type(1) a:nth-of-type(2)');
    };
    get title(){
        return $('[class="h0-mktg"]');
    }
}
module.exports = new ExploreGitPage();