import PocketBase from 'pocketbase';
import loginAsAdmin from './loginAsAdmin.js';

const pb = new PocketBase('http://127.0.0.1:8090'); 


async function createAdmin() {

    await loginAsAdmin("admin@example.com", "password1234");

    try {
        // Create a new admin
        const newAdmin = await pb.admins.create({
            email: 'admin@example.com',        
            password: 'password1234',        
            passwordConfirm: 'password1234'  
        });

        console.log('Admin created successfully:', newAdmin);
    } catch (error) {
        console.error('Error creating admin:', error);
    }
}

createAdmin();
