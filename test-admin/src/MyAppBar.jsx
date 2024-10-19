import { AppBar, Toolbar, Typography, Box, Avatar } from '@mui/material';
import * as React from 'react';
import { forwardRef } from 'react';
import { MenuItem } from '@mui/material';
import { useLogout, useGetIdentity, useGetOne } from 'react-admin';

// Custom AppBar styles
const AppBarStyle = {
    backgroundColor: '#194D6C',
    height: '200px',
    marginBottom: '50px',
};

// Custom Logout Button
const MyLogoutButton = forwardRef((props, ref) => {
    const logout = useLogout();
    const handleClick = () => logout();

    return (
        <MenuItem
            onClick={handleClick}
            ref={ref}
            {...props}
            sx={{
                fontSize: '14px',
                textTransform: 'none',
                backgroundColor: '#FFFFFF',
                color: '#194D6C',
                '&:hover': {
                    backgroundColor: '#194D6C',
                    color: '#FFFFFF',
                },
                '& .MuiSvgIcon-root': {
                    color: '#194D6C',
                },
            }}
        >
            Log out
        </MenuItem>
    );
});

// User Section Component fetches and returns user data mainly user name and users avatar
const UserSection = () => {
    const { identity, isLoading: isIdentityLoading } = useGetIdentity();
    const { data: userData, isLoading: isUserLoading } = useGetOne('users', { id: identity?.id });

    if (isIdentityLoading || isUserLoading) {
        return null; // Handle loading state
    }

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column', // Stack elements vertically
                color: '#FFFFFF',
            }}
        >
            {/* Avatar */}
            <Avatar
                sx={{
                    bgcolor: '#FFFFFF',
                    color: '#194D6C',
                    width: 50,
                    height: 50,
                    marginTop: 2,
                }}
                src={userData?.avatar} // Use user avatar from the API response
            />
            {/* Staff Role */}
            <Typography sx={{ fontSize: '18px', fontWeight: 'bold' }}>
                Staff
            </Typography>
            {/* Logout Button */}
            <MyLogoutButton sx={{ fontSize: '14px', textTransform: 'none' }} />
        </Box>
    );
};

// Main Custom AppBar Component
const CustomAppBar = (props) => {
    return (
        <AppBar
            {...props}
            sx={AppBarStyle} // Use sx prop for styling
        >
            <Toolbar sx={{ minHeight: '100px', justifyContent: 'space-between', position: 'relative' }}>
                {/* Logo and Title Section */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img
                        src="src/Cape_college_logo.png" // Ensure this path is correct
                        alt="Logo"
                        style={{ height: 40, marginRight: 16 }}
                    />
                    <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#FFFFFF' }}>
                        Cape College
                    </Typography>
                </Box>

                {/* Centered Title: "Administrator" */}
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

                {/* User Section Component */}
                <UserSection />
            </Toolbar>
        </AppBar>
    );
};

export default CustomAppBar;
