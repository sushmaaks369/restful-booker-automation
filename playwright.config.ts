import { defineConfig, devices } from '@playwright/test';
import { env } from './config/environment';

export default defineConfig({
    testDir: './tests',

    //Global Settings
    timeout: 30000,

    retries: process.env.CI ? 2 : 0, //if CI is true then, in case of some network issue/failure it will retry for 2 times

    workers: process.env.CI ? 1 : undefined, //parallel execution - multiple testcases executing in parallel mode

    //reporter: 'html',//earlier

    reporter: [
        [
            'html', {
                outputFolder: 'playwright-html-report',
                open: 'never'
            } 
        ],
        [
            'allure-playwright', {
                resultsDir: 'allure-results',
                detail: true
            }
        ]
    ],
    use:{
        //Environment level configuration
        baseURL: env.baseURL,
        headless: true,
        trace: 'on',
        screenshot: 'only-on-failure',
        video:'on'
    },

    //project level configurations
    projects:[
        {
            name:'setup',
            testMatch: /.*\.setup\.ts/,
            use: {
                baseURL: env.baseURL,
            }
        },
        //UI-Chrome
        {
            name: 'chromium',
            testMatch: /ui\/.*\.ui\.spec\.ts/,
            dependencies:[
                'setup'
            ],
            use: {
                baseURL: env.baseURL,
                storageState: '.auth/admin.json',
                ...devices['Desktop Chrome']
            }
        },
        //UI-Webkit
        {
            name: 'webkit',
            testMatch: /ui\/.*\.ui\.spec\.ts/,
            dependencies:[
                'setup'
            ],
            use: {
                baseURL: env.baseURL,
                storageState: '.auth/admin.json',
                ...devices['Desktop WebKit']
            }
        },
        //API
        {
            name: 'api',
            testMatch: /api\/.*\.api\.spec\.ts/,
            
            use: {
                baseURL: env.apiURL,
                extraHTTPHeaders: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                }
            }
        }
    ]
})