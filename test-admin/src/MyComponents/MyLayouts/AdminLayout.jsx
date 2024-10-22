// CustomLayout.js
import AdminAppBar from './AdminAppBar'; // Custom AppBar import
import AdminSideBar from './AdminSideBar'; // Custom Sidebar import
import { Layout, Menu } from 'react-admin'; // Import React Admin Layout and Menu

const AdminLayout = (props) => (
    <Layout
        {...props}
        appBar={AdminAppBar} // Use custom AppBar
        sidebar={AdminSideBar} // Use custom Sidebar
        menu={Menu} // Default Menu
    />
);

export default AdminLayout;