import React, { FC, TextareaHTMLAttributes } from 'react';
import { createUseStyles } from 'react-jss';
import { Control, useController, UseControllerProps } from 'react-hook-form';

const useStyles = createUseStyles({
  root: {
    width: 500,
    resize: 'none',
    margin: 5,
    fontSize: 14,
    border: 'none',
    fontWeight: 300,
    borderBottom: '1px solid darkgray',
    paddingBottom: 4,
    '&:focus': { outline: 'none' },
  },
});

interface InputFieldProps extends TextareaHTMLAttributes<HTMLInputElement> {
  name: string;
  rules?: UseControllerProps['rules'];
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
  ...props
}) => {
  const styles = useStyles();
  const { field } = useController({ name, control, rules, defaultValue: '' });

  return (
    <input
      {...field}
      type="text"
      multiple={multiple}
      placeholder={placeholder}
      className={styles.root}
      {...props}
    />
  );
};

export default InputField;
