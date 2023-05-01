import React, { FC } from 'react';
import { Control, useController } from 'react-hook-form';

interface InputFieldProps {
  name: string;
  rules?: any;
  control: Control;
  multiple?: boolean;
  placeholder: string;
}

const InputField: FC<InputFieldProps> = ({
  name,
  rules,
  control,
  multiple,
  placeholder,
}) => {
  const { field } = useController({ name, control, rules, defaultValue: '' });

  return (
    <input
      {...field}
      type="text"
      multiple={multiple}
      placeholder={placeholder}
    />
  );
};

export default InputField;
