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
  const [current, setCurrent] = useState(null);

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
      const log = await response.json();
      setLogs([...logs, log]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const deleteLog = async (id) => {
    await fetch(`/logs/${id}`, {
      method: 'DELETE'
    });
    setLogs(logs.filter((log) => log.id !== id));
  };

  const updateLog = async (data) => {
    try {
      const response = await fetch(`/logs/${data.id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const updateLog = await response.json();
      setLogs(logs.map((log) => (log.id === updateLog.id ? updateLog : log)));
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const searchLogs = async (text) => {
    setLoading(true);
    const res = await fetch(`/logs?q=${text}`);
    const data = await res.json();

    setLogs(data);
    setLoading(false);
  };

  const getCurrent = (data) => {
    setCurrent(data);
  };

  useEffect(() => {
    //Init Materialize JS
    M.AutoInit();
  }, []);

  return (
    <Fragment>
      <SearchBar searchLogs={searchLogs} />
      <div className="container">
        <AddBtn />
        <AddLogModal addLogs={addLogs} />
        <EditLogModal updateLog={updateLog} current={current} />
        <AddTechModal />
        <TechListModal />
        <Logs
          logs={logs}
          loading={loading}
          handleDelete={deleteLog}
          getCurrent={getCurrent}
        />
      </div>
    </Fragment>
  );
};

export default App;
