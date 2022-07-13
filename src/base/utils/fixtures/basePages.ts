import {test as baseTest} from "@playwright/test"
import FlipkartLaunchPage from "../../../../page/flipkartHome.page";





const test = baseTest.extend<{
    flipkartPage:FlipkartLaunchPage;
}>({
    flipkartPage:async({page},use)=>{
        await use(new FlipkartLaunchPage(page));
    }
})

export default test;
export const expect = test.expect;