import { faker } from '@faker-js/faker';

export function randomStuffdemoOutput() {
    return{
        job:faker.person.jobTitle()
    } 
}