'use client';

import React from 'react';

/* eslint-disable-next-line */

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const { label, className, ...restProps } = props;

    return (
      <div>
        {label && <label className="form-label">{label}</label>}
        <input
          className={`form-control ${className}`}
          {...restProps}
          ref={ref}
        />
      </div>
    );
  }
);
Input.displayName = 'Input';
export default Input;
