import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { ModalCrearAPP } from "@components/layout/organization/createApp/createAppStyles.js"

import { ReactComponent as uploadImg } from '@assets/icons/uploadImg.svg'
import Opinions from "@store/opinions/opinions"

const CreateApp = () => {

    const [show, setShow] = useState(false);

    const placeholderImage =
    'https://images.unsplash.com/photo-1511285605577-4d62fb50d2f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80'

    const handleSubmit = (e) => {
      e.preventDefault();

      console.log(e.target[0])

      let newApp = {
        app_id: "com." + e.target[0].value, 
        app_name: e.target[0].value, 
        type: 0,  
        app_icon: placeholderImage , 
        app_description: e.target[3].value,
        app_category: "Empresa",
        rating: 3,
        opinions: Opinions
      }
      
      let updateLocalStorage = [];
      JSON.parse(localStorage.getItem("data")).map(obj => {
          updateLocalStorage.push(obj)
      })

      updateLocalStorage.push(newApp)

      localStorage.setItem("data", JSON.stringify(updateLocalStorage));

      setShow(false)

    }


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


      <Form onSubmit={event => handleSubmit(event)}>

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