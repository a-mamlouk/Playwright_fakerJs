import {faker, fakerFR} from '@faker-js/faker';
import * as fs from 'fs';
// import * as createCsvWriter from 'csv-writer';
import path from 'path';

// Define the type of the user data
type UserData ={
    name: string;
    email: string;
    username: string;
    phone: string;
    age: number;
    address: string;
    country: string;
    job: string;
}

// Function to generate random user data
export function generateUserData(){
    return {
        name: fakerFR.person.firstName(),
        email: faker.internet.email(),
        username: faker.internet.userName(),
        phone: fakerFR.phone.number(),
        age: faker.number.int({min: 18, max: 99}),
        address: faker.location.streetAddress(),
        country: faker.location.country(),
        job: fakerFR.person.jobTitle()
    };
}

export const generateUserDataArray = (numRecords: number): UserData[] => {
    const testData: UserData[] = faker.helpers.multiple(generateUserData,{
        count: numRecords
    });
    return testData;
}

// Add more utility functions as needed