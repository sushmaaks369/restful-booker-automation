//purpose of creating this auto setup.ts is to perform the login and save the authenticated browser state

import { test as setup, expect } from '@playwright/test';
import { env } from '../../config/environment'; 

const authFile = '.auth/admin.json';

setup('Authentication Admin', async({ page }) => {
    await page.goto('/admin');

    await page.locator('#username').fill(env.adminUsername);

    await page.locator('#password').fill(env.adminPassword);

    await page.locator('#doLogin').click();

    //await expect (page).toHaveURL('https://automationintesting.online/admin/rooms');

    await expect (page.getByText('Room')).toBeVisible();

    await page.context().storageState({
        path: authFile
    });
    
});