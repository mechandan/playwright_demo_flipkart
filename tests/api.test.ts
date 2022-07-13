import test ,{expect} from "../src/base/utils/fixtures/basePages"

test.describe('validate the api testing', async () => {
    test('verify the get method',async ({request}) => {
        const response = await request.get('https://www.google.com/ads/ga-audiences?t=sr&aip=1&_r=4&slf_rd=1&v=1&_v=j96&tid=UA-1538528-1&cid=1607132636.1654263307&jid=544880980&_u=aHDAAUADQAAAAG~&z=992469765');
        console.log('printing the response -------- ' + JSON.stringify(response));
    })
});