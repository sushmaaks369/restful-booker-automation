import { Page, Locator } from '@playwright/test';

/* 
    Creating page object model (pom)
    POM - Seperating locator and Action methods from testcases
*/

export class HomePage {

    //create getter and setter
    readonly page: Page;
    readonly rooms: Locator;
    readonly booking: Locator;

    //locators
    constructor(page: Page) {
        this.page = page;
        this.rooms = page.locator('#navbarNav a[href="/#rooms"]');
        this.booking = page.locator('#navbarNav a[href="/#booking"]');
    }

    //Action methods
    async navigate() {
        await this.page.goto('/');
    }
    
    async gotoRooms() {
        await this.rooms.click();
    }

    async gotoBooking() {
        await this.booking.click();
    }
}