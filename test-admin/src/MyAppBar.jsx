import { AppBar, Toolbar, Typography, Box, Avatar } from '@mui/material';

// Define the custom AppBar component
const CustomAppBar = (props) => (
    <AppBar
        {...props}
        sx={{ backgroundColor: '#194D6C',height:'200px', marginBottom: '50px' }} // Dark blue background and margin for separation
    >
        {/* Toolbar for holding the elements inside the AppBar */}
        <Toolbar sx={{ minHeight: '100px', justifyContent: 'space-between' }}> {/* Adjust the height and spacing */}
            
            {/* Logo and Title Section */}
<Box sx={{ display: 'flex', alignItems: 'center' }}>
    {/* Logo */}
    <img src="/Cape_college_logo.png" alt="Logo" style={{ height: 40, marginRight: 16 }} />
    {/* Title "Cape College" */}
    <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#FFFFFF' }}>
        Cape College
    </Typography>
</Box>


            {/* Center Title (Administrator) */}
            <Typography 
                variant="h6" 
                sx={{ color: '#FFFFFF',fontFamily:'Times New Roman',  fontSize:'45px', textAlign: 'center', position: 'absolute', left: '50%', transform: 'translateX(-50%)'}}> {/* Center the title */}
                Administrator
            </Typography>

            {/* User Section (Profile Avatar and Log Out Option) */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {/* Avatar */}
                <Avatar sx={{ bgcolor: '#FFFFFF', color: '#194D6C' }} /> 
                {/* Text for user role and log out */}
                <Typography variant="subtitle1" sx={{ ml: 1, color: '#FFFFFF' }}>
                    Staff | Log out
                </Typography>
            </Box>
        </Toolbar>
    </AppBar>
);

export default CustomAppBar;
