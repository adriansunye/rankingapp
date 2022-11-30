import React from 'react'
import Modal from 'react-bootstrap/Modal';
import {Link} from 'react-router-dom';
import { ModalValoracion } from "@components/layout/organization/valoracion/valoracionStyle.js"

export const Valoracion = (props) => {

  return (
    <ModalValoracion
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Link to="/">
    <Modal.Header closeButton>
      <Modal.Title className="fw-bold" id="contained-modal-title-vcenter">
    
      </Modal.Title>
    </Modal.Header>
    </Link>
    <Modal.Body>
      <h2 className='fw-bold'>{props.title}</h2>
    </Modal.Body>
    <Modal.Footer>
    </Modal.Footer>
    </ModalValoracion>
  )
}

export default Valoracion