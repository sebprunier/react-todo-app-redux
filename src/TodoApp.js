import React, { Component } from 'react';

import TodoForm from './TodoForm'
import TodoStats from './TodoStats'
import TodoFilters from './TodoFilters'
import TodoList from './TodoList'
import GeoPosition from './GeoPosition'

import { connect } from 'react-redux'

import {loadTodos} from './actions/todos'

class TodoApp extends Component {

  constructor(props) {
    super(props)
    /*
    this.state = {
      todos: [],
      filters: {
        showNew: true,
        showInProgress: true,
        showDone: false
      }
    }
    */
    // this.handleNewTodo = this.handleNewTodo.bind(this)
    // this.handleFilterChange = this.handleFilterChange.bind(this)
    // this.props.store.subscribe(() => this.forceUpdate())
  }

  componentDidMount() {
    const todos = [
      { id: 1, title: 'Titre du Todo 1', description: 'Description du Todo 1', status: 'NEW'},
      { id: 2, title: 'Titre du Todo 2', description: 'Description du Todo 2', status: 'IN_PROGRESS'},
      { id: 3, title: 'Titre du Todo 3', description: 'Description du Todo 3', status: 'NEW'},
      { id: 4, title: 'Titre du Todo 4', description: 'Description du Todo 4', status: 'DONE'}
    ]

    setTimeout(() => this.props.dispatch(loadTodos(todos)), 1000)
  }

  /*
  handleNewTodo(todo) {
    this.setState({
      todos: [Object.assign(todo, {id: this.state.todos.length + 1}), ...this.state.todos]
    })
  }

  handleFilterChange(filter) {
    this.setState({
      filters: Object.assign(
        this.state.filters,
        filter
      )
    })
  }
  */

  render() {
    const filters = this.props.filters
    const filteredTodos = this.props.todos.filter(t => {
      return (t.status === "NEW" && filters.showNew)
          || (t.status === "IN_PROGRESS" && filters.showInProgress)
          || (t.status === "DONE" && filters.showDone)
    })

    return (
      <div className="row">
        <div className="col s4">
          {/*
          <div>
            <GeoPosition />
          </div>
          */}
          <div>
            <h3>Nouveau</h3>
            <TodoForm />
          </div>
          <div>
            <h3>Stats</h3>
            <TodoStats todos={filteredTodos} />
          </div>
        </div>
        <div className="col s8">
          <div>
            <h3>Filtres</h3>
            <TodoFilters filters={this.props.filters} />
          </div>
          <div>
            <h3>Liste des TODOs</h3>

            <TodoList todos={filteredTodos} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    filters: state.filters
  }
}

export default connect(mapStateToProps)(TodoApp);
