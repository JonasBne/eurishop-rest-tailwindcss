/* eslint-disable react/require-default-props */
import React, { ReactElement } from 'react';
import classNames from 'classnames';

interface LabelProps {
  label: string;
  children: ReactElement;
  htmlFor: string;
  className?: string;
}

function Label({ label, children, htmlFor, className }: LabelProps) {
  return (
    <label
      className={classNames(
        className,
        'block uppercase tracking-wide text-gray-700 text-xs font-bold my-4 px-2 w-full md:text-base',
      )}
      htmlFor={htmlFor}
    >
      {label}
      {children}
    </label>
  );
}

export default Label;
