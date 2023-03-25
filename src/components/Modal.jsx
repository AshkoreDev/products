import React from 'react';

const Modal = ({ id, title, name, setName, description, setDescription, price, setPrice }) => {

  const handleNameChange = (e) => setName(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);

  return (

    <div id="modalProducts" className="modal fade" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">

          <div className="modal-header">
            <h2 className="h5">{title}</h2>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div className="modal-body">

            <input type="hidden" id={id}/>

            <div className="input-group mb-3">
              <label htmlFor="nombre" className="input-group-text">Nombre</label>
              <input type="text" id="nombre" className="form-control" value={name} onChange={handleNameChange}/>
            </div>

            <div className="input-group mb-3">
              <label htmlFor="description" className="input-group-text">Descripción</label>
              <textarea type="text" id="description" className="form-control" value={description} onChange={handleDescriptionChange}/>
            </div>

            <div className="input-group mb-3">
              <label htmlFor="price" className="input-group-text">Precio</label>
              <input type="text" id="price" className="form-control" value={price} onChange={handlePriceChange}/>
            </div>
            
            <div className="d-grid col-6 mx-auto">
              <button className="btn btn-success">Guardar</button>
            </div>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          </div>
          
        </div>
      </div>
    </div>

  );
};

export default Modal;