import React from 'react';
import TableRow from './TableRow.jsx';

const TITLES = ['#', 'PRODUCTO', 'DESCRIPCIÓN', 'PRECIO', '']

const Table = ({ products, openModal }) => {

  return (

    <div className="col-12 col-lg-8 offset-0 offset-lg-2">
      <div className="table-responsive">
        <table className="table table-bordered">
          
          <thead>
            <tr className="text-center">
              { TITLES.map((item) => <th key={item} className="fw-bold">{item}</th>) }
            </tr>
          </thead>

          <tbody className="table-group-divider">
            {
              products.map((product, i) => <TableRow product={product} key={product.id} i={i} openModal={openModal}/>)
            }
          </tbody>
        </table>

      </div>
    </div>

  );
};

export default Table;