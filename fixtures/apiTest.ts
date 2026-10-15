import { test as base, expect } from './baseTest';
import { Logger } from '../utils/logger';
//import { Buffer } from 'node:buffer';

export const test = base.extend({});

test.afterEach(async( {}, testInfo ) => {

    Logger.info(`${testInfo}`);

    if(testInfo.status != testInfo.expectedStatus) {
        
        const errorMessage = testInfo.error?.message||"No Error";

        await testInfo.attach("Failure Details", {
            body : Buffer.from(errorMessage),
            //body: errorMessage,
            contentType : 'text/plain'  
        })
        Logger.error(`Test Failed :: ${testInfo.title}`);
    } else {
        Logger.info(`Test Passed :: ${testInfo.title}`);
    }
});

export { expect };