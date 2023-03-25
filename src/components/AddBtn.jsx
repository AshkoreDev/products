import React from 'react';

const AddBtn = ({ openModal }) => {

  const handleCreate = () => openModal(1);

  return (

    <div className="col-4 cold-md-4 offset-md-4">
      <div className="d-grid mx-auto">

        <button className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#modalProducts" onClick={handleCreate}>
          <i>+</i> <span>Añadir</span>
        </button>

      </div>
    </div>

  );
};

export default AddBtn;