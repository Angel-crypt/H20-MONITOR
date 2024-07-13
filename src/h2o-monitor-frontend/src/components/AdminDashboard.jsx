import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ServiceStatus from './ServiceStatus';
import ReportStatus from './ReportStatus';
import SectorStatus from './SectorStatus';


const AdminDashboard = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper elevation={3}>
                    <h1 className="title">Admin Dashboard</h1>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <ServiceStatus />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <ReportStatus />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <SectorStatus />
            </Grid>
        </Grid>
    );
};

export default AdminDashboard;
