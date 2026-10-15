import { test as base, expect } from './baseTest';
import { Logger } from '../utils/logger';

export const test = base.extend({});

test.afterEach( async({ page }, testInfo ) => {
    Logger.info(`${testInfo}`) ;

    if(testInfo.status != testInfo.expectedStatus) {

        const screenShot = await page.screenshot();
        
        await testInfo.attach('Failure Screenshot', {
            body : screenShot,
            contentType : 'image/png'
        });
        Logger.error(`Test Failed ::: ${testInfo.title}`);
    } else {
        Logger.info(`Test Passed ::: ${testInfo.title}`);
    }
});

export { expect };