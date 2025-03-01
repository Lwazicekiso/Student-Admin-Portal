import PocketBase from 'pocketbase';
import loginAsAdmin from './loginAsAdmin.js';
import deleteAllRecords from '../CollectionsEdit/deleteCollection.js';

// Initialize PocketBase client
const pb = new PocketBase('http://127.0.0.1:8090'); 

async function createLecturersCollection() {

    await loginAsAdmin(); 
    await deleteAllRecords("Lecturers");
    try {
        // Fetch all users with the role "lecturer"
        const users = await pb.collection("Users").getFullList({
            filter: 'role = "lecturer"',
            $autoCancel: false,
        });

        for (const user of users) {
            const lecturerData = {
                college_id: user.college_id,
                name: user.name,
                surname: user.surname,
                email: user.email,
                avatar: user.avatar,
            };

            // Add lecturer to Lecturers collection
            try {
                const record = await pb.collection("Lecturers").create(lecturerData);
                console.log(`Lecturer added successfully: ${record.name}`);
            } catch (err) {
                console.error(`Failed to add lecturer ${user.name}: ${err}`);
            }
        }
    } catch (err) {
        console.error(`Error fetching users: ${err}`);
    }
}

createLecturersCollection();