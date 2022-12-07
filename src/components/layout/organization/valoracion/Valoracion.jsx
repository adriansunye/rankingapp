import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { RatingStyled } from '@components/layout/organization/appDetailsContent/ratings/ratingsStyles';
import { ModalValoracion } from '@components/layout/organization/valoracion/valoracionStyle.js';

export const Valoracion = (props) => {
	return (
		<ModalValoracion {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Header closeButton>
				<Modal.Title className="fw-bold" id="contained-modal-title-vcenter"></Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<h2 className="fw-bold">{props.title}</h2>
				<Form onSubmit={props.handleSubmit}>
					<Form.Group className="" controlId="ControlEstrellas">
						<RatingStyled NameNew="valorar" /> {/* Estrellas */}
					</Form.Group>
					<Form.Group className="mb-4" controlId="valoracionModal">
						<Form.Label></Form.Label>
						<Form.Control as="textarea" rows={3} placeholder={props.comentario} />
					</Form.Group>
					<Button type="submit" onClick={props.onHide}>
						Enviar
					</Button>
				</Form>
			</Modal.Body>
			<Modal.Footer></Modal.Footer>
		</ModalValoracion>
	);
};

export default Valoracion;
