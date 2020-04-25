class SearchPositivePage {
    get asideTypeScript() {
        return $('[href="/search?l=TypeScript&q=webdriverio&type=Repositories"]');
    }    
}
module.exports = new SearchPositivePage();