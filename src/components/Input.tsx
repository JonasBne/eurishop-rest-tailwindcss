/* eslint-disable react/require-default-props */
import React from 'react';
import classNames from 'classnames';

interface InputProps {
  className?: string;
  id: string;
  type: string;
  placeholder?: string;
  defaultValue?: any;
}

function Input({ className, id, type, placeholder, defaultValue }: InputProps) {
  return (
    <input
      className={classNames(
        className,
        'appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500',
      )}
      id={id}
      type={type}
      placeholder={placeholder}
      value={defaultValue}
    />
  );
}

export default Input;
