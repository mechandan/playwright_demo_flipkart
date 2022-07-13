import {Page, BrowserContext, expect, Locator} from "@playwright/test";
import Wrapper from "../src/base/utils/wrapper/Wrapper";
 

export default class FlipkartLaunchPage extends Wrapper {

    constructor(public page:Page){
        super(page);
    }
    loginPopUp='text=✕';
    menuList = `._37M3Pb>.eFQ30H`;

    public async mouseHoverAndClick(menuItem: string){
        await (await this.findLocator(this.menuList, {hasText: menuItem})).waitFor({state: "visible"});
       await ( await this.findLocator(this.menuList, {hasText: menuItem})).click();
        await this.page.waitForLoadState('networkidle');
    }

    public async verifyNewPageUrl(context: BrowserContext, urlText: string) {
        const [newWindow] = await Promise.all([
            context.waitForEvent("page"),
        ])
        await newWindow.waitForLoadState("load");
        expect(newWindow.url()).toContain(urlText);
        await newWindow.close();
    }

    public async checkLoginModalVisible():Promise<boolean>{ 
        return await this.checkElementIsVisible( this.loginPopUp);
    }
    public async checkLoginModalIsNotVisible():Promise<boolean>{ 
        return await this.checkElementIsHidden( this.loginPopUp);
    }
    public async clickXonLoginPopUp():Promise<void>{ 
        await this.page.locator(this.loginPopUp).click();
    }

 
}
