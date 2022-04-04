import './widget.scss';
import { KeyboardArrowUpOutlined } from '@mui/icons-material';
import { PersonOutline } from '@mui/icons-material';
import { ShoppingCartOutlined } from '@mui/icons-material';
import { MonetizationOnOutlined } from '@mui/icons-material';
import { AccountBalanceWalletOutlined } from '@mui/icons-material';

const Widget = ({type}) => {
  //temporary
  const amount = 100;
  const diff = 20;

  let data;
  switch(type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: 'See all users',
        icon: <PersonOutline className='icon' />
      };
      break;
      case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: 'See all orders',
        icon: <ShoppingCartOutlined className='icon' />
      };
      break;
      case "earning":
      data = {
        title: "EARNING",
        isMoney: true,
        link: 'See net earning',
        icon: <MonetizationOnOutlined className='icon' />
      };
      break;
      case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: 'See details',
        icon: <AccountBalanceWalletOutlined className='icon' />
      };
      break;
      default:
        break;
  }
  return (
    <div className='widget'>
      <div className="left">
        <div className="users">{data.title}</div>
        <div className="counter">{data.isMoney && '$'} {amount}</div>
        <div className="link">{data.link}</div>
      </div>
      <div className="right">
          <div className="percentage positive">
            <KeyboardArrowUpOutlined /> {diff} %
          </div>
          {data.icon}
      </div>
    </div>
  )
}

export default Widget