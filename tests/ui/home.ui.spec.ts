/*
//--------------- Layer=5 -------------
import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';

test('Verify Restful Booker Home Page loads', async({page}) => {
    const homePage = new HomePage(page);
*/

//--------------- Layer=6 -------------
import { test, expect } from "../../fixtures/baseTest";

test('Verify Restful Booker Home Page loads', async({homePage}) => {

    await homePage.navigate();
    await expect(homePage.rooms).toBeVisible();
    await expect(homePage.booking).toBeVisible();
});