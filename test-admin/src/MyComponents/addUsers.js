import PocketBase from 'pocketbase';
import { promises as fs } from 'fs';
import loginAsAdmin from './loginAsAdmin.js';
import deleteAllRecords from '../CollectionsEdit/deleteCollection.js';

// Initialize Pocketbase client
const pb = new PocketBase('http://127.0.0.1:8090'); 

async function addUsersFromFile(filePath, collectionName) {

    await loginAsAdmin(); // Ensure admin login
    await deleteAllRecords("Users");
    let users;
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        users = JSON.parse(data);
    } catch (err) {
        console.error(`Error reading or parsing the JSON file: ${err}`);
        return; // Exit if the file reading or parsing fails
    }

    try {
        for (const user of users) {

            console.log(`Creating user with data:`, JSON.stringify(user, null, 2)); // Pretty print the user object

            try {
                
                const record = await pb.collection("Users").create(user);
                
                console.log(`User added successfully: ${record.name}`);
            } catch (err) {
                console.error(`Failed to add user ${user.name}: ${err}`);

                if (err.response) {
                    console.error(`Response data:`, err.response); // Log the error response for details
                }
            }
        }
    } catch (err) {
        console.error(`Error reading the JSON file: ${err}`);
    }
}

const filePath = './users.json';
const collectionName = 'Users';
addUsersFromFile(filePath, collectionName);