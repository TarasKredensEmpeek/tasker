import React from 'react';
import { useForm } from 'react-hook-form';

// import IncorrectTitle from '@components/IncorrectTitle';

import DateField from 'components/form/DateField';
import InputField from 'components/form/InputField';

const InputBox = () => {
  const form = useForm({});

  const handleTodoSave = () => null;

  const handleTodoAdd = () => null;

  const handleCancelEdit = () => null;

  return (
    <div className="todo-editor">
      {/*{!state.isTitleCorrect ? (*/}
      {/*  <IncorrectTitle onCloseAlert={closeAlert} onConfirmAlert={closeAlert} />*/}
      {/*) : null}*/}

      <InputField name="title" control={form.control} placeholder="Title" />

      <hr />

      <InputField
        multiple
        name="description"
        control={form.control}
        placeholder="Type, what you want To Do..."
      />

      <hr />

      <DateField name="dueDate" label="Due Date" control={form.control} />

      <button className="add-button" id="add-btn" onClick={handleTodoAdd}>
        Add
      </button>

      <div className="editor-control" id="editorCtrl">
        <button className="save-button" id="save-btn" onClick={handleTodoSave}>
          SAVE
        </button>
        <button className="save-button" id="save-btn" onClick={handleTodoSave}>
          SAVE
        </button>
        <button
          className="cancel-button"
          id="cancel-btn"
          onClick={handleCancelEdit}
        >
          CANCEL
        </button>
      </div>
    </div>
  );
};

export default InputBox;
