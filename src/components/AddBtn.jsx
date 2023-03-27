import React from 'react';

const AddBtn = ({ openModal }) => {

  const handleCreate = () => openModal(1);

  return (

    <div className="col-sm-2 col-md-2 offset-md-1">
      <div className="d-grid mx-auto">

        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalProducts" onClick={handleCreate}>
         Añadir Producto
        </button>

      </div>
    </div>

  );
};

export default AddBtn;