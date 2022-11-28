import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { ModalCrearAPP } from "@components/layout/organization/createApp/createAppStyles.js"
import { ReactComponent as uploadImg } from '@assets/icons/uploadImg.svg'

const CreateApp = () => {

    const [show, setShow] = useState(false);

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

      <Form>
        <Form.Group  className="mb-3" controlId="formBasicNombre">
          <Form.Label >Nombre</Form.Label>
          <Form.Control   type="text" placeholder="Escribe el nombre de tu app" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAppType">
          <Form.Label >Tipo de App</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>

        <Form.Group controlId="formBasicFile" className="mb-3">
        <Form.Label>Default file input example</Form.Label>
        <Form.Control type="file" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicTextarea">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
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