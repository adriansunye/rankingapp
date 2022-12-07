import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { ModalCrearAPP } from "@components/layout/organization/createApp/createAppStyles.js"
import {ButtonAnadir} from "@components/layout/organization/createApp/createAppStyles.js"
import { ReactComponent as uploadImg } from '@assets/icons/uploadImg.svg'
import Opinions from "@store/opinions/opinions"
import Placeholder from '@assets/imganePlaceHolder/Default.png'

const CreateApp = () => {

    const [show, setShow] = useState(false);

    const placeholderImage = Placeholder

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
    
        <ButtonAnadir  onClick={() => setShow(true)}> 
       

        <svg width="30" height="30" viewBox=" 0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 15C9.71667 15 9.479 14.904 9.287 14.712C9.09567 14.5207 9 14.2833 9 14V11H5.975C5.69167 11 5.45833 10.904 5.275 10.712C5.09167 10.5207 5 10.2833 5 10C5 9.71667 5.096 9.479 5.288 9.287C5.47933 9.09567 5.71667 9 6 9H9V5.975C9 5.69167 9.09567 5.45833 9.287 5.275C9.479 5.09167 9.71667 5 10 5C10.2833 5 10.5207 5.09567 10.712 5.287C10.904 5.479 11 5.71667 11 6V9H14.025C14.3083 9 14.5417 9.09567 14.725 9.287C14.9083 9.479 15 9.71667 15 10C15 10.2833 14.9043 10.5207 14.713 10.712C14.521 10.904 14.2833 11 14 11H11V14.025C11 14.3083 10.904 14.5417 10.712 14.725C10.5207 14.9083 10.2833 15 10 15ZM10 20C11.3833 20 12.6833 19.7373 13.9 19.212C15.1167 18.6873 16.175 17.975 17.075 17.075C17.975 16.175 18.6873 15.1167 19.212 13.9C19.7373 12.6833 20 11.3833 20 10C20 8.61667 19.7373 7.31667 19.212 6.1C18.6873 4.88333 17.975 3.825 17.075 2.925C16.175 2.025 15.1167 1.31233 13.9 0.787C12.6833 0.262333 11.3833 0 10 0C8.61667 0 7.31667 0.262333 6.1 0.787C4.88333 1.31233 3.825 2.025 2.925 2.925C2.025 3.825 1.31267 4.88333 0.788 6.1C0.262667 7.31667 0 8.61667 0 10C0 11.3833 0.262667 12.6833 0.788 13.9C1.31267 15.1167 2.025 16.175 2.925 17.075C3.825 17.975 4.88333 18.6873 6.1 19.212C7.31667 19.7373 8.61667 20 10 20Z" fill="currentColor"/>
</svg>
        </ButtonAnadir>
    

      <ModalCrearAPP show={show} fullscreen onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Crear APP</Modal.Title>
        </Modal.Header>
        <Modal.Body>


      <Form onSubmit={event => handleSubmit(event)}>

        <Form.Group  className="mb-3" controlId="formBasicNombre">
          <Form.Label >Nombre de la App:</Form.Label>
          <Form.Control   type="text" placeholder="Escribe el nombre de tu app" name = "app_name"   />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAppType">
          <Form.Label >¿Qué tipo de App?</Form.Label>
          <Form.Control type="text" placeholder="tipo de tu app" name = "app_device"   />
        </Form.Group>

        <Form.Group controlId="formBasicFile" className="mb-3">
        <Form.Label>Añade tu logo</Form.Label>
        <Form.Control type="file" name="app_icon" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicTextarea">
        <Form.Label>Describe tu App</Form.Label>
        <Form.Control as="textarea" rows={3} name ="app_description"   />
      </Form.Group>

      
        <Button variant="primary" type="submit">
         Añadir tu App al ranking
        </Button>
      </Form>

        </Modal.Body>
      </ModalCrearAPP>
    </>
  );
}

export default CreateApp