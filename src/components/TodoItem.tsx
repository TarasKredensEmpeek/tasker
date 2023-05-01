import React, { FC, useMemo } from 'react';
import { useRecoilValue } from 'recoil';

import { todoSelector } from 'selectors';

interface TodoItemProps {
  id: string;
}

const TodoItem: FC<TodoItemProps> = ({ id }) => {
  const { dueDate, completedAt, title, completed, description } =
    useRecoilValue(todoSelector(id));

  const styles = useMemo(
    () =>
      Date.parse(dueDate) < Date.now() && !completedAt
        ? { backgroundColor: 'rgba(220,20,60,0.25)' }
        : undefined,
    [dueDate, completedAt],
  );

  const onEdit = () => null;

  const onDelete = () => null;

  return (
    <div className="todo" style={styles}>
      <li>
        <span className="todo-btn-controls">
          <span className="edit-todo" onClick={onEdit} title="Edit">
            {' '}
            &#9998;{' '}
          </span>
          <span className="delete-todo" onClick={onDelete} title="Delete">
            {' '}
            ×{' '}
          </span>
        </span>

        <input
          id="check"
          className="todo-check"
          type="checkbox"
          // onChange={onChecked}
          name={title}
          checked={completed}
          title="Set as Complete?"
        />

        <span className="todo-title">{title}</span>

        <p
          className="todo-description"
          style={completed ? { color: 'grey' } : undefined}
        >
          {description}
        </p>

        <div className="todo-date">
          <span
            className="todo-deadLine-date"
            style={
              Date.parse(dueDate) < Date.now() && !completedAt
                ? { color: 'red' }
                : { color: 'crimson' }
            }
          >
            {' '}
            Deadline: {dueDate}{' '}
          </span>
          <span
            className="todo-finish-date"
            style={completed ? { color: 'black' } : { color: 'gray' }}
          >
            {' '}
            Task Completed: {completedAt}{' '}
          </span>
        </div>
      </li>
    </div>
  );
};

export default TodoItem;
