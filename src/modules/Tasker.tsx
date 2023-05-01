import React from 'react';
import { createUseStyles } from 'react-jss';

import TodoForm from 'common/components/TodoForm';
import TodoList from 'common/components/TodoList';
import TodoFilter from 'common/components/TodoFilter';

const useStyles = createUseStyles({
  container: {
    maxWidth: 1200,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },

  title: {
    color: 'grey',
    textAlign: 'center',
    fontWeight: 500,
    textShadow: '0px 2px 3px rgba(255,255,255,0.5)',
  },
});

const Tasker = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Task List</h2>

      <TodoForm />

      <TodoFilter />

      <TodoList />
    </div>
  );
};

export default Tasker;
