import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import PropTypes from 'prop-types';

const AddLogModal = ({ addLogs }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Please enter message and tech' });
    } else {
      const data = { message, attention, tech, date: new Date() };

      addLogs(data);

      M.toast({ html: `Added by ${tech}` });

      //Clear fields
      setMessage('');
      setTech('');
      setAttention(false);
    }
  };

  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              value={message}
              name="message"
              type="text"
              className="validate"
              onChange={(e) => setMessage(e.target.value)}
            />
            <label className="active" htmlFor="message">
              Log Message
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              className="browser-default"
              name="tech"
              value={tech}
              onChange={(e) => setTech(e.target.value)}
            >
              <option value="" disabled>
                Select Technician
              </option>
              <option value="Sam Smith">Sam Smith</option>
              <option value="John Doe">John Doe</option>
              <option value="Jill Jhonson">Jill Jhonson</option>
            </select>
          </div>
        </div>
        <div className="row">
          <p>
            <label>
              <input
                className="filled-in"
                type="checkbox"
                name="attention"
                checked={attention}
                value={attention}
                onChange={() => setAttention(!attention)}
              />
              <span>Attention</span>
            </label>
          </p>
        </div>
      </div>
      <div className="modal-footer">
        <button
          className="btn modal-close waves-effect waves-light cyan lighten-3"
          type="submit"
          onClick={onSubmit}
        >
          Enter
          <i className="material-icons right">send</i>
        </button>
      </div>
    </div>
  );
};

AddLogModal.propTypes = {
  addLogs: PropTypes.func.isRequired
};

const modalStyle = {
  width: '75%',
  height: '75%'
};

export default AddLogModal;
