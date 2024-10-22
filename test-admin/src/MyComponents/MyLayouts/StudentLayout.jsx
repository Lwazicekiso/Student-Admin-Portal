import StudentAppBar from './StudentAppBar'; // Custom AppBar import
import StudentSideBar from './StudentSideBar'; // Custom Sidebar import
import { Layout, Menu } from 'react-admin'; // Import React Admin Layout and Menu

const AdminLayout = (props) => (
    <Layout
        {...props}
        appBar={StudentAppBar} // Use custom AppBar
        sidebar={StudentSideBar} // Use custom Sidebar
        menu={Menu} // Default Menu
    />
);

export default AdminLayout;