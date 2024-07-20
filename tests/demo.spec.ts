import { test, expect } from '@playwright/test';
import { randomStuffdemoOutput } from '../JDD/Utils/fakerSample';
import {generateUserData}  from '../JDD/Utils/fakerDataUtil';
test('has title', async ({ page }) => {
  
    const person = randomStuffdemoOutput();
    console.log(person.job); 
    const data = generateUserData(); 
    console.log(data.name);

});