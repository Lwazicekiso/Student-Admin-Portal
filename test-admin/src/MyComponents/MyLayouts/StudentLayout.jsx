
//Student layout
// Import statements
import { Layout, Menu } from 'react-admin'; // React Admin Layout and Menu
import { AppBar, Toolbar, Typography, Box, Avatar, Button } from '@mui/material'; // MUI components
import { Sidebar, MenuItemLink } from 'react-admin'; // Sidebar components from React Admin
import { useNavigate, useLocation } from 'react-router-dom'; // React Router for navigation and location
import PocketBase from 'pocketbase'; // PocketBase SDK

// MUI Icons
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import AssessmentIcon from '@mui/icons-material/Assessment';

// Initialize PocketBase instance
const pb = new PocketBase('https://musical-journey-97j7p7q4vqgv375gj-8090.app.github.dev/');

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
            sx={{ backgroundColor: '#194D6C', height: '200px', marginBottom: '50px' }}
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
                    Student
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

// Sidebar styles and active item determination
const menuItemStyles = {
    paddingLeft: '20px',
    paddingRight: '100px',
    marginRight: '20px',
    color: '#FFFFFF',
    height: '10%'
};

const sideBar = {
    padding: '-100px',
    marginTop: '152px',
    width: '240px',
    height: '100vh',
    backgroundColor: '#194D6C',
};

const activeStyles = {
    backgroundColor: '#FFFFFF',
    color: '#194D6C',
    '& .MuiSvgIcon-root': {
        color: '#194D6C',
    },
};

// Custom Sidebar component
const StudentSideBar = (props) => {
    const location = useLocation(); // Get the current route

    // Function to determine if a menu item is active
    const isActive = (path) => location.pathname === path;

    return (
        <Sidebar {...props} sx={sideBar}>
            {/* Menu item for Students */}
            <MenuItemLink
                sx={{
                    ...menuItemStyles,
                    backgroundColor: isActive('/students') ? '#FFFFFF' : 'inherit',
                    color: isActive('/students') ? '#194D6C' : '#FFFFFF',
                }}
                to="/students"
                primaryText="Students"
                leftIcon={
                    <SchoolIcon
                        sx={{
                            color: isActive('/students') ? '#194D6C' : '#FFFFFF',
                        }}
                    />
                }
            />

            {/* Menu item for Applicants */}
            <MenuItemLink
                sx={{
                    ...menuItemStyles,
                    backgroundColor: isActive('/applicant') ? '#FFFFFF' : 'inherit',
                    color: isActive('/applicant') ? '#194D6C' : '#FFFFFF',
                }}
                to="/applicant"
                primaryText="Applicants"
                leftIcon={
                    <PersonIcon
                        sx={{
                            color: isActive('/applicant') ? '#194D6C' : '#FFFFFF',
                        }}
                    />
                }
            />

            {/* Menu item for Assessments */}
            <MenuItemLink
                sx={{
                    ...menuItemStyles,
                    backgroundColor: isActive('/assessment') ? '#FFFFFF' : 'inherit',
                    color: isActive('/assessment') ? '#194D6C' : '#FFFFFF',
                }}
                to="/assessment"
                primaryText="Assessments"
                leftIcon={
                    <AssessmentIcon
                        sx={{
                            color: isActive('/assessment') ? '#194D6C' : '#FFFFFF',
                        }}
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
