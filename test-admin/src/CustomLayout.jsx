// CustomLayout.js
import CustomAppBar from './MyAppBar'; // Custom AppBar import
import CustomSidebar from './CustomSideBar'; // Custom Sidebar import
import { Layout, Menu } from 'react-admin'; // Import React Admin Layout and Menu

const CustomLayout = (props) => (
    <Layout
        {...props}
        appBar={CustomAppBar} // Use custom AppBar
        sidebar={CustomSidebar} // Use custom Sidebar
        menu={Menu} // Default Menu
    />
);

export default CustomLayout;
