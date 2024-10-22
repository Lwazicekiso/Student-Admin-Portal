import PocketBase from 'pocketbase';
import loginAsAdmin from './loginAsAdmin.js';
import deleteAllRecords from '../CollectionsEdit/deleteCollection.js';

const pb = new PocketBase('http://127.0.0.1:8090');

async function createStudentsCollection() {

    await loginAsAdmin(); 
    await deleteAllRecords("Students");

    try {
        // Fetch all Applicants with status true
        const applicants = await pb.collection('Applicants').getFullList({
            filter: 'status = true',
            $autoCancel: false,
        });
        console.log(applicants);

        for (const applicant of applicants) {
            const studentData = {
                name: applicant.name,
                surname: applicant.surname,
                email: applicant.email,
            };

            // Add lecturer to Lecturers collection
            try {
                const record = await pb.collection('Students').create(studentData);
                console.log(`Student added successfully: ${record.name}`);
            } catch (err) {
                console.error(`Failed to add student ${applicant.name}: ${err}`);
            }
        }
    } catch (err) {
        console.error(`Error fetching applicant: ${err}`);
    }
}

createStudentsCollection();
    
