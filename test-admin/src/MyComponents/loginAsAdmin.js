import PocketBase from 'pocketbase';

const pb = new PocketBase('https://cuddly-succotash-7gww6w9vpg6cq4-8090.app.github.dev'); 


export default async function loginAsAdmin() {
    try {
        const response = await pb.admins.authWithPassword("davidnln77@gmail.com", "password1234");
        console.log("Admin logged in successfully:", response);

            // Set the auth token for subsequent requests
            pb.authStore.save(response.token, response.admin);

        return true; // Return a success state
    } catch (err) {
        console.error("Failed to log in as admin Dave Nolan:\n", err);
        return false; // Return a failure state
    }
}
