import { AppBar, Toolbar, Typography, Box, Avatar, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router for navigation
import PocketBase from 'pocketbase'; // Import PocketBase SDK

const pb = new PocketBase('https://musical-journey-97j7p7q4vqgv375gj-8090.app.github.dev/'); // Update with your PocketBase URL

// Define the logout function
const handleLogout = (navigate) => {
    pb.authStore.clear(); // Clear the auth store (logout)
    navigate('/');   // Redirect to login page
};

const StaffAppBar = (props) => {
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
                    Staff
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

export default StaffAppBar;