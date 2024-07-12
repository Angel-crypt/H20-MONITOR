import { createClient } from "@connect2ic/core";
import { InternetIdentity } from "@connect2ic/core/providers/internet-identity";
import { ConnectButton, ConnectDialog, Connect2ICProvider } from "@connect2ic/react";
import * as h2o_monitor_backend from 'declarations/h2o-monitor-backend';
import { useConnect } from "@connect2ic/react";
import { BrowserRouter, Route, Link, Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const client = createClient({
    canisters: {
        h2o_monitor_backend,
    },
    providers: [
        new InternetIdentity({ providerUrl: "http://127.0.0.1:4943/?canisterId=be2us-64aaa-aaaaa-qaabq-cai" })
    ],
    globalProviderConfig: {
        dev: true,
    },
});

function Auth() {
    const { principal, isConnected } = useConnect();
    const navigate = useNavigate();

    useEffect(() => {
        if (isConnected) {
            navigate('/home');
        }
    }, [isConnected, navigate]);

    return (
        <div className="auth-container">
            <h1>Por favor, autentíquese</h1>
            <ConnectButton />
            <ConnectDialog />
        </div>
    );
}

function Home() {
    const { principal } = useConnect();

    function onElementAvailable(selector, callback) {
        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                observer.disconnect();
                callback();
            }
        });

        observer.observe(document.body, { childList: true, subtree: true });
    }

    onElementAvailable(".ii-styles", () => {
        const btn2 = Array.from(document.getElementsByClassName('ii-styles'));

        const custom_style = {
            "color": "red",
            "background-color": "blue",
            "padding": "3px",
            "margin-left": "4px"
        };

        Object.assign(btn2[0].style, custom_style);

        const texto = Array.from(document.getElementsByClassName('button-label'));
        if (texto[0]) texto[0].remove();

        const img = Array.from(document.getElementsByClassName('img-styles'));
        img[0].style.height = "25px";
    });

    onElementAvailable(".connect-button", () => {
        const btn = Array.from(document.getElementsByClassName('connect-button'));
        const custom_style = {
            "background-color": "blue",
            "font-size": "17px",
        };
        Object.assign(btn[0].style, custom_style);
        if (btn[0].textContent === 'Connect' || btn[0].textContent === 'Conectar II')
            btn[0].textContent = 'Conectar II';
        else
            btn[0].textContent = 'Desconectar II';
    });

    return (
        <BrowserRouter>
            <nav className="navbar navbar-dark bg-dark" data-bs-theme="light">
                {principal ? (
                    <div className="container">
                        <div className="col-sm-2"><button className="btn btn-primary btn-lg"><Link to='/monitor' >Monitor H2O</Link></button></div>
                        <ConnectButton />
                        <ConnectDialog />
                    </div>
                ) : (
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#"></a>
                                </li>
                            </ul>
                            <ConnectButton />
                            <ConnectDialog />
                        </div>
                    </div>
                )}
            </nav>
            <Routes>
                <Route path="/monitor" element={<Monitor />} />
            </Routes>
        </BrowserRouter>
    );
}

const Monitor = () => (
    <div className='container'>
        <h1>Monitor H2O</h1>
        <p>Aquí se mostrarán los datos del monitoreo de agua.</p>
    </div>
);

function App() {
    return (
        <div className='container'>
            Holaaa
        </div>
    );
}

export default () => (
    <Connect2ICProvider client={client}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Auth />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    </Connect2ICProvider>
);
