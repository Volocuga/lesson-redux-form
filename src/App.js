import React, { Component } from "react";
import RegistrationForm from "./components/Registration";
import { SubmissionError } from "redux-form";

class App extends Component {
  state = { initialValues: { name: "Oleh", "sign-up": true, type: "tabs" } };

  _onSubmit = values => {
    if (["oleh"].includes(values.nickName)) {
      throw new SubmissionError({ nickName: "This nickname already exist" });
    }
    console.log(values);
  };

  render() {
    const { initialValues } = this.state;

    return (
      <div>
        <h1>React Form</h1>
        <RegistrationForm
          onSubmit={this._onSubmit}
          initialValues={initialValues}
        />
      </div>
    );
  }
}

export default App;
