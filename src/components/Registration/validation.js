const validate = values => {
  const errors = {};

  if (!values.firstName) errors.firstName = "First name is required!";
  if (!values.surname) errors.surname = "First name is required!";
  if (!values.nickName) errors.nickName = "First name is required!";

  return errors;
};

const matchingPassword = (value, allValues) =>
  value !== allValues.password && "Password must match!";

const asyncValidate = async values => {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  await sleep(3000);
  if (values.password.length < 3) {
    return Promise.reject({ password: "Password less 3 charters" });
  }
};

export { validate, matchingPassword, asyncValidate };
