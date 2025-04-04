import PocketBase from 'pocketbase';

const pb = new PocketBase('https://ubiquitous-spork-4jggg9vqpw92q655-8090.app.github.dev');

// Users categorized by role
const users = [
    // 20 Students
    { username: "johndoe", email: "johndoe@gmail.com", name: "John Doe", role: "Student" },
    { username: "janesmith", email: "janesmith@yahoo.com", name: "Jane Smith", role: "Student" },
    { username: "alexmiller", email: "alexmiller@outlook.com", name: "Alex Miller", role: "Student" },
    { username: "emilywilliams", email: "emilywilliams@gmail.com", name: "Emily Williams", role: "Student" },
    { username: "davidbrown", email: "davidbrown@yahoo.com", name: "David Brown", role: "Student" },
    { username: "sarahjones", email: "sarahjones@outlook.com", name: "Sarah Jones", role: "Student" },
    { username: "michaeltaylor", email: "michaeltaylor@gmail.com", name: "Michael Taylor", role: "Student" },
    { username: "lauraclark", email: "lauraclark@yahoo.com", name: "Laura Clark", role: "Student" },
    { username: "robertharris", email: "robertharris@outlook.com", name: "Robert Harris", role: "Student" },
    { username: "oliviamoore", email: "oliviamoore@gmail.com", name: "Olivia Moore", role: "Student" },
    { username: "williamthomas", email: "williamthomas@yahoo.com", name: "William Thomas", role: "Student" },
    { username: "jessicale", email: "jessicale@outlook.com", name: "Jessica Lee", role: "Student" },
    { username: "danielwhite", email: "danielwhite@gmail.com", name: "Daniel White", role: "Student" },
    { username: "samanthahall", email: "samanthahall@yahoo.com", name: "Samantha Hall", role: "Student" },
    { username: "matthewyoung", email: "matthewyoung@outlook.com", name: "Matthew Young", role: "Student" },
    { username: "ashleyking", email: "ashleyking@gmail.com", name: "Ashley King", role: "Student" },
    { username: "joshuawright", email: "joshuawright@yahoo.com", name: "Joshua Wright", role: "Student" },
    { username: "elizabethscott", email: "elizabethscott@outlook.com", name: "Elizabeth Scott", role: "Student" },
    { username: "nathanevans", email: "nathanevans@gmail.com", name: "Nathan Evans", role: "Student" },
    { username: "andreagarcia", email: "andreagarcia@yahoo.com", name: "Andrea Garcia", role: "Student" },

    // 10 Lecturers
    { username: "prof_jackson", email: "jackson@university.com", name: "Dr. Jackson", role: "Lecturer" },
    { username: "prof_martinez", email: "martinez@university.com", name: "Dr. Martinez", role: "Lecturer" },
    { username: "prof_taylor", email: "taylor@university.com", name: "Dr. Taylor", role: "Lecturer" },
    { username: "prof_harris", email: "harris@university.com", name: "Dr. Harris", role: "Lecturer" },
    { username: "prof_clark", email: "clark@university.com", name: "Dr. Clark", role: "Lecturer" },
    { username: "prof_adams", email: "adams@university.com", name: "Dr. Adams", role: "Lecturer" },
    { username: "prof_roberts", email: "roberts@university.com", name: "Dr. Roberts", role: "Lecturer" },
    { username: "prof_lee", email: "lee@university.com", name: "Dr. Lee", role: "Lecturer" },
    { username: "prof_wilson", email: "wilson@university.com", name: "Dr. Wilson", role: "Lecturer" },
    { username: "prof_patel", email: "patel@university.com", name: "Dr. Patel", role: "Lecturer" },

    // 5 Admins
    { username: "admin_smith", email: "admin_smith@university.com", name: "Admin Smith", role: "Admin" },
    { username: "admin_johnson", email: "admin_johnson@university.com", name: "Admin Johnson", role: "Admin" },
    { username: "admin_walker", email: "admin_walker@university.com", name: "Admin Walker", role: "Admin" },
    { username: "admin_rodriguez", email: "admin_rodriguez@university.com", name: "Admin Rodriguez", role: "Admin" },
    { username: "admin_lopez", email: "admin_lopez@university.com", name: "Admin Lopez", role: "Admin" }
];

// Function to create users in PocketBase
const createUsers = async () => {
    for (const user of users) {
        try {
            const userData = {
                ...user,
                emailVisibility: true,
                password: "SecurePass123!",
                passwordConfirm: "SecurePass123!"
            };

            const record = await pb.collection('users').create(userData);
            console.log(`Created user: ${user.username} (${user.email}) - Role: ${user.role}`);

            // (optional) Send verification email
        } catch (error) {
            console.error(`Error creating user ${user.username}:`, error);
        }
    }
};

// Run the function
createUsers();
