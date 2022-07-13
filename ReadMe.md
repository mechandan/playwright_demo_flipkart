# SCOPE            : Just for demo purpose
# TOOLS/ FRAMEWORK : 

# Playwright  -
 Playwright is a framework for Web Testing and Automation. It allows testing Chromium, Firefox and WebKit with a single API. Playwright is built to enable cross-browser web automation that is ever-green, capable, reliable and fast.Headless execution is supported for all the browsers on all platforms


# Why Playwright :

**Pros** :

1. *Backed by IT giant Microsoft*

2. *Auto-wait* : Playwright waits for elements to be actionable prior to performing actions. It also has rich set of introspection events. The combination of the two eliminate the need for artificial timeouts - primary cause of flaky tests.

3. *Web-first assertions* : Playwright assertions are created specifically for the dynamic web. Checks are automatically retried until the necessary conditions are met.

4. *No trade-offs • No limits* : 

Browsers run web content belonging to different origins in different processes. Playwright is aligned with the modern browsers architecture and runs tests out-of-process. This makes Playwright free of the typical in-process test runner limitations.

*Multiple everything* Test scenarios that span multiple tabs, multiple origins and multiple users. Create scenarios with different contexts for different users and run them against your server, all in one test.

*Trusted events* Hover elements, interact with dynamic controls, produce trusted events. Playwright uses real browser input pipeline indistinguishable from the real user.

Test frames, pierce Shadow DOM. Playwright selectors pierce shadow DOM and allow entering frames seamlessly.

5. *Full isolation • Fast execution*
*Browser contexts*  Playwright creates a browser context for each test. Browser context is equivalent to a brand new browser profile. This delivers full test isolation with zero overhead. Creating a new browser context only takes a handful of milliseconds.

*Log in once* Save the authentication state of the context and reuse it in all the tests. This bypasses repetitive log-in operations in each test, yet delivers full isolation of independent tests.

6. *Tracing*. Configure test retry strategy, capture execution trace, videos, screenshots to eliminate flakes.
7. Easy to integrate with VS Code as playwright extension is also available.
8. There is almost no 3rd party dependencies even reporting is in built.
9. Supports multi languages
10. Unlike selenium its not based on HTTP protocol rather it uses Socket for connection hence execution is way better.
11. Supports multiple browsers
12. Supports cross browsers and parallel testing.
13. Supports mobile.
		  
# LANGUAGES        : 
Javascript / TypeScript

# DESIGN PATTERNS :- 

Page Object Model - Within a web app’s UI there are areas that a tests interact with. A Page Object simply models these as objects within the test code. This reduces the amount of duplicated code and means that if the UI changes, the fix need only be applied in one place.

# Advantages :
There is a clean separation between test code and page specific code such as locators (or their use if you’re using a UI Map) and layout.
There is a single repository for the services or operations offered by the page rather than having these services scattered throughout the tests.


# FOLDER STRUCTURE :

1. page folder : It consists of  the page object ( element locators ) for each of the pages.

ex: 'flipkartHome.page.ts' consists of all the home page elements.

2. tests       : This folder consists of the test cases for each of the pages ( currently smoke test are added ).

3. links_data  : This folder consists of the data that are required for validation.
 
ex: 'links_data.ts' consists of all the links & URL  name that needs to be validated

4. playwright-report : This file contains the test execution report.

5. src-->utils-->fixtures : This file contains the fixtures files i.e all the pages object at one place.

6. src-->utils-->wrapper : This file contains the common functions which will be used across the PO files

7. package.json          : This file contains all the dependencies which will get install on npm install

8. playwright.config.ts  : THis files contains all the configurations related stuff like which browser to execute, which report to be generated etc.
                           This is the entry point of the execution.

# Steps to run the test cases :
1. Instal node js on machine.
1. Clone the repository from 
2. npm install :- Will install all the neccessary dependencies
   This will install the playwright and the playwright test runner from the npm repositories

3. npm test   :- Execute all the test cases 
4. npx playwright show-report : Display the report in HTML format.
5. TO run in different env scritps are added in the package.json, ex: to execute in dev : npm run dev
6. Changing the ENV value in the command npx cross-env ENV=qa npm run test will pick up the needed environment
7. If different value is provided which is not present in the environments list then the default message is triggered to provide valide environment value




# For Accessibility testing :
1. We are using axe-playwright module.
2. https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#best-practices-rules


Note :  By default the reports are generated inside 'playwright-report' folder




# @Autor : Chandan Choudhary 







