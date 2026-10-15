import { test as base, expect } from '@playwright/test';

import { HomePage } from '../pages/HomePage';
import { RoomService } from '../services/RoomService';
import { BookingService } from '../services/BookingService';
import { AdminPage } from '../pages/AdminPage';

type MyFixtures = {
    homePage: HomePage;
    roomService: RoomService;
    bookingService: BookingService;
    adminPage: AdminPage;
}

export const test = base.extend<MyFixtures>({
    homePage: async({page}, use) => {
        const homePage = new HomePage(page);//creating object for homepage
        await use(homePage);
    },

    roomService: async({request}, use) => {
        const roomService = new RoomService(request);
        await use(roomService);
    },

    bookingService: async({request}, use) => {
        const bookingService = new BookingService(request);
        await use(bookingService);
    },

    adminPage: async({page}, use) => {
        const adminPage = new AdminPage(page);
        await use(adminPage);
    }
});

export{expect};