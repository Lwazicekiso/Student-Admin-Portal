
import PocketBase from 'pocketbase';
import loginAsAdmin from '../MyComponents/loginAsAdmin.js';

const pb = new PocketBase('http://127.0.0.1:8090');

export default async function deleteAllRecords(collectionName) {

    await loginAsAdmin();
    
    try {
        let page = 1;
        let records;
        do {
            records = await pb.collection(collectionName).getList(page, 50); // Fetch records with pagination

            if (records.items.length > 0) {
                const deletePromises = records.items.map(record => pb.collection(collectionName).delete(record.id));
                
                // Wait for all delete operations to complete
                await Promise.all(deletePromises);
                console.log(`Deleted ${records.items.length} records from ${collectionName}.`);
            } else {
                console.log(`No more records found in ${collectionName}.`);
            }

            page++; // Go to the next page
        } while (records.items.length > 0); // Continue until no records are left

    } catch (error) {
        console.error('Error deleting records:', error);
    }
}
