import React, { useCallback, useEffect, useMemo } from 'react';
import clsx from 'clsx';
import { v4 as uuidV4 } from 'uuid';
import { createUseStyles } from 'react-jss';
import { useSearchParams } from 'react-router-dom';
import { FieldValues, useForm } from 'react-hook-form';

import DateField from 'common/components/form/DateField';
import InputField from 'common/components/form/InputField';
import useTodosState from 'hooks/useTodosState';

import { Todo } from '../types';

const useStyles = createUseStyles({
  container: {
    maxWidth: 600,
    padding: 16,
    margin: 16,
    backgroundColor: 'white',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    borderRadius: 2,
    display: 'flex',
    flexDirection: 'column',
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: 12,
  },
  addButton: {
    alignSelf: 'flex-end',
    width: 100,
    backgroundColor: '#44c767',
    borderRadius: 28,
    border: '1px solid #18ab29',
    cursor: 'pointer',
    color: '#ffffff',
    fontSize: 14,
    padding: '8px 8px',
    textTransform: 'uppercase',
    textDecoration: 'none',
    textShadow: '0px 1px 0px #2f6627',

    '&:hover': {
      backgroundColor: '#5cbf2a',
    },
  },
  cancelButton: {
    backgroundColor: 'lightcoral',
    border: '1px solid crimson',
    '&:hover': {
      backgroundColor: 'crimson',
    },
  },
});

const getDefaultValues = () =>
  ({
    completed: false,
    id: uuidV4(),
    dueDate: undefined,
  } as FieldValues);

const TodoForm = () => {
  const styles = useStyles();
  const [searchParams, setUrlParams] = useSearchParams();
  const { control, reset, handleSubmit } = useForm({
    defaultValues: getDefaultValues(),
  });

  const { getTodoById, updateTodo, addTodo } = useTodosState();

  const editableItemId = useMemo(
    () => searchParams.get('edit'),
    [searchParams],
  );

  const editableTodo = useMemo(
    () => editableItemId && getTodoById(editableItemId),
    [editableItemId, getTodoById],
  );

  const handleResetForm = useCallback(() => {
    if (editableTodo) {
      reset(editableTodo);

      return;
    }

    reset(getDefaultValues());
  }, [editableTodo, reset]);

  const handleCancelEdit = useCallback(() => {
    searchParams.delete('edit');
    setUrlParams(searchParams);
    reset(getDefaultValues());
  }, [reset, searchParams, setUrlParams]);

  const onSubmit = useCallback(
    (data: FieldValues) => {
      if (editableItemId) {
        updateTodo(data as Todo);
      } else {
        addTodo(data as Todo);
      }

      handleCancelEdit();
    },
    [addTodo, editableItemId, updateTodo, handleCancelEdit],
  );

  useEffect(() => {
    handleResetForm();
  }, [handleResetForm]);

  return (
    <div className={styles.container}>
      <InputField name="title" control={control} placeholder="Title" />

      <hr />

      <InputField
        multiple
        name="description"
        control={control}
        placeholder="Type, what you want To Do..."
      />

      <hr />

      <DateField name="dueDate" label="Due Date" control={control} />

      <div className={styles.buttonsContainer}>
        <button className={styles.addButton} onClick={handleSubmit(onSubmit)}>
          {editableItemId ? 'Save' : 'Add'}
        </button>

        {!!editableItemId && (
          <button
            className={clsx(styles.addButton, styles.cancelButton)}
            onClick={handleCancelEdit}
          >
            CANCEL
          </button>
        )}
      </div>
    </div>
  );
};

export default TodoForm;
