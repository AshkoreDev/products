import React from 'react';
import TableRow from './TableRow.jsx';

const TITLES = ['#', 'PRODUCTO', 'DESCRIPCIÓN', 'PRECIO', '']

const Table = ({ products, openModal, deleteData }) => {

  return (

    <div className="col-12 col-lg-10 offset-0 offset-lg-1">
      <div className="table-responsive">
        <table className="table table-bordered">
          
          <thead className="table-dark">
            <tr className="text-center">
              { TITLES.map((item) => <th key={item} className="fw-bold">{item}</th>) }
            </tr>
          </thead>

          <tbody className="table-group-divider">
            {
              (!products)
                ? 'SIN PRODUCTOS'
                : products.map((product) => <TableRow product={product} key={product.id} openModal={openModal} deleteData={deleteData}/>)
            }
          </tbody>
        </table>

      </div>
    </div>

  );
};

export default Table;