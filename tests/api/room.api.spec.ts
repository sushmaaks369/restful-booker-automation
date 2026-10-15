/* //------- Layer-5 --------
import { test, expect } from '@playwright/test';
import { RoomService } from '../../services/RoomService';

test('Get Rooms', async({request}) => {
*/

//------- Layer-6 --------
import { test, expect } from "../../fixtures/baseTest";
test('Get Rooms', async({roomService}) => {

    const response = await roomService.getRooms();
    expect(response.status()).toBe(200);

    const roomBody = await response.json();

    //Pick room dynamically
    const roomId = roomBody.rooms[0].roomid;
    console.log('Selected Room id : ', roomId);
}); 