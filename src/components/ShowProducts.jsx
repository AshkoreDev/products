import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
// import { showAlert } from './../utils/functions.js';
import AddBtn from './AddBtn.jsx';
import Table from './Table.jsx';
import Modal from './Modal.jsx';

const ShowProducts = () => {

  const URL_API = 'http://localhost:3200/api/products/';

  const [products, setProducts] = useState([]);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [operation, setOperation] = useState(1);
  const [title, setTitle] = useState('');

  const openModal = (op, id, name, description, price) => {

    setId('');
    setName('');
    setDescription('');
    setPrice('');
    setOperation(op);

    if (op === 1) {

      setTitle('Registrar Producto');

    } if (op === 2) {

      setTitle('Editar Producto');
      setId(id);
      setName(name);
      setDescription(description);
      setPrice(price);
    }

    window.setTimeout(() => document.getElementById('name').focus(), 500);
  };

  const getProducts = async () => {
    
    const res = await fetch(URL_API);
    return await res.json();    
  };

  useEffect(() => {

    return async () => {

      const { data } = await getProducts();
      setProducts(data);      
    }
  }, []);

  return (

    <section>

      <div className="container">
        <div className="row my-4">
          <AddBtn openModal={openModal}/>
        </div>

        <div className="row mt-3">
          <Table products={products} openModal={openModal}/>
        </div>
      </div>

      <Modal id={id} title={title} name={name} setName={setName} description={description} setDescription={setDescription} price={price} setPrice={setPrice}/>

    </section>

  );
};

export default ShowProducts;