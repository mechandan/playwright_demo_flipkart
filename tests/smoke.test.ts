import test ,{expect} from "../src/base/utils/fixtures/basePages"
import config from "../playwright.config"
import links from "../links_data/links_data"
import pageTitle from "../links_data/page_title"


test.describe.parallel('validate flipkart home page',async()=>{
    test.beforeEach(async({page})=>{
    await page.goto(config.use?.baseURL as string)
    await page.waitForLoadState('networkidle');
});
    // test.use({
    //     viewport:{
    //         height:600,
    //         width:1400
    //     }
    // })     
    test('Verify the title of the flipkart home page ',async({page,flipkartPage})=>{
        expect(await page.title()).toContain(`${pageTitle.title.homePage}`);
    })
    test('Verify that the login pop up is displayed',async({page,flipkartPage})=>{
        expect(await flipkartPage.checkLoginModalVisible()).toBe(true);
    })
    test('Verify that on clicking X , login pop up is not displayed',async({page,flipkartPage})=>{
        await flipkartPage.clickXonLoginPopUp();
        expect(await flipkartPage.checkLoginModalIsNotVisible()).toBe(false);
        test.step('click on the top offers',async()=>{
            await flipkartPage.mouseHoverAndClick(`${links.menu.topOffers}`);
            console.log('printing the page title  : ', await page.title());
        })
    })
   
})