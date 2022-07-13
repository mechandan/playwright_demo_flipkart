import test ,{expect} from "../src/base/utils/fixtures/basePages";
import links from "../links_data/links_data";
import config from "../playwright.config";


test.describe.parallel('Validate accessibility feature of flipkart ',async()=>{
    test.beforeEach(async({page})=>{
        await page.goto(config.use?.baseURL as string)
        await page.waitForLoadState('networkidle');
    });

    test('Verify that all the buttons on the home page follows accessibility rules ',async({page,flipkartPage})=>{
        await flipkartPage.checkAccessibilityFor('Button');
    })
})