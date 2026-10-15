import { Booking } from "../types/booking";
import { DataFactory } from "../utils/dataFactory";

export function createBooking(roomId: number): Booking {
    
    return {
        roomid: roomId,
        firstname: DataFactory.uniqueString('John'),
        lastname: 'KS',
        depositpaid: true,
        bookingdates: {
            checkin: DataFactory.futureDate(10),
            checkout: DataFactory.futureDate(12)
        },
        email: DataFactory.randomEmail(),
        phone: '12325464'
    }
}