const axios = require('axios');

// Base URL of your PocketBase instance
const baseUrl = 'http://127.0.0.1:8090'; // Change this URL to your PocketBase instance's URL if different

// Admin authentication token (replace with your actual token)
const authToken = '1209600';  // Replace with a valid token

// Function to add dummy data
async function addDummyData() {
    try {
        // Dummy data for 'Students' collection
        const studentsData = [
            { name: "John", surname: "Doe", email: "johndoe@example.com" },
            { name: "Jane", surname: "Smith", email: "janesmith@example.com" },
            { name: "Samuel", surname: "Green", email: "samuelgreen@example.com" },
            { name: "Emily", surname: "White", email: "emilywhite@example.com" }
        ];

        for (let student of studentsData) {
            const studentResponse = await axios.post(`${baseUrl}/api/collections/Students/records`, student, {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                    'Content-Type': 'application/json'
                }
            });
            console.log('Student added:', studentResponse.data);
        }

        // Store the created course and lecturer IDs
        let courseIds = {};  // To store course IDs
        let lecturerIds = {};  // To store lecturer IDs

        // Dummy data for 'Courses' collection
        const coursesData = [
            { Course_Name: "Mathematics", Course_Duration: '1 year' },
            { Course_Name: "Physics", Course_Duration: '1.5 years' },
            { Course_Name: "Chemistry", Course_Duration: '2 years' },
            { Course_Name: "Biology", Course_Duration: '1 year' }
        ];

        // Create courses and store the returned IDs
        for (let course of coursesData) {
            const courseResponse = await axios.post(`${baseUrl}/api/collections/Course/records`, course, {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                    'Content-Type': 'application/json'
                }
            });
            console.log('Course added:', courseResponse.data);
            courseIds[course.Course_Name] = courseResponse.data.id;  // Save the course ID
        }

        console.log('Course IDs:', courseIds);

        // Dummy data for 'Lecturers' collection
        const lecturersData = [
            { lecturer_name: 'Samuel Green', Modules: ['MATH101', 'PHYS102'] },
            { lecturer_name: 'Emily White', Modules: ['CHEM103', 'BIOL104'] },
            { lecturer_name: 'John Doe', Modules: ['MATH101'] },
            { lecturer_name: 'Jane Smith', Modules: ['PHYS102', 'CHEM103'] }
        ];

        // Create lecturers and store the returned IDs
        for (let lecturer of lecturersData) {
            const lecturerResponse = await axios.post(`${baseUrl}/api/collections/Lecturers/records`, lecturer, {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                    'Content-Type': 'application/json'
                }
            });
            console.log('Lecturer added:', lecturerResponse.data);
            lecturerIds[lecturer.lecturer_name] = lecturerResponse.data.id;  // Save the lecturer ID
        }

        console.log('Lecturer IDs:', lecturerIds);

        // Now create modules, linking them to the appropriate course and lecturer using the IDs
        const modulesData = [
            { 
                Module_Name: "Mathematics", 
                Course_Name: courseIds['Mathematics'], 
                Module_Credits: '5', 
                Module_Code: 'MATH101', 
                Lecturer_Name: lecturerIds['Samuel Green'] 
            },
            { 
                Module_Name: "Physics", 
                Course_Name: courseIds['Physics'], 
                Module_Credits: '4', 
                Module_Code: 'PHYS102', 
                Lecturer_Name: lecturerIds['Emily White'] 
            },
            { 
                Module_Name: "Chemistry", 
                Course_Name: courseIds['Chemistry'], 
                Module_Credits: '5', 
                Module_Code: 'CHEM103', 
                Lecturer_Name: lecturerIds['John Doe'] 
            },
            { 
                Module_Name: "Biology", 
                Course_Name: courseIds['Biology'], 
                Module_Credits: '3', 
                Module_Code: 'BIOL104', 
                Lecturer_Name: lecturerIds['Jane Smith'] 
            }
        ];

        for (let module of modulesData) {
            const moduleResponse = await axios.post(`${baseUrl}/api/collections/Modules/records`, module, {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                    'Content-Type': 'application/json'
                }
            });
            console.log('Module added:', moduleResponse.data);
        }

    } catch (error) {
        console.error('Error adding dummy data:', error.response ? error.response.data : error.message);
    }
}

addDummyData();
