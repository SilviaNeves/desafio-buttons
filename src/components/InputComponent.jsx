import React from 'react';

const InputComponent = ({ value, onChange }) => {
  return (
    <input  
    type="text"
    placeholder='Apresente-se'
    value={value}
    onChange={onChange}
    />
  );
};

export default InputComponent;
