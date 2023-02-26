import styled from "styled-components";

const RegisterFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  background-color: greenyellow;
  min-height: 500px;
  width: 300px;
  padding: 20px;
  justify-content: space-around;
  align-items: center;
  margin: auto;

  .register__form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  input {
    padding: 15px;
  }
`;

export default RegisterFormStyled;
