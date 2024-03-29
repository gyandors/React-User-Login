import React from 'react';

export default function Input(props) {
  return (
    <input
      type={props.type}
      id={props.id}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
    />
  );
}
