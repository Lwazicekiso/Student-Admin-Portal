// adminLayout
// 
// Import dependencies
import { Layout, Menu, Sidebar, MenuItemLink } from 'react-admin';
import { AppBar, Toolbar, Typography, Box, Avatar, Button } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom'; // Navigation and URL management
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PocketBase from 'pocketbase'; // PocketBase SDK

// Initialize PocketBase instance with your backend URL
const pb = new PocketBase('https://musical-journey-97j7p7q4vqgv375gj-8090.app.github.dev/');

// Logout handler function
const handleLogout = (navigate) => {
    pb.authStore.clear(); // Log out by clearing auth store
    navigate('/'); // Redirect to the login page
};

// Custom AppBar component
export const AdminAppBar = (props) => {
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
                    Administrator
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

// Custom Sidebar styles and active styles
const menuItemStyles = {
    paddingLeft: '20px',  // Adjust the left padding
    paddingRight: '100px',
    marginRight: '20px',
    color: '#FFFFFF',  // Default text color to white
    height: '10%'
};

export const sideBar = {
    padding: '-100px',
    marginTop: '350px',
    width: '240px',
    height: '100vh',  // Full viewport height
    backgroundColor: '#194D6C',
    marginLeft:'-50px'
};

const activeStyles = {
    backgroundColor: '#FFFFFF',  // Background color when active
    color: '#194D6C',            // Text color when active (blue)
    '& .MuiSvgIcon-root': {      // Target the icon when active
        color: '#194D6C',
    },
};

// Custom Sidebar component
export const AdminSideBar = (props) => {
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

// Main Layout component that combines AppBar and Sidebar
const AdminLayout = (props) => (
    <Layout
        {...props}
        appBar={AdminAppBar} // Use custom AppBar
        sidebar={AdminSideBar} // Use custom Sidebar
        menu={Menu} // Default Menu
    />
);

export default AdminLayout;

