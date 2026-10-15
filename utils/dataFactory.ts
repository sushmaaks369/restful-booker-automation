export class DataFactory {
    
    static uniqueString(fname: string): string {
        return `${fname}_${Date.now()}`
    }

    /*
    static randomEmail(email: string): string {
        return `${email}_${Date.now()}@test.com`
    }
    */
    static randomEmail(): string {
        return `user_${Date.now()}@test.com`
    }    

    static futureDate(daysFromToday: number): string {
        const date = new Date();

        date.setDate(date.getDate() + daysFromToday);
        console.log(date.toISOString());
        return date.toISOString().split('T')[0];
    }
}