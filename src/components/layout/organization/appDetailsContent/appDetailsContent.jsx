import React from 'react';
import AddButton from './buttons/button';
import TrashIcon from '@assets/icons/trash.svg';
import { CustomTitle } from '@components/layout/organization/appDetailsContent/titles/titlesStyling.js';
import { CustomParagraph } from '@components/layout/organization/appDetailsContent/paragraph/paragraphStyling.js';
import { Row, Col } from 'react-bootstrap';
import { OpinionCard } from './opinionCard/opinionStyles';

/* -----START componente de pop-up valoracion --- */
import { useState, useEffect } from 'react';
import Valoracion from '@components/layout/organization/valoracion/Valoracion';
import DeleteAlert from '@components/layout/organization/DeleteAlert/DeleteAlert';
import Button from 'react-bootstrap/Button';
import Estrellas from '@components/layout/organization/estrellas/Estrellas.jsx';
import EstrellasValoracion from '@components/layout/organization/estrellas/EstrellasValoracion.jsx';
import { Link } from 'react-router-dom';
/* -----END componente de pop-up valoracion --- */

const AppDetails = () => {
	const [modalShow, setModalShow] = useState(false);
	const [deleteShow, setDeleteShow] = useState(false);
	const [clickedObject] = useState(JSON.parse(localStorage.getItem('clickedItem')));
	const [elementList, setElementList] = useState();

	useEffect(() => {
		let updateLocalStorage = JSON.parse(localStorage.getItem('data'));

		if (elementList != null) {
			
			updateLocalStorage.map((objt) => (objt.app_id === clickedObject.app_id ? objt.opinions.push(elementList) : objt));

			localStorage.setItem('data', JSON.stringify(updateLocalStorage));
		}
	});

	/*//* Start evento del modal de valoración */
	const handleSubmit = (e) => {
		
		e.preventDefault(); // elimina el comportamiento por defecto de refrescar la pantalla
		
		//! capturar las estrellas votadas
		let ratingValue = ''; // valor por defecto de la votación
		for (let i = 0; i < 5; i++) {
			if (e.target[i].checked) {ratingValue = e.target[i].value;}
		}

		//! Capturar el nombre del usuario
		let userName = e.target[5].value === "" ? "Anónimo" : e.target[5].value;

		//! Objeto opinion que resive los parametro
		let opinion = { user: `${userName}`, opinion: e.target[6].value, rating: `${ratingValue}` };
		clickedObject.opinions.push(opinion);
		
		//! cambiar el estado de ElementList para que renderice los comentarios
		setElementList(opinion);

	};

//* End evento del modal de valoración

//* START Evento para eliminar una APP */
	const handleClick = (e) => {

		let removeLocalStorage = [];

		//! Obtener un Array nuevo sin el objeto a eliminar
		JSON.parse(localStorage.getItem('data')).forEach((obj) => {
			if ( obj.app_id !== clickedObject.app_id ) {
				removeLocalStorage.push(obj);
			}
		});

		//! Remplazar la base de datos en localStorage por el nuevo Array
		localStorage.setItem('data', JSON.stringify(removeLocalStorage));

		//! Mostrar la alerta de que se ha eliminado la APP
		setDeleteShow(true);
	};
//* END Evento para eliminar una APP */


	return (
		<>
			<div className="container">
				<Row>
					<Col className="d-flex justify-content-end">
						<AddButton handleClick={handleClick} image={TrashIcon} />
					</Col>
				</Row>
				<Row>
					<Col className="d-flex flex-column justify-content-center col-8 col-md">
						{/* Ejecutar modal de valoracion START */}
						<Button className="bnt-star px-0 " onClick={() => setModalShow(true)}>
							<Estrellas />
						</Button>
						<CustomTitle className="mb-3 fs-4" weight="light" color="grey">
							Valoraración
						</CustomTitle>
						<CustomTitle className="mb-0 fs-5">
							{' '}
							<strong>Tipo de App:</strong> {clickedObject.type === 0 ? 'Web' : 'Desktop'}{' '}
						</CustomTitle>
						<CustomTitle weight="bold" className="mb-4 mt-0 display-2">
							{clickedObject.app_name}
						</CustomTitle>
					</Col>
					<Col className="col-md-4 d-flex align-items-center">
						<img src={clickedObject.app_icon} alt="Logo" className="ms-auto avatar-img-detail img-fluid" />
					</Col>
					<Col className="col-12">
						<h4 className="fw-normal text-muted mb-1">Descripción</h4>
						<CustomParagraph isDescription className="col-lg-6" size="medium">
							{clickedObject.app_description}
						</CustomParagraph>
					</Col>
				</Row>
				<CustomTitle className="d-none d-md-block h3 mb-4">Opiniones</CustomTitle>
			</div>
			<div className="container">
				<Row className="">
					{clickedObject.opinions.map((item, index) => (
						<Col key={`${item.user}-${index}`} lg={6} className="m-0">
							<OpinionCard className="mb-3 p-4">
								<CustomTitle className="mt-2 mb-2 h4 fw-semibold">{item.user}</CustomTitle>
								<EstrellasValoracion rat={item.rating} />
								<CustomParagraph className="mt-3 fs-5">{item.opinion}</CustomParagraph>
							</OpinionCard>
						</Col>
					))}
				</Row>
			</div>

			{/* pop-up de valoracion */}
			<Valoracion
				title="Valoración"
				comentario="Escribe tu valoración...."
				estrellas="star"
				show={modalShow}
				onHide={() => setModalShow(false)}
				handleSubmit={handleSubmit}
			/>

			<DeleteAlert title="La App se ha eliminado" show={deleteShow} onHide={() => setDeleteShow(false)} />

			{/* Ejecutar modal de valoracion END */}
		</>
	);
};

export default AppDetails;
