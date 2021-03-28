import { Table } from 'antd';
import React, { useEffect, useState } from 'react';
import http from './../httpCommon';
import SplitsButton from './../input/SplitsButton';


const TestTable = () => {

  const [rows, setRow] = useState([]);
  const [count, setIsCount] = useState(0);
  const [error, setError] = useState(null);



  const columns = [
    {
      title: 'Items',
      dataIndex: 'items',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Request Initiator',
      className: 'column-money',
      dataIndex: 'requestInitiator',
      align: 'left',
    },
    {
      title: 'Request Type',
      dataIndex: 'requestType',
    },
    {
      title: 'Initiated Date',
      dataIndex: 'initiatedDate',
    },
    {
      title: 'Review Status',
      dataIndex: 'reviewStatus',
    },
    {
      title: 'Action',
      dataIndex: 'action',
    }
  ];

  const fetchData = async () => {
    let url = 'Director-PendingApprovals' // 'Director-ReviewedApprovals';

    console.log(url)
    http.get(url)
      .then((response) => {
        console.log('server')
        console.log(response.data)
        setRow(response.data.data)
        setIsCount((response.data.count).toString())

      })

  }
  useEffect(() => {
    fetchData()

  }, [])

  var data = rows.map((it) => (
    {
      key: it.requestId,
      items: it.items,
      requestInitiator: it.requestInitiator,
      requestType: it.requestType,
      initiatedDate: it.initiatedDate,
      reviewStatus: it.reviewStatus,
      action:<SplitsButton />
    }
  ))

  return(
  <Table
    columns = { columns }
    dataSource = { data }
    bordered
    title = {() => 'Header'}
footer = {() => 'Footer'}
/>

);

}

export default TestTable;
