import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

import EdsgLogo from '../../assets/images/edsg-logo-250.png';

const Sidebar = ({ history, menuList }) => {
  const { location: { pathname } } = history;

  return (
    <nav className="page-sidebar">

      <div className="sidebar-header">
        <img src={EdsgLogo} alt="logo" className="brand" width="150" />
      </div>

      <div className="sidebar-menu">

        <ul className="menu-items">
          {menuList && menuList.map((item) => (
            <MenuItem props={item} pathname={pathname} key={item.title} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

const MenuItem = ({
  props: {
    title, href, icon, children
  }, pathname
}) => {
  const [isShowingSub, setIsShowingSub] = useState(false);

  return (
    <>
      <li className={`${pathname === href ? 'active' : ''}`}>
        {icon}
        {children ? (
          <>
            <Link onClick={() => setIsShowingSub(!isShowingSub)} className="has-sub-menu">
              <span className="title">{title}</span>
            </Link>
            {children && <IoIosArrowBack className={`${isShowingSub ? 'open' : ''} arrow`} />}
          </>
        ) : (
          <Link to={href}>
            <span className="title">{title}</span>
          </Link>
        )}
      </li>
      {children && isShowingSub && (
        <ul className={`${isShowingSub ? 'show' : ''} sub-menu`}>
          {children && children.map((sub) => (
            <li className={`${pathname === sub.href ? 'active' : ''}`} key={sub.title}>
              <Link to={sub.href}>{sub.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Sidebar;
