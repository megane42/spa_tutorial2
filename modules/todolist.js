// ============================================================
// constants

const FILTER_TYPES = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
}

// ============================================================
// actions

const ADD_TODO              = 'ADD_TODO'
const TOGGLE_TODO           = 'TOGGLE_TODO'
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

// ============================================================
// action_creators

function add_todo(text) {
  return {
    type: ADD_TODO,
    text: text,
  }
}

function toggle_todo(index) {
  return {
    type: TOGGLE_TODO,
    index: index,
  }
}

function set_visibility_filter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter: filter,
  }
}

// ============================================================
// reducers

const initial_state = {
  todos: [],
  visibility: FILTER_TYPES.SHOW_ALL
}

function todolist(state = initial_state, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({},
                           state,
                           { visibility: action.filter })

    case ADD_TODO:
      let new_todo = { text: action.text, completed: false }
      return Object.assign({},
                           state,
                           { todos: [ ...state.todos, new_todo ] })

    case TOGGLE_TODO:
      let new_todos = state.todos.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {completed: !todo.completed})
        } else {
          return todo
        }
      })
      return Object.assign({},
                           state,
                           { todos: new_todos })

    default:
      return state
  }
}
