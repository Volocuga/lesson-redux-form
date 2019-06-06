import React from "react";
import ReactJson from "react-json-view";
import { Field } from "redux-form";

export const customInput = ({ label, input, type, meta }) => (
  <div>
    <label>{label}</label>
    <input {...input} type={type} />
    {/*<ReactJson src={meta} />*/}
    {meta.error && meta.touched && <span>{meta.error}</span>}
  </div>
);

export const customSelect = ({ label, input }) => (
  <div>
    <label>{label}</label>
    <select {...input}>
      <option value="spaces">Spaces</option>
      <option value="tabs">Tabs</option>
    </select>
  </div>
);

export const addFields = ({ fields }) => (
  <>
    {fields.map((code, index) => (
      <div key={index}>
        <Field
          name={code}
          type="text"
          component={customInput}
          label={`arrayInput ${index + 1}`}
        />
        <button type="button" onClick={() => fields.remove(index)}>
          remove
        </button>
      </div>
    ))}
    <button type="button" onClick={() => fields.push()}>
      add new input
    </button>
  </>
);
