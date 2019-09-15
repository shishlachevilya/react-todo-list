import React from 'react';


class TodoPanelFilter extends React.Component {
  render() {
    return (
      <div className="btn-group">
        <button type="button" className="btn btn-primary active">all</button>

        <button type="button" className="btn btn-light">active</button>

        <button type="button" className="btn btn-light">done</button>
      </div>
    )
  }
}

export default TodoPanelFilter;