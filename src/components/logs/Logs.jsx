import React from 'react';
import LogsItem from './LogsItem';
import Preloader from '../layout/Preloader';
import PropTypes from 'prop-types';

const Logs = ({ logs, loading }) => {
  if (loading) {
    return <Preloader />;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No logs to show...</p>
      ) : (
        logs.map((log) => <LogsItem key={log.id} log={log} />)
      )}
    </ul>
  );
};

Logs.propTypes = {
  logs: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Logs;
