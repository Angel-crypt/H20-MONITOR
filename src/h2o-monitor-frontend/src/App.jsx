import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createClient } from "@connect2ic/core";
import { InternetIdentity } from "@connect2ic/core/providers/internet-identity";
import { Connect2ICProvider } from "@connect2ic/react";

import * as h2o_monitor_backend from 'declarations/h2o-monitor-backend';
import Auth from './components/Auth';
import AdminDashboard from './components/AdminDashboard';
import UserApp from './components/UserApp';

const client = createClient({
  canisters: {
    h2o_monitor_backend,
  },
  providers: [
    new InternetIdentity({ providerUrl: "http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:4943/" })
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
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/user" element={<UserApp />} />
      </Routes>
    </BrowserRouter>
  </Connect2ICProvider>
);

export default App;

