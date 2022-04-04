import './home.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/Widget';

const home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="home-container">
        <Navbar></Navbar>
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
      </div>
    </div>
  )
}

export default home;