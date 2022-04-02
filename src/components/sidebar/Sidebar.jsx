import './sidebar.scss';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SystemSecurityUpdateGoodOutlinedIcon from '@mui/icons-material/SystemSecurityUpdateGoodOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
        <div className="logo">KDADMIN</div>
        
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li><DashboardOutlinedIcon className="icon" /><span> Dashboard</span></li>
          <li><PeopleOutlinedIcon className="icon" /><span> Users</span></li>
          <p className="title">LISTS</p>
          <li><ProductionQuantityLimitsOutlinedIcon className="icon" /><span> Products</span></li>
          <li><InventoryOutlinedIcon className="icon" /><span> Orders</span></li>
          <li><LocalShippingOutlinedIcon className="icon" /><span> Delivery</span></li>
          <p className="title">USEFUL</p>
          <li><QueryStatsOutlinedIcon className="icon" /><span> Stats</span></li>
          <li><NotificationsNoneOutlinedIcon className="icon" /><span> Notifications</span></li>
          <p className="title">SYSTEM</p>
          <li><SystemSecurityUpdateGoodOutlinedIcon className="icon" /><span> System Health</span></li>
          <li><ListAltOutlinedIcon className="icon" /><span> Logs</span></li>
          <li><SettingsOutlinedIcon className="icon" /><span> Settings</span></li>
          <p className="title">USER</p>
          <li><AccountCircleOutlinedIcon className="icon" /><span> Profile</span></li>
          <li><LogoutOutlinedIcon className="icon" /><span> Logout</span></li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  )
}

export default Sidebar