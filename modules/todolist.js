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

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [ ...state.todos, { text: action.text, completed: false } ]

    case TOGGLE_TODO:
      return state.map((todo, index) => {
        return index === action.index ? Object.assign({}, todo, {completed: !todo.completed}) : todo
      })

    default:
      return state
  }
}

function visibility(state = FILTER_TYPES.SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;

    default:
      return state
  }
}

function todolist(state = {}, action) {
  return {
    todos: todos(state.todos, action);
    visibility: visibility(state.visibility, action);
  }
}
