import React from 'react';
import { useSearchParams } from 'react-router-dom';

const TodoFilter = () => {
  const [searchParams, setUrlParams] = useSearchParams();

  const showAll = () => null;
  const showOverdue = () => null;
  const showComplete = () => null;
  const showUncompleted = () => null;

  return (
    <div className="nav">
      <ul className="nav-list">
        <li>
          <a href="#" className="nav-elem" onClick={showAll}>
            {' '}
            All{' '}
          </a>
        </li>
        <li>
          <a href="#" className="nav-elem" onClick={showOverdue}>
            {' '}
            Overdue{' '}
          </a>
        </li>
        <li>
          <a href="#" className="nav-elem" onClick={showComplete}>
            Completed
          </a>
        </li>
        <li>
          <a href="#" className="nav-elem" onClick={showUncompleted}>
            {' '}
            Uncompleted{' '}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TodoFilter;
