import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { ModalCrearAPP } from "@components/layout/organization/createApp/createAppStyles.js"
import { ReactComponent as uploadImg } from '@assets/icons/uploadImg.svg';


const CreateApp = () => {

    const [show, setShow] = useState(false);
    const [datos, setDatos] = useState([]);

    useEffect(() => {
const datos = JSON.parse(localStorage.getItem(''));
if (datos) {
  setDatos(datos);
}
}, []);
     /*  {
      app_name:"",
      app_device:"",
      app_icon:"",
      app_description:"",
    } */
 
    
    const enviarDatos = (event) => {
      event.preventDefault()
      console.log('enviando datos...' + event.target[0].value + ' ' + event.target[1].value + ' ' + event.target[2].value  + ' ' + event.target[3].value + ' ' )
      setShow(false);
   

  return (
    <>
    
        <Button className="me-2 mb-2" onClick={() => setShow(true)}>
          Crear una APP   
        </Button>
    
      <ModalCrearAPP show={show} fullscreen onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Crear APP</Modal.Title>
        </Modal.Header>
        <Modal.Body>

      <Form onSubmit={enviarDatos}>
        <Form.Group  className="mb-3" controlId="formBasicNombre">
          <Form.Label >Nombre</Form.Label>
          <Form.Control   type="text" placeholder="Escribe el nombre de tu app" name = "app_name"   />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAppType">
          <Form.Label >Tipo de App</Form.Label>
          <Form.Control type="text" placeholder="tipo de tu app" name = "app_device"   />
        </Form.Group>

        <Form.Group controlId="formBasicFile" className="mb-3">
        <Form.Label>Default file input example</Form.Label>
        <Form.Control type="file" name="app_icon" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicTextarea">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} name ="app_description"   />
      </Form.Group>

      
        <Button variant="primary" type="submit">
          Crear App
        </Button>
      </Form>

        </Modal.Body>
      </ModalCrearAPP>
    </>
  );
}

export default CreateApp