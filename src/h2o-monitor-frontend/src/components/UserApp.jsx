import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

const UserApp = () => {
    const [userSummary, setUserSummary] = useState(null);

    // Simulación de carga de datos para propósitos de demostración
    useEffect(() => {
        const fetchUserSummaryData = async () => {
            try {
                // Lógica para obtener el resumen del usuario (simulación)
                const summaryData = {
                    consumption: '1000 litros',
                    debts: '$50.00',
                    alerts: 3,
                };
                setUserSummary(summaryData);
            } catch (error) {
                console.error('Error fetching user summary:', error);
            }
        };

        fetchUserSummaryData();
    }, []);

    return (
        <div>
            <h1>User Dashboard</h1>

            {/* Mostrar resumen de usuario */}
            {userSummary && (
                <div>
                    <h2>User Summary</h2>
                    <p>Consumption: {userSummary.consumption}</p>
                    <p>Debts: {userSummary.debts}</p>
                    <p>Alerts: {userSummary.alerts}</p>
                </div>
            )}

            {/* Barra de navegación inferior */}
            <nav className="bottom-nav">
                <Link to="/user" className="nav-item">
                    <span className="nav-icon">Inicio</span>
                </Link>
                <Link to="/consumption" className="nav-item">
                    <span className="nav-icon">Consumo</span>
                </Link>
                <Link to="/reports" className="nav-item">
                    <span className="nav-icon">Reportes</span>
                </Link>
            </nav>
        </div>
    );
};

export default UserApp;
