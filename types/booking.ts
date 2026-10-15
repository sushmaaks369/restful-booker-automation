export interface BookingDates {
    checkin: string,
    checkout: string
}

export interface Booking {
    roomid: number;
    firstname: string;
    lastname: string;
    depositpaid: boolean;
    bookingdates: BookingDates;
    email?: string;
    phone?: string;
}