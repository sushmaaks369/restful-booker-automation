import { test,expect } from "../../fixtures/baseTest";
import { DataFactory } from "../../utils/dataFactory";
import { Logger } from "../../utils/logger";

test.describe('Admin Room Management', () => {

    test('Create Room', async({ adminPage}) => {

        const roomName = DataFactory.uniqueString('Room');
        
        await adminPage.navigate();

        Logger.info('Creating Room');

        await adminPage.createRoom(roomName, 'Single', '150');

        await adminPage.expectRoomVisible(roomName);
    });

    test('Delete Room', async({ adminPage }) => {

        const roomName = `Room_${Date.now()}`;

        await adminPage.navigate();
        
        await adminPage.createRoom(roomName, 'Single', '150');

        await adminPage.expectRoomVisible(roomName);
  
        await adminPage.deleteRoom(roomName);

        await adminPage.expectRoomVisible(roomName);
    });
});