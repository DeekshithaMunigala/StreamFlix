const checkValidData = (email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid)
    return "Please enter a valid email address or phone number.";
  if (!isPasswordValid) return "Your password must contain 8 characters.";

  return null;
};

export default checkValidData;
