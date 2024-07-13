import React, { useEffect } from 'react';
import { useConnect } from "@connect2ic/react";
import { useNavigate } from 'react-router-dom';
import { ConnectButton, ConnectDialog } from "@connect2ic/react";

import '../Auth.scss';  // Importa el archivo CSS

const Auth = () => {
    const navigate = useNavigate();

    const goToAdminDashboard = () => {
        navigate('/admin');
    };

    const goToUserApp = () => {
        navigate('/user');
    };

    const { isConnected } = useConnect();


    useEffect(() => {
        if (isConnected) {
            navigate('/admin');
        }
    }, [isConnected, navigate]);

    return (
        <>
            <div className="container">
                <div>
                    <h1 className="heading">H2O<br />MONITOR</h1>
                    <h2 className="subheading">TU <strong>consumo</strong>, TU <strong>impacto</strong></h2>
                    <div className="buttons-container">
                        <ConnectButton />
                        <ConnectDialog />
                        <button onClick={goToUserApp} className="button">App del Usuario</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Auth;
