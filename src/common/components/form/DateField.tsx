import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { Control, useController } from 'react-hook-form';

interface DateFieldProps {
  name: string;
  label: string;
  control: Control;
}

const useStyles = createUseStyles({
  input: {
    width: 140,
    margin: 5,
    color: 'grey',
    border: 'none',
    outline: 'none',
    textAlign: 'center',
    borderBottom: '1px solid darkgray',
  },
  root: {
    color: 'grey',
    fontSize: '14px',
  },
  label: {
    marginRight: 8,
    marginLeft: 8,
  },
});

const DateField: FC<DateFieldProps> = ({ label, name, control }) => {
  const styles = useStyles();
  const { field } = useController({ name, control });

  return (
    <div className={styles.root}>
      <span className={styles.label}>{label}</span>

      <input type="date" {...field} className={styles.input} />
    </div>
  );
};

export default DateField;
