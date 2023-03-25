import React from 'react';

const TableRow = ({ product, i, openModal }) => {

  const { id, name, description, price } = product;
  const handleEdit = () => openModal(2, id, name, description, price);

  return (

    <tr className="text-center">
      <td>{(i + 1)}</td>
      <td>{name}</td>
      <td>{description}</td>
      <td>${new Intl.NumberFormat('es-mx').format(price)}</td>
      <td>
        <button className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalProducts" onClick={handleEdit}>Mod /</button>
      </td>
      <td>
        <button className="btn btn-danger">Del -</button>
      </td>
    </tr>

  );
};

export default TableRow;