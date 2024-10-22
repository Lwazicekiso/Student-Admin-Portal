
import { Sidebar, MenuItemLink } from 'react-admin';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { useLocation } from 'react-router-dom';  // To get the current URL

//Icons for applicants sidebar
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import AssignmentIcon from '@mui/icons-material/Assignment';




// Shared styles for the menu items
const menuItemStyles = {
    paddingLeft: '20px',  // Adjust the left padding
    paddingRight: '100px',
    marginRight: '20px',
    color: '#FFFFFF',  // Default text color to white
    height:'10%'
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

export default StaffSideBar;
