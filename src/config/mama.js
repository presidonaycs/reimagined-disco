/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import { RiBarChartFill, RiUserSettingsLine } from 'react-icons/ri';
import { BiEnvelope } from 'react-icons/bi';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import ReceiptIcon from '@material-ui/icons/Receipt';
import SettingsIcon from '@material-ui/icons/Settings';
import PersonIcon from '@material-ui/icons/Person';

export default [
  { title: 'Home', href: '/', icon: <BiEnvelope className="icon" />, },
  
  { title: 'Inventory Manager', href: '/inventory-manager', icon: <BiEnvelope className="icon" />, children: [
    { title: 'Requisition', href: '/inventory-manager/requisition', icon: 'CP' },
    { title: 'Review Request', href: '/Inventory-manager/review-request', icon: 'ED' },
    { title: 'Review', href: '/Inventory-manager/inventory', icon: 'ED' }
  ]  },

  { title: 'Warehouse Manager', href: '/Warehouse-manager', icon: <RiUserSettingsLine className="icon" />, children: [
    { title: 'Requisition', href: '/Warehouse-manager/requisition', icon: 'CP' },
    { title: 'Review Request', href: '/Warehouse-manager/review-request', icon: 'ED' },
    { title: 'Review', href: '/Warehouse-manager/inventory', icon: 'ED' }
  ] },

  { title: 'Report', href: '/facility-portal/request-report', icon: <PersonIcon className="icon" />},
  { title: 'Settings', href: '/facility-portal/facility-settings', icon: <SettingsIcon className="icon" /> },
  { title: 'Log Out', href: '/facility-portal/logout', icon: <SettingsIcon className="icon" /> },
  // { title: 'Log Out', href: '/facility-portal/logout', icon: <SettingsIcon className="icon" /> }

  

  
  // {
//     title: 'Staff Onboarding',
//     href: '',
//     icon: <HiOutlineUserAdd className="icon" />,
//     children: [
//       { title: 'Create Profile', href: '/admin-portal/employee-profile', icon: 'CP' },
//       { title: 'Employee Details', href: '/admin-portal/employee-details', icon: 'ED' }
//     ]
//   },
//   { title: 'Supervisor Organogram', href: '/admin-portal/supervisor-organogram', icon: <CgUserList className="icon" /> }
 ];
