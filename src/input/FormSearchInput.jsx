/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { BsSearch } from 'react-icons/bs';

const FormSearchInput = (props) => (
  <div className={`${props.className} form-group form-group-search`}>
    <label htmlFor={props.name}>
      {props.label}
    </label>
    <input
      type="search"
      name={props.name}
      id={props.name}
      value={props.value}
      onChange={props.onChange}
      readOnly={props.readOnly}
      onBlur={props.onBlur}
      disabled={props.disabled}
      onKeyPress={props.onKeyPress}
      onKeyDown={props.onKeyDown}
    />
    <BsSearch />
  </div>
);

export default FormSearchInput;
