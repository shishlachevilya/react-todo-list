import React from 'react';

import './todo-header.css';

const TodoHeader = ({ all, done }) => {
  return (
    <div className="todo-header">
      <h2>Todo list</h2>
      <h3>{ all } more to do, { done } done</h3>
    </div>
  )
};

export default TodoHeader;