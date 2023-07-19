import React, { useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import { useSearchParams } from 'react-router-dom';
import clsx from 'clsx';

import { TodoTypes } from 'common/constants';

const filters = [
  {
    label: 'All',
    value: TodoTypes.all,
  },
  {
    label: 'Overdue',
    value: TodoTypes.overdue,
  },
  {
    label: 'Completed',
    value: TodoTypes.completed,
  },
  {
    label: 'Uncompleted',
    value: TodoTypes.uncompleted,
  },
];

const useStyles = createUseStyles({
  navigation: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  },
  item: {
    float: 'left',
    cursor: 'pointer',
    margin: 5,
  },
  itemActive: {
    fontWeight: 'bold',
  },
});

const TodoFilter = () => {
  const styles = useStyles();
  const [searchParams, setUrlParams] = useSearchParams();

  const currentFilter = useMemo(
    () => searchParams.get('filter') || String(TodoTypes.all),
    [searchParams],
  );

  const setFilter = (filter: TodoTypes) => {
    searchParams.set('filter', String(filter));
    setUrlParams(searchParams);
  };

  return (
    <ul className={styles.navigation}>
      {filters.map(filterParams => {
        const active = String(filterParams.value) === currentFilter;

        const setCurrentFilter = () => setFilter(filterParams.value);

        return (
          <li key={filterParams.label}>
            <span
              className={clsx(styles.item, { [styles.itemActive]: active })}
              onClick={setCurrentFilter}
            >
              {filterParams.label}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoFilter;
