import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
// import { showAlert } from './../utils/functions.js';
import AddBtn from './AddBtn.jsx';
import Table from './Table.jsx';
import Modal from './Modal.jsx';
import { showAlert } from '../utils/functions.js';

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

      showAlert('Escribe el nombre del producto', 'warning');

    } else if(description.trim() === '') {

      showAlert('Escribe la descripción del producto', 'warning');

    } else if(price.trim() === '') {

      showAlert('Escribe el precio del producto', 'warning');

    } else {

      params = { 
        name: name.trim(),
        description: description.trim(),
        price: price
      };

      (operation === 1) ? method = 'POST' :  method = 'PATCH';

      SendData(method, params, id);
    }
  };

  const SendData = async (method, params, id) => {

    let URL;

    (method === 'PATCH') ? URL = URL_API+id : URL = URL_API;

    await fetch(URL, { 
      method: method, 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params) 
    })
      .then((res) => {

        console.log(res)

        let type = res.status;
        // let message = res.data[1];

        console.log(type);

        // showAlert(message, type);
        showAlert(type, 'warning');

        // if(type === 'success') {
        //   document.getElementById('btnClose').click();
        //   getProducts();
        //}
      })
      .catch((error) => {

        showAlert('ERROR EN LA SOLICITUD', 'error');
        console.log(error);
      });
  }

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

      <Modal id={id} title={title} name={name} setName={setName} description={description} setDescription={setDescription} price={price} setPrice={setPrice} validateData={validateData}/>

    </section>

  );
};

export default ShowProducts;