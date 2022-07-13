
import { ElementHandle, FrameLocator, Locator, Page } from "@playwright/test";
import { injectAxe, checkA11y, getViolations, reportViolations } from 'axe-playwright';
export default class Wrapper{

    constructor(public page:Page){

    }

    public async findLocator(value:any,options?:{
        frame?:string,
        tabId?:number,
        timeOut?:number,
        has?:Locator,
        hasText?:string

    }):Promise<Locator>
    
    {
        if(options?.tabId){
            this.page= this.page.context().pages()[options.tabId]

        }
        if(options?.frame){
            this.page.frameLocator(options.frame).locator(value,{
                has:options?.has,
                hasText:options?.hasText
            })

        }
        
        return this.page.locator(value,{
            has:options?.has,
            hasText:options?.hasText
        })

    }
    public getUrl():string{
        return this.page.url();
    }

    public async checkAccessibilityFor(elementLocator: string) {
        await injectAxe(this.page);
        if(elementLocator === 'page') {
            await checkA11y(this.page, {
                detailedReport: true,
                detailedReportOptions: {html:true}
            });
        } else {
            await checkA11y(this.page, elementLocator , {
                axeOptions: {
                    runOnly: {
                      type: 'tag',
                      values: ['wcag2a'],
                    },
                  },
                detailedReport: true,
                detailedReportOptions: {html:true}
            });
        }
    }


    /* Return boolean values based on element visibility */
    public async checkElementIsVisible(element:string):Promise<boolean>{
        const elm =   (await this.findLocator(element));
        await elm.waitFor({state:"attached"});
        return await elm.isVisible();
    }
    public async checkElementIsHidden(element:string):Promise<boolean>{
        const elm =   (await this.findLocator(element));
        await elm.waitFor({state:"hidden"});
        return await elm.isVisible();
    }

}