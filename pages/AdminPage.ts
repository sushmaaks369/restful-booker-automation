import { Page, Locator, expect } from "@playwright/test";

export class AdminPage {

    readonly page: Page;

    readonly roomName: Locator;
    readonly roomType: Locator;
    readonly price: Locator;
    readonly createButton: Locator;

    constructor(page : Page){
        this.page = page;
        
        this.roomName = page.locator('#roomName');
        this.roomType = page.locator('#type');
        this.price = page.locator('#roomPrice');
        
        this.createButton = page.locator('#createRoom');
    }

    async navigate(){
        await this.page.goto('/admin');
    }

    async createRoom(roomName: string, roomType: string, price: string) {
        
        await this.roomName.fill(roomName);
        await this.roomType.selectOption(roomType);
        await this.price.fill(price);

        await this.createButton.click();
        
        //console.log('Created roomName = ',roomName," roomType = ",roomType," price = ",price);
    }
 
    async expectRoomVisible(roomName: string) {

        await expect( this.page.getByText(roomName) ).toBeVisible();
    }

    async deleteRoom(roomName: string) {
    
        const row = this.page.getByTestId('roomlisting').filter({ hasText: roomName})

        //await row.getByRole('button', { name: /delete/i }).click();
        await row.locator('.roomDelete').click();
        //console.log(roomName,' is Deleted')
    }
}