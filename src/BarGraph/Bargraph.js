import React from 'react';
// import { Bar } from 'react-chartjs-2';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const data = [
    { label: 'A', value: 10 },
    { label: 'B', value: 20 },
    { label: 'C', value: 30 },
    { label: 'D', value: 15 },
  ];

  const BarGraph = () => {
    return (
      <div className="chart-container">
        <BarChart width={400} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" fontSize={16} />
          <YAxis fontSize={16} />
          <Tooltip fontSize={16} />
          <Legend fontSize={16} />
          <Bar dataKey="Reading" fill="#8884d8" />
        </BarChart>
      </div>
    );
  };
  
  

export default BarGraph;
