import React from 'react';
import Moment from 'react-moment';
import M from 'materialize-css/dist/js/materialize.min.js';
import PropTypes from 'prop-types';

const LogsItem = ({ log, handleDelete, getCurrent }) => {
  const onDelete = () => {
    handleDelete(log.id);
    M.toast({ html: 'Log is deleted' });
  };

  const onUpdate = () => {
    getCurrent(log);
  };
  return (
    <li className="collection-item">
      <a
        href="#edit-log-modal"
        className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`}
        onClick={onUpdate}
      >
        {log.message}
      </a>
      <br />
      <span className="grey-text">
        <span className="black-text">ID #{log.id}</span> last update by{' '}
        <span className="black-text">{log.tech}</span>{' '}
        <Moment format="MMMM do YYYY, h:mm:ss a">{log.date}</Moment>
      </span>
      <a href="!#" className="secondary-content" onClick={onDelete}>
        <i className="material-icons gray-text">delete</i>
      </a>
    </li>
  );
};

LogsItem.propTypes = {
  log: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
  getCurrent: PropTypes.func.isRequired
};

export default LogsItem;
