// CustomSideBar.js
import { Sidebar, MenuItemLink } from 'react-admin';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import AssessmentIcon from '@mui/icons-material/Assessment';

const CustomSidebar = (props) => (
    <Sidebar {...props}>
        <MenuItemLink id = ""
            to="/students" // lowercase URLs
            primaryText="Students"
            leftIcon={<SchoolIcon />}
        />
        <MenuItemLink
            to="/applicant" // lowercase URLs
            primaryText="Applicants"
            leftIcon={<PersonIcon />}
        />
        <MenuItemLink
            to="/assessment" // lowercase URLs
            primaryText="Assessments"
            leftIcon={<AssessmentIcon />}
        />
    </Sidebar>
);

export default CustomSidebar;
