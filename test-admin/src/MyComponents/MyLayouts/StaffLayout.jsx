
// StaffLayout.js
import { Layout, Menu } from 'react-admin'; // Import React Admin Layout and Menu
import { AppBar, Toolbar, Typography, Box, Avatar, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router for navigation
import PocketBase from 'pocketbase'; // Import PocketBase SDK


const StaffLayout = (props) => (
    <Layout
        {...props}
        appBar={StaffAppBar} // Use custom AppBar
        sidebar={StaffSideBar} // Use custom Sidebar
        menu={Menu} // Default Menu
    />
);

export default StaffLayout;

// StaffAppBar.js

const pb = new PocketBase('https://musical-journey-97j7p7q4vqgv375gj-8090.app.github.dev/'); // Update with your PocketBase URL

// Define the logout function
const handleLogout = (navigate) => {
    pb.authStore.clear(); // Clear the auth store (logout)
    navigate('/');   // Redirect to login page
};

export const StaffAppBar = (props) => {
    const navigate = useNavigate(); // Hook for navigation

    return (
        <AppBar
            {...props}
            sx={{ backgroundColor: '#194D6C', height: '200px', marginBottom: '503px' }}
        >
            <Toolbar sx={{ minHeight: '100px', justifyContent: 'space-between', position: 'relative' }}>
                {/* Logo and Title Section */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img src="src/images/Cape_college_logo.png" alt="Logo" style={{ height: 40, marginRight: 16 }} />
                    <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#FFFFFF' }}>
                        Cape College
                    </Typography>
                </Box>

                {/* Center Title (Administrator) */}
                <Typography
                    variant="h6"
                    sx={{
                        color: '#FFFFFF',
                        fontFamily: 'Times New Roman',
                        fontSize: '45px',
                        textAlign: 'center',
                        position: 'absolute',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        top: '50%',
                    }}
                >
                    Lecturer
                </Typography>

                {/* User Section (Avatar and Log Out Button) */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar sx={{ bgcolor: '#FFFFFF', color: '#194D6C' }} />
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



// StaffSideBar.js
import { Sidebar, MenuItemLink } from 'react-admin';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { useLocation } from 'react-router-dom';  // To get the current URL

// Shared styles for the menu items
const menuItemStyles = {
    paddingLeft: '20px',  // Adjust the left padding
    paddingRight: '100px',
    marginRight: '20px',
    color: '#FFFFFF',  // Default text color to white
    height: '10%'
};

export const sideBar = {
    padding: '-100px',
    marginTop: '152px',
    width: '240px',
    height: '100vh',  // Full viewport height
    backgroundColor: '#194D6C',
};

const activeStyles = {
    backgroundColor: '#FFFFFF',  // Background color when active
    color: '#194D6C',            // Text color when active (blue)
    '& .MuiSvgIcon-root': {      // Target the icon when active
        color: '#194D6C',
    },
};

export const StaffSideBar = (props) => {
    const location = useLocation();  // Get the current route

    // Function to determine if a menu item is active
    const isActive = (path) => location.pathname === path;

    return (
        <Sidebar {...props} sx={sideBar}>
            {/* Menu item for Students */}
            <MenuItemLink 
                sx={{
                    ...menuItemStyles,
                    backgroundColor: isActive('/students') ? '#FFFFFF' : 'inherit',
                    color: isActive('/students') ? '#194D6C' : '#FFFFFF',  // Change text color when active
                }}
                to="/students" 
                primaryText="Students"
                leftIcon={
                    <SchoolIcon 
                        sx={{ 
                            color: isActive('/students') ? '#194D6C' : '#FFFFFF'  // Change icon color when active
                        }} 
                    />
                }
            />
            
            {/* Menu item for Applicants */}
            <MenuItemLink 
                sx={{
                    ...menuItemStyles,
                    backgroundColor: isActive('/applicant') ? '#FFFFFF' : 'inherit',
                    color: isActive('/applicant') ? '#194D6C' : '#FFFFFF',  // Change text color when active
                }}
                to="/applicant" 
                primaryText="Applicants"
                leftIcon={
                    <PersonIcon 
                        sx={{ 
                            color: isActive('/applicant') ? '#194D6C' : '#FFFFFF'  // Change icon color when active
                        }} 
                    />
                }
            />
            
            {/* Menu item for Assessments */}
            <MenuItemLink 
                sx={{
                    ...menuItemStyles,
                    backgroundColor: isActive('/assessment') ? '#FFFFFF' : 'inherit',
                    color: isActive('/assessment') ? '#194D6C' : '#FFFFFF',  // Change text color when active
                }}
                to="/assessment" 
                primaryText="Assessments"
                leftIcon={
                    <AssessmentIcon 
                        sx={{ 
                            color: isActive('/assessment') ? '#194D6C' : '#FFFFFF'  // Change icon color when active
                        }} 
                    />
                }
            />
        </Sidebar>
    );
};

;

