import React, { FC, useMemo } from 'react';
import clsx from 'clsx';
import { createUseStyles } from 'react-jss';
import { useSearchParams } from 'react-router-dom';

import { Todo } from '../types';
import { useTodosState } from '../../hooks';

interface TodoItemProps {
  id: string;
  todoItem: Todo;
}

const useStyles = createUseStyles({
  container: {
    width: 600,
    padding: 10,
    wordWrap: 'break-word',
    whiteSpace: 'pre-wrap',
    transition: 'box-shadow .3s',
    borderRadius: 2,
    marginBottom: 10,
    backgroundColor: '#eaeaea',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    '&:hover': {
      boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    },
  },
  controls: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  edit: {
    fontSize: 20,
    color: 'darkgray',
    cursor: 'pointer',
    marginRight: 6,
    transition: 'all 0.3s',
    '&:hover': { color: 'black' },
  },
  delete: {
    fontSize: 23,
    color: 'darkgray',
    cursor: 'pointer',
    transition: 'all 0.5s',
    '&:hover': { color: 'black' },
  },
  completeInput: {
    color: 'darkgray',
    textDecorationLine: 'line-through',
    width: 20,
    height: 20,
  },
  title: {
    color: 'black',
    fontSize: 18,
    paddingTop: 8,
    marginLeft: 10,
    fontWeight: 700,
  },
  description: {
    color: 'darkgray',
    marginLeft: 10,
  },
  dates: {
    margin: '20px 5px 0 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dueDate: {
    color: 'lightcoral',
    fontSize: '13px',
  },
  dueDateOverdue: { color: 'crimson' },
  completedAt: { color: 'gray', fontSize: '13px' },
});

const TodoItem: FC<TodoItemProps> = ({ id, todoItem }) => {
  const { removeTodo, updateTodo } = useTodosState();
  const [searchParams, setSearchParams] = useSearchParams();

  const { dueDate, completedAt, title, completed, description } = todoItem;

  const styles = useStyles();

  const isOverdue = useMemo(
    () => Date.parse(dueDate) < Date.now() && !completed,
    [completed, dueDate],
  );

  const st = useMemo(
    () =>
      Date.parse(dueDate) < Date.now() && !completedAt
        ? { backgroundColor: 'rgba(220,20,60,0.25)' }
        : undefined,
    [dueDate, completedAt],
  );

  const onEdit = () => {
    searchParams.set('edit', id);
    setSearchParams(searchParams);
  };

  const onDelete = () => {
    const edit = searchParams.get('edit');
    const isEqual = edit === id;
    removeTodo(id);

    if (isEqual) {
      searchParams.delete('edit');
      setSearchParams(searchParams);
    }
  };

  const onComplete = () => {
    const completed = !todoItem.completed;
    const completedAt = completed ? new Date().toISOString() : undefined;

    updateTodo({ ...todoItem, completed, completedAt });
  };

  return (
    <div className={styles.container} style={st}>
      <div className={styles.controls}>
        <input
          id="check"
          type="checkbox"
          onChange={onComplete}
          name={title}
          checked={completed}
          title="Set as Complete?"
          className={styles.completeInput}
        />

        <span>
          <span className={styles.edit} onClick={onEdit} title="Edit">
            &#9998;
          </span>

          <span className={styles.delete} onClick={onDelete} title="Delete">
            ×
          </span>
        </span>
      </div>

      <span className={styles.title}>{title}</span>

      <p className={styles.description}>{description}</p>

      <div className={styles.dates}>
        {dueDate && (
          <span
            className={clsx(styles.dueDate, {
              [styles.dueDateOverdue]: isOverdue,
            })}
          >
            Deadline: {dueDate}
          </span>
        )}

        {completedAt && (
          <span className={styles.completedAt}>
            Task Completed: {completedAt}
          </span>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
