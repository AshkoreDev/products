import React, { useState, useEffect } from 'react';
import AddBtn from './AddBtn.jsx';
import Table from './Table.jsx';
import Modal from './Modal.jsx';
import { showAlert, confirmAlert } from '../utils/functions.js';

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

  const validateData = () => {

    let params;
    let method;

    if(name.trim() === '') {

      showAlert('ESCRIBE EL NOMBRE DEL PRODUCTO', 'warning');

    } else if(description.trim() === '') {

      showAlert('ESCRIBE LA DESCRIPCIÓN DEL PRODUCTO', 'warning');

    } else if(price.trim() === '') {

      showAlert('ESCRIBE EL PRECIO DEL PRODUCTO', 'warning');

    } else {

      params = { 
        name: name.trim(),
        description: description.trim(),
        price: price.trim()
      };

      (operation === 1) ? method = 'POST' :  method = 'PATCH';

      SendData(id, method, params);
    }
  };

  const SendData = async (id, method, params = {}) => {

    let URL;

    (method === 'PATCH' || 'DELETE') ? URL = URL_API + id : URL = URL_API;

    const resp = await fetch(URL, { 
      method: method, 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params) 
    })
    .then((res) => res.json())
    .then((data) => {
      
        let type = data.success;
        let message = data.message;
      
        showAlert(message, type);
      
        if(type === 'success') {
          document.getElementById('btnClose').click();
          getProducts();
        }
      })
      .catch((error) => {
      
        showAlert('ERROR EN LA SOLICITUD', 'error');
      });
  }

  const deleteData = async (id, name) => {

    const confirm = await confirmAlert(name);

    if(confirm) {

      setId(id);
      SendData(id, 'DELETE',);

    } else {

      showAlert('EL PRODUCTO NO FUE ELIMINADO', 'info');
    }
  };

  const getProducts = async () => {
    
    const res = await fetch(URL_API);
    const {data} = await res.json();  

    setProducts(data);    
  };

  useEffect(() => {

    getProducts();
  }, []);

  return (

    <section>

      <div className="container-fluid">
        <div className="row my-4">
          <AddBtn openModal={openModal}/>
        </div>

        <div className="row mt-3">
          <Table products={products} openModal={openModal} deleteData={deleteData}/>
        </div>
      </div>

      <Modal id={id} title={title} name={name} setName={setName} description={description} setDescription={setDescription} price={price} setPrice={setPrice} validateData={validateData}/>

    </section>

  );
};

export default ShowProducts;