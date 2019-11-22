import React, { useState, useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import PropTypes from 'prop-types';

const EditLogModal = ({ updateLog, current }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setTech(current.tech);
    }
  }, [current]);

  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Please enter message and tech' });
    } else {
      const data = {
        id: current.id,
        message,
        attention,
        tech,
        date: new Date()
      };

      updateLog(data);

      M.toast({ html: `Updated by ${tech}` });

      //Clear fields
      setMessage('');
      setAttention(false);
      setTech('');
    }
  };

  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
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

EditLogModal.propTypes = {
  updateLog: PropTypes.func.isRequired,
  current: PropTypes.object
};

const modalStyle = {
  width: '75%',
  height: '75%'
};

export default EditLogModal;
