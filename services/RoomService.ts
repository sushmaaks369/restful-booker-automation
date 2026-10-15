import { APIRequestContext, APIResponse } from "@playwright/test";

export class RoomService {
    readonly request: APIRequestContext;

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async getRooms(): Promise<APIResponse> {
        return await this.request.get('/api/room');
    }
}