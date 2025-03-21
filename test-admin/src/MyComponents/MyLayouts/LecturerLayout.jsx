import { Layout, Sidebar, MenuItemLink } from 'react-admin';
import { AppBar, Toolbar, Typography, Box, Avatar, Button } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom'; // Navigation and URL management
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PocketBase from 'pocketbase'; // PocketBase SDK
import '../../Styling/Lecturer.css'; // Import the CSS file

// Initialize PocketBase instance with your backend URL
const pb = new PocketBase('https://ubiquitous-spork-4jggg9vqpw92q655-8090.app.github.dev');

// Logout handler function
const handleLogout = (navigate) => {
    pb.authStore.clear(); // Log out by clearing auth store
    navigate('/'); // Redirect to the login page
};

// Custom AppBar component
export const LecturerAppBar = (props) => {
    const navigate = useNavigate(); // Hook for navigation

    return (
        <AppBar
            {...props}
            className="lecturer-app-bar" // Apply CSS class for AppBar
        >
            <Toolbar className="toolbar">
                {/* Logo and Title Section */}
                <Box className="logo-section">
                    <img src="src/images/Cape_college_logo.png" alt="Logo" className="logo-image" />
                <Box className="text-container">
                 <div className="C">C</div>
                <div className="ape">ape</div> 
                 <div className="C_2">C</div>
                 <div className="ollege">ollege</div>
                </Box>
            </Box>
            

                {/* Center Title (Lecturer) */}
                <Typography variant="h6" className="admin-title">
                    Lecturer
                </Typography>

                {/* User Section (Avatar and Log Out Button) */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
export const LecturerSideBar = (props) => {
    const location = useLocation();  // Get the current route

    // Function to determine if a menu item is active
    const isActive = (path) => location.pathname === path;

    return (
        <Sidebar {...props} className="sidebar">
            {/* Menu item for Students */}
            <MenuItemLink 
                className={`menu-item ${isActive('/Students') ? 'menu-item-active' : ''}`}
                to="/Students" 
                primaryText="Students"
                leftIcon={
                    <SchoolIcon 
                        className={`menu-icon ${isActive('/Students') ? 'menu-item-active' : ''}`}
                    />
                }
            />
            
            {/* Menu item for Modules */}
            <MenuItemLink 
                className={`menu-item ${isActive('/Modules') ? 'menu-item-active' : ''}`}
                to="/Modules" 
                primaryText="Modules"
                leftIcon={
                    <MenuBookIcon 
                        className={`menu-icon ${isActive('/Modules') ? 'menu-item-active' : ''}`}
                    />
                }
            />
            
            {/* Menu item for Assessments */}
            <MenuItemLink 
                className={`menu-item ${isActive('/Assessments') ? 'menu-item-active' : ''}`}
                to="/Assessments" 
                primaryText="Assessments"
                leftIcon={
                    <AssessmentIcon 
                        className={`menu-icon ${isActive('/Assessments') ? 'menu-item-active' : ''}`}
                    />
                }
            />
        </Sidebar>
    );
};

// Main Layout component that combines AppBar and Sidebar
const LecturerLayout = (props) => (
    <Layout
        {...props}
        appBar={LecturerAppBar} // Use custom AppBar
        sidebar={LecturerSideBar} // Use custom Sidebar
        // Remove the menu prop to avoid conflict
    />
);
export default LecturerLayout;
