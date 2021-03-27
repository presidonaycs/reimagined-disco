import React from 'react';
import menuList from '../config/sidebarMenu';
import PortalRoutes from '../routes/PortalRoutes';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Sidebar from './layouts/Sidebar';
import Cookies from 'universal-cookie';


const cookies = new Cookies();
function UserPortal(props) {
  const { history } = props;

  return (
    <div className="container">
      <Sidebar history={history} menuList={menuList} />
      <div className="portal">
        <Header navList={['Home', 'Notification', 'Set Reminder']} details={{namm:cookies.firstName}}/>
        <div className="content main-content">
          <PortalRoutes />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default UserPortal;
