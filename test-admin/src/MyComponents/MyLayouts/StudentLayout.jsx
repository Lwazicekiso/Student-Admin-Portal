// Import statements
import { Layout, Menu } from 'react-admin'; // React Admin Layout and Menu
import { AppBar, Toolbar, Typography, Box, Avatar, Button } from '@mui/material'; // MUI components
import { Sidebar, MenuItemLink } from 'react-admin'; // Sidebar components from React Admin
import { useNavigate, useLocation } from 'react-router-dom'; // React Router for navigation and location
import PocketBase from 'pocketbase'; // PocketBase SDK
import '../../Styling/Student.css'; // Import the CSS file
// MUI Icons
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import AssessmentIcon from '@mui/icons-material/Assessment';

// Initialize PocketBase instance
const pb = new PocketBase('https://ubiquitous-spork-4jggg9vqpw92q655-8090.app.github.dev');

// Handle logout function
const handleLogout = (navigate) => {
    pb.authStore.clear(); // Clear the auth store (logout)
    navigate('/');   // Redirect to login page
};

// Custom Student AppBar component
const StudentAppBar = (props) => {
    const navigate = useNavigate(); // Hook for navigation

    return (
        <AppBar
            {...props}
            className="student-app-bar"
        >
            <Toolbar className="toolbar">
                {/* Cape College Logo Structure */}
                <div className="text-container">
                    <div className="C">C</div>
                    <div className="ape">ape</div>
                    <div className="C_2">C</div>
                    <div className="ollege">ollege</div>
                </div>

                {/* Logo Section */}
                <Box className="logo-section">
                    <img 
                        src="src/images/Cape_college_logo.png" 
                        alt="Logo" 
                        className="logo-image" 
                    />
                </Box>

                {/* Center Title (Student) */}
                <Typography
                    variant="h6"
                    className="student-title"
                >
                    Student
                </Typography>

                {/* User Section */}
                <Box className="user-section">
                    <Avatar className="avatar" />
                    <Button
                        color="inherit"
                        sx={{ ml: 1 }}
                        onClick={() => handleLogout(navigate)}
                    >
                        Log out
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

// Custom Sidebar component
const StudentSideBar = (props) => {
    const location = useLocation(); // Get the current route

    // Function to determine if a menu item is active
    const isActive = (path) => location.pathname === path;

    return (
        <Sidebar {...props} className="sidebar">
            {/* Menu item for Students */}
            <MenuItemLink
                className={`menu-item ${isActive('/Modules') ? 'active' : ''}`}
                to="/Modules"
                primaryText="Modules"
                leftIcon={
                    <SchoolIcon
                        className="menu-icon"
                    />
                }
            />

            {/* Menu item for Applicants */}
            <MenuItemLink
                className={`menu-item ${isActive('/Course') ? 'active' : ''}`}
                to="/Course"
                primaryText="Course"
                leftIcon={
                    <PersonIcon
                        className="menu-icon"
                    />
                }
            />

            {/* Menu item for Assessments */}
            <MenuItemLink
                className={`menu-item ${isActive('/Assessments') ? 'active' : ''}`}
                to="/Assessments"
                primaryText="Assessments"
                leftIcon={
                    <AssessmentIcon
                        className="menu-icon"
                    />
                }
            />
        </Sidebar>
    );
};

// Main Layout component
const StudentLayout = (props) => (
    <Layout
        {...props}
        appBar={StudentAppBar} // Use custom AppBar
        sidebar={StudentSideBar} // Use custom Sidebar
        menu={Menu} // Default Menu
    />
);

export default StudentLayout;