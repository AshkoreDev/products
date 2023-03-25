import React from 'react';

const TableRow = ({ product, i }) => {

  const { id, name, description, price } = product;

  return (

    <tr className="text-center">
      <td>{(i + 1)}</td>
      <td>{name}</td>
      <td>{description}</td>
      <td>${new Intl.NumberFormat('es-mx').format(price)}</td>
      <td>
        <button className="btn btn-warning">Mod /</button>
      </td>
      <td>
        <button className="btn btn-danger">Del -</button>
      </td>
    </tr>

  );
};

export default TableRow;