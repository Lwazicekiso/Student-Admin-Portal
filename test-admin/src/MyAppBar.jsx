import { AppBar, Toolbar, Typography, Box, Avatar } from '@mui/material';

// Define the custom AppBar component
const CustomAppBar = (props) => (
    <AppBar
        {...props}
        sx={{ backgroundColor: '#194D6C' }} // Set the AppBar background color to a dark blue
    >
        {/* Toolbar for holding the elements inside the AppBar */}
        <Toolbar sx={{ minHeight: '80px' }}> {/* Adjust the height of the toolbar */}
            
            {/* Logo and Title Section */}
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                {/* Display the logo image with a specified height and margin */}
                <img src="./pepe.png" alt="Logo" style={{ height: 40, marginRight: 16 }} />
                {/* Display the title "Cape College" with custom font size, bold text, and white color */}
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#FFFFFF' }}>
                    Cape College
                </Typography>
            </Box>

            {/* Center Title (Administrator) */}
            <Typography 
                variant="h6" 
                sx={{ color: '#FFFFFF', flexGrow: 1, textAlign: 'center' }}> {/* Center the title */}
                Administrator
            </Typography>

            {/* User Section (Profile Avatar and Log Out Option) */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}> {/* Align the avatar and text horizontally */}
                {/* Display a white avatar with dark blue text */}
                <Avatar sx={{ bgcolor: '#FFFFFF', color: '#194D6C' }} /> 
                {/* Text for user role and log out option with white color */}
                <Typography variant="subtitle1" sx={{ ml: 1, color: '#FFFFFF' }}>
                    Staff | Log out
                </Typography>
            </Box>
        </Toolbar>
    </AppBar>
);

// Export the component for use in other parts of the application
export default CustomAppBar;
