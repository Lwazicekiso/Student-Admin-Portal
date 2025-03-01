import PocketBase from 'pocketbase';
import loginAsAdmin from './loginAsAdmin.js';
import deleteAllRecords from '../CollectionsEdit/deleteCollection.js';

const pb = new PocketBase('http://127.0.0.1:8090');

async function createApplicantsCollection() {

    await loginAsAdmin();
    await deleteAllRecords("Applicants");
    try {

        // Fetch all users with the role 'candidate'
        const users = await pb.collection('Users').getFullList({
            filter: 'role="candidate"',
            $autoCancel: false,
        });

        // Prepare applicants data
        const applicants = users.map((user) => ({
            name: user.name,
            surname: user.surname,
            email: user.email
        }));

        // Create the Applicants collection and add the filtered users
        for (const applicant of applicants) {
            await pb.collection('Applicants').create(applicant);
            console.log(`Added applicant: ${applicant.name} ${applicant.surname} with ${applicant.email}`);
        }
        
    } catch (err) {
        console.error(`Error creating Applicants collection: ${err}`);
    }
}

createApplicantsCollection();
