import React from 'react';
import TodoHeader from '../todo-header';
import TodoList from '../todo-list';
import TodoSearch from '../todo-search';
import TodoPanelFilter from '../todo-panel-filter';
import TodoAdd from '../todo-add';

import './todo-app.css';


class App extends React.Component {

  count = 100;

  state = {
    todoData: [
      { id: 1, label: "Drink coffee", important: false, done: false },
      { id: 2, label: "Make app", important: true, done: false },
      { id: 3, label: "Have lunch", important: false, done: false },
    ],
    query: ''
  };

  onDeletedItem = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((el) => el.id === id);
      const newData = [
        ...todoData.slice(0, index),
        ...todoData.slice(index + 1)
      ];

      return {
        todoData: newData
      }
    });
  };

  onAddItem = (newLabel) => {
    this.setState(({ todoData }) => {

      const newItem = {
        id: this.count++,
        label: newLabel,
        important: false,
        done: false
      };

      const newData = [
        ...todoData,
        newItem
      ];

      return {
        todoData: newData
      }
    });
  };

  onToggleProperty = (arr, id, propName) => {

    const index = arr.findIndex((el) => el.id === id);
    const oldItem = arr[index];

    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    const newData = [
      ...arr.slice(0, index),
      newItem,
      ...arr.slice(index + 1)
    ];

    return newData;
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.onToggleProperty(todoData, id, 'done')
      }
    });
  };

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.onToggleProperty(todoData, id, 'important')
      }
    });
  };

  onSearchChange = (query) => {
    this.setState({
      query: query
    });
  };

  searchItems = (arr, str) => {
    if(str === '') return arr;

    const filterArr = arr.filter((el) => el.label.toLowerCase().indexOf(str.toLowerCase()) !== -1);

    return filterArr;
  };

  render() {

    const { todoData, query } = this.state;

    const doneCount = this.state.todoData.filter((el) => el.done).length;
    const allCount = this.state.todoData.length - doneCount;

    const filterData = this.searchItems(todoData, query);

    return (
      <div className="todo-app">
        <TodoHeader all={ allCount } done={ doneCount }/>

        <div className="todo-line">
          <TodoSearch onSearchChange={ this.onSearchChange }/>

          <TodoPanelFilter/>
        </div>

        <TodoList
          todos={ filterData }
          onDeleted={ this.onDeletedItem }
          onToggleDone={ this.onToggleDone }
          onToggleImportant={ this.onToggleImportant }
        />

        <TodoAdd
          onAddItem={ this.onAddItem }
        />
      </div>
    )
  }
}

export default App;
