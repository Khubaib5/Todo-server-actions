import React from 'react';

interface InputProps {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
}

const Input = ({ name, type, value, placeholder }: InputProps) => {
  return (
    <>
      <input
        type={type}
        className='p-2 border-gray-200 border w-full md:w-auto md:max-w-xs'
        name={name}
        value={value}
        placeholder={placeholder}
      />
    </>
  );
}

export default Input;
