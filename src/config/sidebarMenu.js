/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import { RiBarChartFill, RiUserSettingsLine } from 'react-icons/ri';
import { BiEnvelope } from 'react-icons/bi';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import ReceiptIcon from '@material-ui/icons/Receipt';
import SettingsIcon from '@material-ui/icons/Settings';
import PersonIcon from '@material-ui/icons/Person';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

export default [
  
  { title: 'Dashboard', href: '/facility-portal', icon: <BiEnvelope className="icon" /> },
  { title: 'Request Maintainance', href: '/facility-portal/request-maintainance', icon: <RiUserSettingsLine className="icon" /> },
  { title: 'Review Request', href: '/facility-portal/review-request', icon: <QuestionAnswerIcon className="icon" /> },
  { title: 'Manage Request', href: '/facility-portal/manage-request', icon: <ReceiptIcon className="icon" /> },
  { title: 'Settings', href: '/facility-portal/facility-settings', icon: <SettingsIcon className="icon" /> },
  { title: 'Report', href: '/facility-portal/request-report', icon: <PersonIcon className="icon" /> },
  { title: 'Log Out', href: '/', icon: <PowerSettingsNewIcon className="icon" /> }

  
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
