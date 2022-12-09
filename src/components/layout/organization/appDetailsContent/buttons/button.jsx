import { AddAppStyled } from "./buttonStyles";

const addApp = (props) => {
  return (
    <>
      <AddAppStyled onClick={() => props.handleClick()}>
        <img src={props.image} alt="Plus"></img>
      </AddAppStyled>
    </>
  );
};

export default addApp;
