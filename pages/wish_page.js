import { BasePage } from './base_page.js';

export class WishPage extends BasePage {

    constructor(page) {
        super(page); // 🔥 very important
    }

    get maleCheckbox() {
        return this.getElement('Wish Page', 'MaleCheckboxXPATH');
    }   

    get femaleCheckbox() {
        return this.getElement('Wish Page', 'FemaleCheckboxXPATH');
    }   
    get switchToFrame() {
        return this.getElement('Wish Page', 'SwitchToFrameXPATH');
    }   
    get frames() {
        return this.getElement('Wish Page', 'FramesXPATH');
    }   
    get singleFrame() {
        return this.getElement('Wish Page', 'SingleFrameXPATH');
    }   

}
