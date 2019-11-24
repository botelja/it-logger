import React from 'react';
import TechItem from './TechItem';
import PropTypes from 'prop-types';

const TechListModal = ({ techs, loading, handleDelete }) => {
  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!loading &&
            techs !== null &&
            techs.map((tech) => (
              <TechItem key={tech.id} tech={tech} onDelete={handleDelete} />
            ))}
        </ul>
      </div>
    </div>
  );
};

TechListModal.propTypes = {
  techs: PropTypes.array.isRequired
};

export default TechListModal;
