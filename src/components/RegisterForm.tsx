import { useState } from "react";
import RegisterFormStyled from "./RegisterFormStyled";
import { RegisterData } from "../types";
import useUsers from "../hooks/useUsers";

const RegisterForm = (): JSX.Element => {
  const { registerUser } = useUsers();

  const initialRegisterState: RegisterData = {
    username: "",
    password: "",
  };

  let userFormData = new FormData();

  const [registerData, setRegisterData] = useState(initialRegisterState);

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    userFormData.append("username", registerData.username);
    userFormData.append("password", registerData.password);

    registerUser(userFormData);

    setRegisterData({ ...initialRegisterState });
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({ ...registerData, [event.target.id]: event.target.value });
  };

  return (
    <RegisterFormStyled
      className="register"
      autoComplete="off"
      onSubmit={onSubmitHandler}
    >
      <h2 className="register__header">Register</h2>
      <div className="register__form">
        <label htmlFor="username">User name</label>
        <input
          className="form__username"
          type="text"
          id="username"
          aria-label="username"
          onChange={onChangeHandler}
          value={registerData.username}
        />
        <label htmlFor="password">Password</label>
        <input
          className="form__password"
          type="password"
          id="password"
          aria-label="password"
          onChange={onChangeHandler}
          value={registerData.password}
        />
        <button type="submit">Submit</button>
      </div>
    </RegisterFormStyled>
  );
};

export default RegisterForm;
