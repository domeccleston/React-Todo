import React from "react";
import "./app.css";
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import SearchForm from './components/TodoComponents/SearchForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
      todoText: "",
      searchText: ""
    };
  }

  addTodo = event => {
    event.preventDefault();
    this.setState(currentState => {
      return {
        todos: currentState.todos.concat({
          task: this.state.todoText,
          id: Date.now(),
          completed: false
        }),
        todoText: ""
      };
    });
    window.localStorage.setItem("todos", JSON.stringify(this.state.todos));
  };

  setTodo = event => {
    this.setState({
      todoText: event.target.value
    });
  };

  setSearchText = event => {
    this.setState({
      searchText: event.target.value
    });
  };

  checkTodo = (id, event) => {
    this.setState(currentState => {
      return {
        todos: currentState.todos.map(todo => {
          if (todo.id !== id) return todo;
          return {
            id: todo.id,
            task: todo.task,
            completed: todo.completed === true ? false : true
          };
        })
      };
    });
  };

  filterTodos = event => {
    event.preventDefault();
    this.setState(currentState => {
      return {
        todos: currentState.todos.filter(todo =>
          todo.task.includes(currentState.searchText)
        )
      };
    });
  };

  clearTodos = event => {
    event.preventDefault();
    this.setState(currentState => {
      return {
        todos: currentState.todos.filter(todo => !todo.completed)
      };
    });
  };

  render() {
    return (
      <div>
        <h2>Todo App</h2>
        <SearchForm setSearchText={this.setSearchText} filterTodos={this.filterTodos}/>
        <TodoForm setTodo={this.setTodo} addTodo={this.addTodo} clearTodos={this.clearTodos}/>
        <TodoList todos={this.state.todos} checkTodo={this.checkTodo}/>
      </div>
    );
  }
}

export default App;
