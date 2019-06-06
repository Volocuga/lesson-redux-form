import React, { Component } from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import { addFields, customInput, customSelect } from "../FormFields";
import { validate, matchingPassword, asyncValidate } from "./validation";

class RegistrationForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="firstName"
          component={customInput}
          type="text"
          label="firstName"
        />
        <Field
          name="surname"
          component={customInput}
          type="text"
          label="surname"
        />
        <Field
          name="nickName"
          component={customInput}
          type="text"
          label="nickName"
        />
        <Field
          name="sign-up"
          component={customInput}
          type="checkbox"
          label="SignUp"
        />
        <Field
          name="password"
          component={customInput}
          type="text"
          label="Password"
        />
        <Field
          name="confirmPassword"
          component={customInput}
          type="text"
          label="Confirm Password"
          validate={matchingPassword}
        />
        <FieldArray name="fieldsArray" component={addFields} />
        <Field name="type" component={customSelect} label="Select type" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: "registration",
  validate,
  asyncValidate,
  asyncBlurField: ["password"]
})(RegistrationForm);
