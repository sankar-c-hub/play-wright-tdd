// import JsonUtility from '../utils/json_utility.js';

// export class DemoWebShopPage {

//     constructor(page) {
//         this.page = page;
//     }

//     // 🔹 ELEMENT GETTERS ONLY (POM rule)
//     get booksLink() {
//         return this._getLocator("Demo Web Shop", "BooksLinkXPATH");
//     }

//     get computersLink() {
//         return this._getLocator("Demo Web Shop", "ComputersLinkXPATH");
//     }

//     get electronicsLink() {
//         return this._getLocator("Demo Web Shop", "ElectronicsLinkXPATH");
//     }

//     get apparelShoesLink() {
//         return this._getLocator("Demo Web Shop", "ApparelShoesLinkXPATH");
//     }

//     get digitalDownloadsLink() {
//         return this._getLocator("Demo Web Shop", "DigitaldownloadsLinkXPATH");
//     }

//     get jewelryLink() {
//         return this._getLocator("Demo Web Shop", "JewelryLinkXPATH");
//     }

//     get giftCardsLink() {
//         return this._getLocator("Demo Web Shop", "GiftCardsLinkXPATH");
//     }

//     // 🔹 PRIVATE GENERIC LOCATOR HANDLER
//     _getLocator(pageName, elementName) {
//         const locatorValue = JsonUtility.getLocator(pageName, elementName);

//         if (locatorValue.startsWith('//') || locatorValue.startsWith('(')) {
//             return this.page.locator(`xpath=${locatorValue}`);
//         }
//         return this.page.locator(locatorValue);
//     }
// }


import { BasePage } from './base_page.js';

export class DemoWebShopPage extends BasePage {

    constructor(page) {
        super(page); // 🔥 very important
    }

    get booksLink() {
        return this.getElement('Demo Web Shop', 'BooksLinkXPATH');
    }

    get computersLink() {
        return this.getElement('Demo Web Shop', 'ComputersLinkXPATH');
    }

    get electronicsLink() {
        return this.getElement('Demo Web Shop', 'ElectronicsLinkXPATH');
    }

    get apparelShoesLink() {
        return this.getElement('Demo Web Shop', 'ApparelShoesLinkXPATH');
    }

    get digitalDownloadsLink() {
        return this.getElement('Demo Web Shop', 'DigitaldownloadsLinkXPATH');
    }

    get jewelryLink() {
        return this.getElement('Demo Web Shop', 'JewelryLinkXPATH');
    }

    get giftCardsLink() {
        return this.getElement('Demo Web Shop', 'GiftCardsLinkXPATH');
    }
}
