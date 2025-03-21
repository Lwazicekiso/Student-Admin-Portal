import PocketBase from 'pocketbase';

const POCKETBASE_URL = "https://ubiquitous-spork-4jggg9vqpw92q655-8090.app.github.dev"; // Change this if necessary
const pb = new PocketBase(POCKETBASE_URL);

// Expanded list of modules for each course
const modules = [
    // Bachelor Of Humanities (5 modules)
    { Module_Name: "Introduction to Humanities",      Module_Credits: "15", Module_Code: "HU101" },
    { Module_Name: "Cultural Studies",                 Module_Credits: "15", Module_Code: "HU102" },
    { Module_Name: "Philosophy and Ethics",             Module_Credits: "15", Module_Code: "HU103" },
    { Module_Name: "History of Art",                    Module_Credits: "15", Module_Code: "HU104" },
    { Module_Name: "Comparative Literature",            Module_Credits: "15", Module_Code: "HU105" },

    // Bachelor Of Cyber Security (5 modules)
    { Module_Name: "Cyber Security Fundamentals",       Module_Credits: "20", Module_Code: "CSY101" },
    { Module_Name: "Network Security",                  Module_Credits: "20", Module_Code: "CSY102" },
    { Module_Name: "Digital Forensics",                 Module_Credits: "20", Module_Code: "CSY103" },
    { Module_Name: "Cryptography",                      Module_Credits: "20", Module_Code: "CSY104" },
    { Module_Name: "Ethical Hacking",                   Module_Credits: "20", Module_Code: "CSY105" },

    // Bachelor Of Information Technology (5 modules)
    { Module_Name: "Introduction to Information Systems", Module_Credits: "15", Module_Code: "IT101" },
    { Module_Name: "Database Management",               Module_Credits: "15", Module_Code: "IT102" },
    { Module_Name: "Systems Analysis and Design",       Module_Credits: "15", Module_Code: "IT103" },
    { Module_Name: "Web Technologies",                  Module_Credits: "15", Module_Code: "IT104" },
    { Module_Name: "IT Project Management",             Module_Credits: "15", Module_Code: "IT105" },

    // Bachelor Of Commerce in Management Sciences (5 modules)
    { Module_Name: "Principles of Management",          Module_Credits: "15", Module_Code: "CM101" },
    { Module_Name: "Organizational Behavior",           Module_Credits: "15", Module_Code: "CM102" },
    { Module_Name: "Business Communication",            Module_Credits: "15", Module_Code: "CM103" },
    { Module_Name: "Strategic Management",              Module_Credits: "15", Module_Code: "CM104" },
    { Module_Name: "Operations Management",             Module_Credits: "15", Module_Code: "CM105" },

    // Bachelor Of Commerce in Accounting (5 modules)
    { Module_Name: "Financial Accounting",              Module_Credits: "15", Module_Code: "AC101" },
    { Module_Name: "Managerial Accounting",             Module_Credits: "15", Module_Code: "AC102" },
    { Module_Name: "Auditing",                          Module_Credits: "15", Module_Code: "AC103" },
    { Module_Name: "Taxation",                          Module_Credits: "15", Module_Code: "AC104" },
    { Module_Name: "Advanced Financial Reporting",      Module_Credits: "15", Module_Code: "AC105" },

    // Bachelor Of Commerce in Economics (5 modules)
    { Module_Name: "Microeconomics",                    Module_Credits: "15", Module_Code: "EC101" },
    { Module_Name: "Macroeconomics",                    Module_Credits: "15", Module_Code: "EC102" },
    { Module_Name: "Econometrics",                      Module_Credits: "15", Module_Code: "EC103" },
    { Module_Name: "International Economics",           Module_Credits: "15", Module_Code: "EC104" },
    { Module_Name: "Public Economics",                  Module_Credits: "15", Module_Code: "EC105" },

    // Bachelor of Biology (5 modules)
    { Module_Name: "General Biology",                   Module_Credits: "15", Module_Code: "BI101" },
    { Module_Name: "Genetics",                          Module_Credits: "15", Module_Code: "BI102" },
    { Module_Name: "Ecology",                           Module_Credits: "15", Module_Code: "BI103" },
    { Module_Name: "Cell Biology",                      Module_Credits: "15", Module_Code: "BI104" },
    { Module_Name: "Microbiology",                      Module_Credits: "15", Module_Code: "BI105" },

    // Bachelor of Chemistry (5 modules)
    { Module_Name: "General Chemistry",                 Module_Credits: "15", Module_Code: "CH101" },
    { Module_Name: "Organic Chemistry",                 Module_Credits: "15", Module_Code: "CH102" },
    { Module_Name: "Analytical Chemistry",              Module_Credits: "15", Module_Code: "CH103" },
    { Module_Name: "Inorganic Chemistry",               Module_Credits: "15", Module_Code: "CH104" },
    { Module_Name: "Physical Chemistry",                Module_Credits: "15", Module_Code: "CH105" },

    // Bachelor of Physics (5 modules)
    { Module_Name: "Mechanics",                         Module_Credits: "15", Module_Code: "PH101" },
    { Module_Name: "Electromagnetism",                  Module_Credits: "15", Module_Code: "PH102" },
    { Module_Name: "Quantum Physics",                   Module_Credits: "15", Module_Code: "PH103" },
    { Module_Name: "Thermodynamics",                    Module_Credits: "15", Module_Code: "PH104" },
    { Module_Name: "Astrophysics",                      Module_Credits: "15", Module_Code: "PH105" },

    // Bachelor in Mathematics (5 modules)
    { Module_Name: "Calculus I",                        Module_Credits: "15", Module_Code: "MA101" },
    { Module_Name: "Linear Algebra",                    Module_Credits: "15", Module_Code: "MA102" },
    { Module_Name: "Probability and Statistics",        Module_Credits: "15", Module_Code: "MA103" },
    { Module_Name: "Differential Equations",            Module_Credits: "15", Module_Code: "MA104" },
    { Module_Name: "Discrete Mathematics",              Module_Credits: "15", Module_Code: "MA105" },

    // Bachelor Of Engineering (5 modules)
    { Module_Name: "Engineering Mechanics",           Module_Credits: "20", Module_Code: "EN101" },
    { Module_Name: "Thermodynamics",                    Module_Credits: "20", Module_Code: "EN102" },
    { Module_Name: "Materials Science",                 Module_Credits: "20", Module_Code: "EN103" },
    { Module_Name: "Fluid Mechanics",                   Module_Credits: "20", Module_Code: "EN104" },
    { Module_Name: "Structural Analysis",               Module_Credits: "20", Module_Code: "EN105" },

    // Bachelor Of Industrial Engineering (5 modules)
    { Module_Name: "Operations Research",               Module_Credits: "20", Module_Code: "IE101" },
    { Module_Name: "Supply Chain Management",           Module_Credits: "20", Module_Code: "IE102" },
    { Module_Name: "Quality Control",                   Module_Credits: "20", Module_Code: "IE103" },
    { Module_Name: "Production Planning",               Module_Credits: "20", Module_Code: "IE104" },
    { Module_Name: "Systems Engineering",               Module_Credits: "20", Module_Code: "IE105" },

    // Bachelor Of Mechatronics Engineering (5 modules)
    { Module_Name: "Control Systems",                   Module_Credits: "20", Module_Code: "ME101" },
    { Module_Name: "Robotics",                          Module_Credits: "20", Module_Code: "ME102" },
    { Module_Name: "Sensors and Instrumentation",       Module_Credits: "20", Module_Code: "ME103" },
    { Module_Name: "Mechatronic Systems Design",        Module_Credits: "20", Module_Code: "ME104" },
    { Module_Name: "Embedded Systems",                  Module_Credits: "20", Module_Code: "ME105" },

    // Bachelor Of Informatics (5 modules)
    { Module_Name: "Information Systems Design",        Module_Credits: "15", Module_Code: "INF101" },
    { Module_Name: "User Experience Design",            Module_Credits: "15", Module_Code: "INF102" },
    { Module_Name: "Data Management",                   Module_Credits: "15", Module_Code: "INF103" },
    { Module_Name: "Network Systems",                   Module_Credits: "15", Module_Code: "INF104" },
    { Module_Name: "IT Governance",                     Module_Credits: "15", Module_Code: "INF105" },

    // Bachelor Of Computer Science (5 modules)
    { Module_Name: "Programming Fundamentals",          Module_Credits: "15", Module_Code: "CSC101" },
    { Module_Name: "Algorithms",                        Module_Credits: "15", Module_Code: "CSC102" },
    { Module_Name: "Operating Systems",                 Module_Credits: "15", Module_Code: "CSC103" },
    { Module_Name: "Software Engineering",              Module_Credits: "15", Module_Code: "CSC104" },
    { Module_Name: "Computer Architecture",             Module_Credits: "15", Module_Code: "CSC105" },

    // Bachelor of Data Science (5 modules)
    { Module_Name: "Data Analysis",                     Module_Credits: "15", Module_Code: "DS101" },
    { Module_Name: "Machine Learning",                  Module_Credits: "15", Module_Code: "DS102" },
    { Module_Name: "Data Visualization",                Module_Credits: "15", Module_Code: "DS103" },
    { Module_Name: "Big Data Analytics",                Module_Credits: "15", Module_Code: "DS104" },
    { Module_Name: "Data Mining",                       Module_Credits: "15", Module_Code: "DS105" },

    // Bachelor Of Social Science Psychology (5 modules)
    { Module_Name: "Introduction to Psychology",        Module_Credits: "15", Module_Code: "PSY101" },
    { Module_Name: "Social Psychology",                 Module_Credits: "15", Module_Code: "PSY102" },
    { Module_Name: "Cognitive Psychology",              Module_Credits: "15", Module_Code: "PSY103" },
    { Module_Name: "Developmental Psychology",          Module_Credits: "15", Module_Code: "PSY104" },
    { Module_Name: "Behavioral Neuroscience",           Module_Credits: "15", Module_Code: "PSY105" },

    // Bachelor of Data Engineering (5 modules)
    { Module_Name: "Database Systems",                  Module_Credits: "15", Module_Code: "DE101" },
    { Module_Name: "Data Warehousing",                  Module_Credits: "15", Module_Code: "DE102" },
    { Module_Name: "Big Data Technologies",             Module_Credits: "15", Module_Code: "DE103" },
    { Module_Name: "ETL Processes",                     Module_Credits: "15", Module_Code: "DE104" },
    { Module_Name: "Data Integration",                  Module_Credits: "15", Module_Code: "DE105" },

    // Bachelor of Science in Human Life Science (5 modules)
    { Module_Name: "Human Biology",                     Module_Credits: "15", Module_Code: "HLS101" },
    { Module_Name: "Anatomy and Physiology",            Module_Credits: "15", Module_Code: "HLS102" },
    { Module_Name: "Genetics and Evolution",            Module_Credits: "15", Module_Code: "HLS103" },
    { Module_Name: "Biochemistry",                      Module_Credits: "15", Module_Code: "HLS104" },
    { Module_Name: "Health Science Fundamentals",       Module_Credits: "15", Module_Code: "HLS105" }
];

async function populateModules() {
    try {
        for (const module of modules) {
            const record = await pb.collection('Modules').create(module);
            console.log(`Added module: ${record.Module_Name}`);
        }
        console.log("All modules added successfully!");
    } catch (error) {
        console.error("Error adding modules:", error);
    }
}

populateModules();
