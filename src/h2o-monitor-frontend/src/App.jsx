import React, { useState } from 'react';
import * as  h2o_monitor_backend from 'declarations/h2o-monitor-backend';

import Home from './components/Home';

import { createClient } from "@connect2ic/core";
import { InternetIdentity } from "@connect2ic/core/providers/internet-identity";
import { ConnectButton, ConnectDialog, Connect2ICProvider } from "@connect2ic/react";
import { useCanister, useConnect } from "@connect2ic/react";

import 'bootstrap/dist/css/bootstrap.min.css';
import "@connect2ic/core/style.css";

function App() {

  return (
    <div className='contanier' >
      {/* <Menu /> */}
      <Home />
      {/* <Login /> */}
    </div>
  );
}

const client = createClient({
  canisters: {
    h2o_monitor_backend,
  },
  providers: [
    new InternetIdentity({ providerUrl: "http://127.0.0.1:8000/?canisterId=bkyz2-fmaaa-aaaaa-qaaaq-cai" })
  ],
  globalProviderConfig: {
    dev: true,
  },
});

export default () => (
  <Connect2ICProvider client={client}>
    <App />
  </Connect2ICProvider>
);