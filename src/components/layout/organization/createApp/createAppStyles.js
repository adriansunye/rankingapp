import styled from "styled-components";
import { colorVariables } from '@utils/variables.js'
import addApp from '@assets/icons/addApp.svg'
import Modal from 'react-bootstrap/Modal';


export const ModalCrearAPP = styled(Modal)`
.modal-content{
  
}

.modal-header{
border-bottom:none;
padding: 2rem 2rem 0;
.modal-title{
    font-weight: bold;
}
  .btn-close{
      color: ${colorVariables.grisOscuro}!important;
      &:hover{
        color: ${colorVariables.rosa}!important;
      }
  }
}
.modal-body{
  padding:0rem 2rem 1rem;
}
.modal-footer{
border-top:none;
padding: 0 2rem 1rem;
}

.form-control{
    background-color: ${colorVariables.grisClaro};
    border-color: ${colorVariables.grisClaro};
}

textarea{
  border: 2px solid ${colorVariables.grisOscuro};
  background:white;
}

.btn-primary{
background: ${colorVariables.lila};
border: ${colorVariables.lila};
border-radius: 2rem;
padding: .5rem 2rem;
font-weight: 600;
transition: background .2s ease-in-out;

&:hover{
    background: ${colorVariables.rosa};
    border: ${colorVariables.rosa}
}

}
`
