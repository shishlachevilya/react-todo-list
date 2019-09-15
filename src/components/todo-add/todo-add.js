import React from 'react';
import './todo-add.css';

class TodoAdd extends React.Component {

  state = {
    label: ''
  };

  onLabelChange = ({ target }) => {
    this.setState({
      label: target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAddItem(this.state.label);
    this.setState({
      label: ''
    });
  };

  render() {
    return (
      <form
        className="todo-add d-flex"
        onSubmit={ this.onSubmit }
      >
        <input
          type="text"
          className="form-control"
          placeholder="Enter text"
          value={this.state.label}
          onChange={ this.onLabelChange }
        />
        <button
          type="submit"
          className="btn btn-primary"
        >
          add new item
        </button>
      </form>
    );
  }
}

export default TodoAdd;