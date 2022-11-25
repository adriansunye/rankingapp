import styled from "styled-components";
import { colorVariables } from '@utils/variables.js'
import Modal from 'react-bootstrap/Modal';


export const ModalValoracion = styled(Modal)`
.modal-content{
  background: ${colorVariables.grisClaro};
  border-radius: 1.5rem;
}
.modal-header{
border-bottom:none;
padding: 1rem 2rem 0;

  .btn-close{
      color: ${colorVariables.grisOscuro}!important;;
      &:hover{
        color: ${colorVariables.rosa}!important;;
      }
  }
}
.modal-body{
  padding:1rem 2rem;
}
.modal-footer{
border-top:none;
padding: 0 2rem 1rem;
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
