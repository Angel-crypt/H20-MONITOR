import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createClient } from "@connect2ic/core";
import { InternetIdentity } from "@connect2ic/core/providers/internet-identity";
import { Connect2ICProvider } from "@connect2ic/react";

import * as h2o_monitor_backend from 'declarations/h2o-monitor-backend';
import Auth from './components/Auth';
import Home from './components/Home';
import Monitor from './components/Monitor';

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

const App = () => (
  <Connect2ICProvider client={client}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/monitor" element={<Monitor />} />
      </Routes>
    </BrowserRouter>
  </Connect2ICProvider>
);

export default App;

