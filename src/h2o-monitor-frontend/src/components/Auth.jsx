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
            <h1>Por favor, inicie sesión</h1>
            <ConnectButton />
            <ConnectDialog />
        </div>
    );
}

export default Auth;
