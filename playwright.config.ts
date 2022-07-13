import { chromium, devices, PlaywrightTestConfig } from "@playwright/test";
import { testConfig } from './testConfig';
const ENV = process.env.ENV;

if (!ENV || !['prod', 'stage', 'dev', 'demo'].includes(ENV)) {
  console.log(`Please provide a correct environment value like "npx cross-env ENV=prod|stage|dev|demo"`);
  process.exit();
}else {
    console.log(`Test cases are executing in ${ENV} ........`);
}

const config: PlaywrightTestConfig={
    timeout:90*1000,    
    reporter: [ ['html', { open: 'never' }] ],
    workers:1,// parallel testing
    retries:2,
    // projects:[
    //     {
    //         name:"chrome",
    //         use:{...devices['Desktop Chrome']}
    //     },
    //     // {
    //     //     name:"firefox",
    //     //     use:{...devices['Desktop Firefox']}
    //     // },
    //     // {
    //     //     name:"webkit",
    //     //     use:{...devices['Desktop Safari']}
    //     // }
       

    // ],
use: {
    browserName: 'chromium',
    viewport:null,
    headless:false,
    screenshot:"only-on-failure",
    video:"retry-with-video",
    baseURL: testConfig[process.env.ENV],
    launchOptions:{
        args:["--start-maximized"]
    }
    
},
testMatch:[ 'smoke.test.ts','accessibility.test.ts'],
}
export default config;