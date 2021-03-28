import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function Example (prop) {
  

 
    return (

        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={100}
            fill="white"
            dataKey="value"
            paddingAngle={0}
           
            
          >
             <Cell fill={"red"} stroke={"white"} outerRadius={"200"}  strokeWidth={20}/>
             <Cell fill={"yellow"} stroke={"brown"} />
             <Cell fill={"green"} stroke={"red"} />
             <Cell fill={"blue"} stroke={"pink"} />
           
            {/* {data.map((entry, index) => (
              // <Cell fill={colors[index % colors.length]} stroke={colors[index % colors.length]} />
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke={"green"} />
            ))} */}
          </Pie>
          <Legend layout="vertical" verticalAlign="middle" align="right" />
          {/* <Legend
  payload={
    data.map(
      item => ({
        id: item.name,
        type: "triangle",
        value: `${item.name} (${item.value}%)`,
      })
    )
  }
/> */}
        </PieChart>
     
    );
 
} export default Example
