import React from 'react';

const TableRow = ({ product, openModal, deleteData }) => {

  const { id, name, description, price } = product;
  const handleEdit = () => openModal(2, id, name, description, price);
  const handleDelete = () => deleteData(id, name);

  return (

    <tr className="text-center">
      <td>{id}</td>
      <td>{name}</td>
      <td>{description}</td>
      <td>${new Intl.NumberFormat('es-mx').format(price)}</td>
      <td>
        <button className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalProducts" onClick={handleEdit}>Editar</button>
      </td>
      <td>
        <button className="btn btn-danger" onClick={handleDelete}>Eliminar</button>
      </td>
    </tr>

  );
};

export default TableRow;