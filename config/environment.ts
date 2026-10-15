import dotenv from 'dotenv';

const testEnv = process.env.TEST_ENV || 'qa';
dotenv.config({
    path: `.env.${testEnv}`
});

function required(
    name: string,
    value?: string
): string {
    if (!value) {
        throw new Error(`Missing env variable: ${name}`);
    }
    return value;
}

export const env = {
    name: testEnv,
    baseURL: required('BASE_URL', process.env.BASE_URL),
    apiURL: required('API_URL', process.env.API_URL), //apiURL: process.env.API_URL!
    adminUsername: required('ADMIN_USERNAME', process.env.ADMIN_USERNAME),
    adminPassword: required('ADMIN_PASSWORD', process.env.ADMIN_PASSWORD)
}

/*
dotenv.config({
    path: path.resolve(
        process.cwd(),
        `.env.${testEnv}`
    )
});
*/