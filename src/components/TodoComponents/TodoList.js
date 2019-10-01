import React from 'react';

export default class TodoForm extends React.Component {

    render() {
        return (
            <div className="todos-container">
            {this.props.todos.map(todo => (
              <>
                <h2
                  className={todo.completed ? "todo-checked" : "todo-unchecked"}
                  key={todo.id}
                  onClick={event => this.props.checkTodo(todo.id, event)}
                >
                  {todo.task}
                </h2>
              </>
            ))}
          </div>
        )
    }
}

