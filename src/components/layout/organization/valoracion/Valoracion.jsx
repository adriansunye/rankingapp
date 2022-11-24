import React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Estrellas from '@components/layout/organization/estrellas/Estrellas';
import { colorVariables } from '@utils/variables.js'



const ModalValoracion = styled(Modal)`
.btn-primary{
background: ${colorVariables.lila};
border: ${colorVariables.lila};
border-radius: 1rem;
padding: .5rem 2rem;
font-weight: 600;

&:hover{
  
}

}



`


const Valoracion = (props) => {
  return (
    <ModalValoracion
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title className="fw-bold" id="contained-modal-title-vcenter">
      {props.title}
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Estrellas/> {/* Estrellas */}
      <Form>
            <Form.Group
              className="mb-3"
              controlId="valoracionModal"
            >
              <Form.Label></Form.Label>
              <Form.Control as="textarea" rows={3} placeholder={props.comentario}/>
              
            </Form.Group>
          </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.onHide}>Enviar</Button>
    </Modal.Footer>
  </ModalValoracion>
  )
}

export default Valoracion