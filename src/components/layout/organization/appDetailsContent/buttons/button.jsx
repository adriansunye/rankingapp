import { AddAppStyled } from "./buttonStyles";

const addApp = (props) => {
  return (
    <>
      <AddAppStyled>
        <img src={props.image} alt="Plus"></img>
      </AddAppStyled>
    </>
  );
};

export default addApp;
