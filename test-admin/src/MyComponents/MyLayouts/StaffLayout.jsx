import StaffAppBar from './StaffAppBar'; // Custom AppBar import
import StaffSideBar from './StaffSideBar'; // Custom Sidebar import
import { Layout, Menu } from 'react-admin'; // Import React Admin Layout and Menu

const StaffLayout = (props) => (
    <Layout
        {...props}
        appBar={StaffAppBar} // Use custom AppBar
        sidebar={StaffSideBar} // Use custom Sidebar
        menu={Menu} // Default Menu
    />
);

export default StaffLayout;