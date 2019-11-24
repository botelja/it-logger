import React from 'react';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';

const TechItem = ({ tech, onDelete }) => {
  const deleteTech = (id) => {
    onDelete(tech.id);
    M.toast({ html: 'Technician deleted' });
  };
  return (
    <li className="collection-item">
      <div>
        {tech.firstName} {tech.lastName}
        <a href="#!" className="secondary-content" onClick={deleteTech}>
          <i className="material-icons gray-text">delete</i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default TechItem;
