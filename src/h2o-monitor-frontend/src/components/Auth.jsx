import React, { useEffect } from 'react';
import { useConnect } from "@connect2ic/react";
import { useNavigate } from 'react-router-dom';
import { ConnectButton, ConnectDialog } from "@connect2ic/react";

const Auth = () => {
    const { isConnected } = useConnect();
    const navigate = useNavigate();

    useEffect(() => {
        if (isConnected) {
            navigate('/home');
        }
    }, [isConnected, navigate]);

    return (
        <div className="auth-container">
            <div>
                <h1 className="heading">H20 MONITORING</h1>
                <h2 style={{ color: '#2a5ea3' }}>Pagos Justos</h2>
            </div>

            <img src={`${process.env.PUBLIC_URL}/download.png`} alt="H2O" />
            
            <h1>Por favor, inicie sesión</h1>
            <ConnectButton />
            <ConnectDialog />
        </div>
    );
}

export default Auth;
