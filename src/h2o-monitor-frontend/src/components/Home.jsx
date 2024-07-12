import React from 'react';
import { useConnect } from "@connect2ic/react";
import { Link } from 'react-router-dom';
import { ConnectButton, ConnectDialog } from "@connect2ic/react";
import Monitor from './Monitor';

const Home = () => {
    const { principal } = useConnect();

    return (
        <div>
            <nav className="navbar navbar-dark bg-dark" data-bs-theme="light">
                {principal ? (
                    <div className="container">
                        <div className="col-sm-2">
                            <button className="btn btn-primary btn-lg">
                                <Link to='/monitor' className="nav-link">Monitor H2O</Link>
                            </button>
                        </div>
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
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                            </ul>
                            <ConnectButton />
                            <ConnectDialog />
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
}

export default Home;
