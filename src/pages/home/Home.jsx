import './home.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

const home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="home-container">
        Home Container
      </div>
    </div>
  )
}

export default home;