import React from 'react';

import './todo-list-item.css';


const TodoListItem = ({
                        done,
                        label,
                        important,
                        onDeleted,
                        onToggleDone,
                        onToggleImportant
                      }) => {

  let classNames = 'todo-list-item';

  if(important) {
    classNames += ' important';
  }

  if(done) {
    classNames += ' done';
  }

  return (
    <div
      className={ classNames }
    >
      <span
        onClick={ onToggleDone }
      >
        { label }
      </span>

      <button
        type="button"
        className="btn btn-outline-success btn-sm float-right"
        onClick={ onToggleImportant }
      >
        <i className="fa fa-exclamation"/>
      </button>

      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-right"
        onClick={ onDeleted }
      >
        <i className="fa fa-trash-o"/>
      </button>

    </div>

  )
}

export default TodoListItem;