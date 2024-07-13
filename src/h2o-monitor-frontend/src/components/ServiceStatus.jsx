import React from 'react';
import Paper from '@mui/material/Paper';
import { Bar } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registrar los componentes de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ServiceStatus = () => {
  const data = {
    labels: ['Servicio A', 'Servicio B', 'Servicio C', 'Servicio D', 'Servicio E'],
    datasets: [
      {
        label: 'Estado de Servicio',
        backgroundColor: '#3f51b5',
        borderColor: '#1a237e',
        borderWidth: 1,
        hoverBackgroundColor: '#283593',
        hoverBorderColor: '#1a237e',
        data: [65, 59, 80, 81, 56],
      },
    ],
  };

  return (
    <Paper elevation={3} style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>Estado de Servicio</h2>
      <Bar data={data} />
    </Paper>
  );
};

export default ServiceStatus;
