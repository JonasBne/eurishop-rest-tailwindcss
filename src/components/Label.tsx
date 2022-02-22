/* eslint-disable react/require-default-props */
import React, { ReactNode } from 'react';
import classNames from 'classnames';

interface LabelProps {
  input: ReactNode;
  htmlFor: string;
  className?: string;
}

function Label({ input, htmlFor, className }: LabelProps) {
  return (
    <label
      className={classNames(
        className,
        'block uppercase tracking-wide text-gray-700 text-xs font-bold my-4 px-2 w-full md:text-base',
      )}
      htmlFor={htmlFor}
    >
      {input}
    </label>
  );
}

export default Label;
