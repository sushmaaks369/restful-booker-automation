import { test, expect } from "../../fixtures/baseTest";
import { createBooking } from "../../test-data/bookingData";
import { Logger } from "../../utils/logger";

test('Create Booking', async({bookingService, roomService}) => {

    // To pass room is dynamically from api response
    
    const responseRoom = await roomService.getRooms();
    expect(responseRoom.status()).toBe(200);

    const roomBody = await responseRoom.json();

    //Pick room dynamically
    const roomId = roomBody.rooms[0].roomid;
    Logger.info(`Selected Room id : , roomId`);

    //create booking
    const response = await bookingService.createBooking(createBooking(roomId));
    Logger.info(`Status : , response.status()`);
    Logger.info(`Body : , await response.text()`);
    
    expect(response.status()).toBe(201);
});