import React from "react";

export default class TodoForm extends React.Component {
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Enter Todos"
          onChange={event => this.props.setTodo(event)}
        />
        <button onClick={event => this.props.addTodo(event)}>Add</button>
        <button onClick={event => this.props.clearTodos(event)}>Clear Todos</button>
      </form>
    );
  }
}
