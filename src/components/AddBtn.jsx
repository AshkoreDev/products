import React from 'react';

const AddBtn = () => {

  return (

    <div className="col-4 cold-md-4 offset-md-4">
      <div className="d-grid mx-auto">

        <button className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#modalProducts">
          <i>+</i> <span>Añadir</span>
        </button>

      </div>
    </div>

  );
};

export default AddBtn;