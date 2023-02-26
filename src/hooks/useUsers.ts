const useUsers = () => {
  const apiUrl = process.env.REACT_APP_URL_API;
  const registerUserEndpoint = "register/";

  const registerUser = async (registerUserData: FormData) => {
    await fetch(`${apiUrl}${registerUserEndpoint}`, {
      method: "POST",
      body: registerUserData,
    });
  };

  return { registerUser };
};

export default useUsers;
