// CustomSideBar.js
import { Sidebar, MenuItemLink } from 'react-admin';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import AssessmentIcon from '@mui/icons-material/Assessment';

// Shared styles for the menu items
const menuItemStyles = {
    paddingLeft: '20px',  // Adjust the left padding
    paddingRight: '100px',
    marginRight: '20px',
     // Adjust the right padding
    color: '#FFFFFF',  // Set text color to white
};
 
export const sideBar = {
    padding:'-100px',
    marginTop: '152px',
    width:'240px',
    height: '100vh',          // Full viewport height

    backgroundColor: '#194D6C',
}

export
const CustomSidebar = (props) => (
    <Sidebar 
        {...props} 
        sx={sideBar}
    >
        {/* Menu item for Students */}
        <MenuItemLink 
            sx={menuItemStyles}  // Apply padding here
            to="/students" 
            primaryText="Students"
            leftIcon={<SchoolIcon sx={{ color: '#FFFFFF' }} />}  // Set icon color to white
        />
        
        {/* Menu item for Applicants */}
        <MenuItemLink 
            sx={menuItemStyles}  // Apply padding here
            to="/applicant" 
            primaryText="Applicants"
            leftIcon={<PersonIcon sx={{ color: '#FFFFFF' }} />}  // Set icon color to white
        />
        
        {/* Menu item for Assessments */}
        <MenuItemLink 
            sx={menuItemStyles}  // Apply padding here
            to="/assessment" 
            primaryText="Assessments"
            leftIcon={<AssessmentIcon sx={{ color: '#FFFFFF' }} />}  // Set icon color to white
        />
    </Sidebar>
);


export const AdminSidebar = (props) => (
    <Sidebar 
        {...props} 
        sx={{ 
            padding:'-100px',
            paddingTop: '3%',
            backgroundColor: '#194D6C', 
            paddingRight: '100px', // Adjust the right padding

        }}
    >
        {/* Menu item for Students */}
        <MenuItemLink 
            sx={menuItemStyles}  // Apply padding here
            to="/students" 
            primaryText="Students"
            leftIcon={<SchoolIcon sx={{ color: '#FFFFFF' }} />}  // Set icon color to white
        />
        
        {/* Menu item for Applicants */}
        <MenuItemLink 
            sx={menuItemStyles}  // Apply padding here
            to="/applicant" 
            primaryText="Applicants"
            leftIcon={<PersonIcon sx={{ color: '#FFFFFF' }} />}  // Set icon color to white
        />
        
        {/* Menu item for Assessments */}
        <MenuItemLink 
            sx={menuItemStyles}  // Apply padding here
            to="/assessment" 
            primaryText="Assessments"
            leftIcon={<AssessmentIcon sx={{ color: '#FFFFFF' }} />}  // Set icon color to white
        />
    </Sidebar>
);






export default CustomSidebar;
