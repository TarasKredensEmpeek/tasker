import React, { FC } from 'react';
import { Control, useController } from 'react-hook-form';

interface DateFieldProps {
  name: string;
  label: string;
  control: Control;
}

const DateField: FC<DateFieldProps> = ({ label, name, control }) => {
  const { field } = useController({ name, control });

  return (
    <div className="dead-line-date">
      <span>{label}</span>

      <input type="date" {...field} style={{ color: 'grey' }} />
    </div>
  );
};

export default DateField;
