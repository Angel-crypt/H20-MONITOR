import React, { useEffect } from 'react';
import { useConnect } from "@connect2ic/react";
import { useNavigate } from 'react-router-dom';
import { ConnectButton, ConnectDialog } from "@connect2ic/react";
import '../Auth.scss';  // Importa el archivo CSS

const Auth = () => {
    const { isConnected } = useConnect();
    const navigate = useNavigate();

    useEffect(() => {
        if (isConnected) {
            navigate('/home');
        }
    }, [isConnected, navigate]);

    return (
        <>
            <h1 className="heading">H2O<br />MONITOR</h1>
            <h2 className="subheading">TU <strong>consumo</strong>, TU <strong>impacto</strong></h2>
            <ConnectButton />
            <ConnectDialog />
        </>
    );
}

export default Auth;
