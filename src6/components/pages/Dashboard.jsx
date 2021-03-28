import React, { useEffect, useState } from 'react';

const Dashboard = ({ history }) => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'EDSG - Dashboard';
    setTitle('Dashboard');
  }, []);

  return (
    <div>{title}</div>
  );
};

export default Dashboard;
