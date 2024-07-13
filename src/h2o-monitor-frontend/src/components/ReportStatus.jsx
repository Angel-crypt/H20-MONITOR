import React from 'react';
import Paper from '@mui/material/Paper';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Icono verde
import WarningIcon from '@mui/icons-material/Warning'; // Icono naranja
import ErrorIcon from '@mui/icons-material/Error'; // Icono rojo

import '../index.scss';

const ReportStatus = () => {
  // Simulación de datos de reportes
  const reports = [
    { id: 1, status: 'ok', description: 'Reporte OK' },
    { id: 2, status: 'alert', description: 'Reporte con alerta' },
    { id: 3, status: 'problem', description: 'Reporte con problema' },
  ];

  return (
    <div>
      <h2 className="title">Report Status</h2>
      <div className="report-container">
        {reports.map(report => (
          <Paper key={report.id} className={`report-item ${report.status}`}>
            {report.status === 'ok' && <CheckCircleIcon />}
            {report.status === 'alert' && <WarningIcon />}
            {report.status === 'problem' && <ErrorIcon />}
            <p>{report.description}</p>
          </Paper>
        ))}
      </div>
    </div>
  );
};

export default ReportStatus;
