import RegisterFormStyled from "./RegisterFormStyled";

const RegisterForm = (): JSX.Element => {
  return (
    <RegisterFormStyled className="register" autoComplete="off" autoSave="">
      <h2 className="register__header">Register</h2>
      <div className="register__form">
        <label htmlFor="username">User name</label>
        <input
          className="form__username"
          type="text"
          id="username"
          aria-label="username"
        />
        <label htmlFor="password">Password</label>
        <input
          className="form__password"
          type="password"
          id="password"
          aria-label="password"
        />
        <button type="submit">Submit</button>
      </div>
    </RegisterFormStyled>
  );
};

export default RegisterForm;
