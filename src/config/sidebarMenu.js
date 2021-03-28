/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import { RiBarChartFill, RiUserSettingsLine } from 'react-icons/ri';
import { BiEnvelope } from 'react-icons/bi';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import ReceiptIcon from '@material-ui/icons/Receipt';
import SettingsIcon from '@material-ui/icons/Settings';
import PersonIcon from '@material-ui/icons/Person';

export default [
  { title: 'Home', href: '/', icon: <BiEnvelope className="icon" /> },
  { title: 'Inventory Manager', href: '/adminstore-portal/inventory-manager/requisition', icon: <BiEnvelope className="icon" />,
  children: [
    { title: 'Requisition', href: '/adminstore-portal/inventory-manager/requisition', icon: 'CP' },
    { title: 'Review Request', href: '/adminstore-portal/inventory-manager/review-request', icon: 'ED' },
    { title: 'Warehouse', href: '/adminstore-portal/inventory-manager/inventory', icon: 'ED' }
  ] },
  { title: 'Warehouse Manager', href: '/adminstore-portal/warehouse-manager/requisition', icon: <RiUserSettingsLine className="icon" />,
  children: [
    { title: 'Requisition', href: '/adminstore-portal/warehouse-manager/requisition', icon: 'CP' },
    { title: 'Review Request', href: '/adminstore-portal/warehouse-manager/review-request', icon: 'ED' },
    { title: 'Warehouse', href: '/adminstore-portal/warehouse-manager/warehouse', icon: 'ED' }
  ] },
  { title: 'Report', href: '/adminstore-portal/request-report', icon: <PersonIcon className="icon" /> },
  { title: 'Settings', href: '/adminstore-portal/facility-settings', icon: <SettingsIcon className="icon" /> },
  { title: 'Log Out', href: '/adminstore-portal/logout', icon: <SettingsIcon className="icon" /> },
  // { title: 'Log Out', href: '/Page41', icon: <SettingsIcon className="icon" /> }

  
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
