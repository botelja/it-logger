import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Please enter first and last name' });
    } else {
      console.log(firstName, lastName);

      //Clear fields
      setFirstName('');
      setLastName('');
    }
  };

  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4>New Technician</h4>
        <div className="row">
          <div className="input-field">
            <input
              value={firstName}
              name="firstName"
              type="text"
              className="validate"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label className="active" htmlFor="firstName">
              First Name
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              value={lastName}
              name="lastName"
              type="text"
              className="validate"
              onChange={(e) => setLastName(e.target.value)}
            />
            <label className="active" htmlFor="lastName">
              Last Name
            </label>
          </div>
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

export default AddTechModal;
