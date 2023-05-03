import { createUseStyles } from 'react-jss';

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

  containerOverdue: {
    backgroundColor: '#ef535045',
  },

  containerCompleted: {
    backgroundColor: '#4caf5045',
  },

  containerEditable: {
    backgroundColor: '#42a5f545',
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
  completedText: {
    textDecorationLine: 'line-through',
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
    fontWeight: 500,
  },
  dueDateOverdue: { color: 'crimson' },
  completedAt: { color: 'gray', fontSize: '13px', fontWeight: 500 },
});

export default useStyles;
