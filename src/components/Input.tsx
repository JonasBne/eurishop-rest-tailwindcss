/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import React from 'react';
import classNames from 'classnames';

interface InputProps {
  className?: string;
  id: string;
  type: string;
  name: string;
  placeholder?: string;
  register: (name: string) => void;
}

function Input({ className, id, type, name, placeholder, register }: InputProps) {
  return (
    <input
      className={classNames(
        className,
        'appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500',
      )}
      id={id}
      type={type}
      name={name}
      placeholder={placeholder}
      {...register(name)}
    />
  );
}

export default Input;
