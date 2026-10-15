import { APIRequestContext, APIResponse } from "@playwright/test";
import { Booking } from "../types/booking";

export class BookingService {

    readonly request: APIRequestContext;

    constructor(request: APIRequestContext){
        this.request = request;
    }

    async getBooking(): Promise<APIResponse> {
        return await this.request.get('/');
    }

    async createBooking(bookingPayload: Booking): Promise<APIResponse>{
        return await this.request.post('/api/booking', {
            data: bookingPayload
        });
    }
}