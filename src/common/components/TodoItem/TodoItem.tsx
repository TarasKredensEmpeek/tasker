import React, { FC, useMemo } from 'react';
import clsx from 'clsx';
import { DateTime } from 'luxon';
import { useSearchParams } from 'react-router-dom';

import { Todo } from 'common/types';
import { useTodosState } from 'hooks';

import useStyles from './useStyles';

interface TodoItemProps {
  id: string;
  todoItem: Todo;
}

const dateFormat = 'dd LLL yyyy';

const TodoItem: FC<TodoItemProps> = ({ id, todoItem }) => {
  const { removeTodo, updateTodo } = useTodosState();
  const [searchParams, setSearchParams] = useSearchParams();

  const { dueDate, completedAt, title, completed, description } = todoItem;

  const styles = useStyles();

  const isOverdue = useMemo(
    () => Date.parse(dueDate) < Date.now() && !completed,
    [completed, dueDate],
  );

  const isEditable = useMemo(
    () => searchParams.get('edit') === id,
    [id, searchParams],
  );

  const containerClasses = useMemo(
    () =>
      clsx(styles.container, {
        [styles.containerOverdue]: isOverdue,
        [styles.containerCompleted]: completed,
        [styles.containerEditable]: isEditable,
      }),
    [styles, isOverdue, completed, isEditable],
  );

  const dueDateFormatted = useMemo(
    () =>
      !!dueDate &&
      DateTime.fromISO(new Date(dueDate).toISOString()).toFormat(dateFormat),
    [dueDate],
  );

  const completedAtFormatted = useMemo(
    () => !!completedAt && DateTime.fromISO(completedAt).toFormat(dateFormat),
    [completedAt],
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
    <div className={containerClasses}>
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

      <span
        className={clsx(styles.title, { [styles.completedText]: completed })}
      >
        {title}
      </span>

      <p
        className={clsx(styles.description, {
          [styles.completedText]: completed,
        })}
      >
        {description}
      </p>

      <div className={styles.dates}>
        <span
          className={clsx(styles.dueDate, {
            [styles.dueDateOverdue]: isOverdue,
          })}
        >
          {dueDate && `Due Date: ${dueDateFormatted}`}
        </span>

        {completedAtFormatted && (
          <span className={styles.completedAt}>
            Task Completed: {completedAtFormatted}
          </span>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
