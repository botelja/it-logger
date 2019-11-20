import React, { Fragment, useEffect, useState } from 'react';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLogs();
  }, []);

  const getLogs = async () => {
    setLoading(true);
    const res = await fetch('/logs');
    const data = await res.json();

    setLogs(data);
    setLoading(false);
  };

  const addLogs = async (data) => {
    try {
      const response = await fetch('/logs', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const json = await response.json();
      setLogs([...logs, json]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    //Init Materialize JS
    M.AutoInit();
  }, []);

  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <AddBtn />
        <AddLogModal addLogs={addLogs} />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
        <Logs logs={logs} loading={loading} />
      </div>
    </Fragment>
  );
};

export default App;
