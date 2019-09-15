import React from 'react';

import './todo-search.css';

class TodoSearch extends React.Component {

  state = {
    query: ''
  };

  onChangeValue = ({target}) => {
    this.setState( {
      query: target.value
    });
    this.props.onSearchChange(target.value);
  };

  render() {
    return (
      <div className="todo-search">
        <input
          className="form-control"
          type="text"
          placeholder="search"
          onChange={this.onChangeValue}
          value={ this.state.query }
        />
      </div>
    )
  }
}

export default TodoSearch;