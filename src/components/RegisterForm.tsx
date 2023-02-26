const RegisterForm = (): JSX.Element => {
  return (
    <>
      <h2 className="register__header">Register</h2>
      <div className="register__form">
        <label htmlFor="username">User name</label>
        <input className="form__username" type="text" id="username" />
        <label htmlFor="password">Password</label>
        <input className="form__password" type="password" id="password" />
        <button type="submit">Submit</button>
      </div>
    </>
  );
};

export default RegisterForm;
