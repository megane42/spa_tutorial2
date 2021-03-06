import { combineReducers } from 'redux'

// ============================================================
// constants

export const FILTER_TYPES = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
}

// ============================================================
// actions

const ADD_TODO              = 'myapp/todoapp/ADD_TODO'
const TOGGLE_TODO           = 'myapp/todoapp/TOGGLE_TODO'
const SET_VISIBILITY_FILTER = 'myapp/todoapp/SET_VISIBILITY_FILTER'

// ============================================================
// action_creators

export function add_todo(text) {
  return {
    type: ADD_TODO,
    text: text,
  }
}

export function toggle_todo(index) {
  return {
    type: TOGGLE_TODO,
    index: index,
  }
}

export function set_visibility_filter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter: filter,
  }
}

// ============================================================
// reducers

function todos_reducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [ ...state, { text: action.text, completed: false } ]

    case TOGGLE_TODO:
      return state.map((todo, index) => {
        return index === action.index ? Object.assign({}, todo, {completed: !todo.completed}) : todo
      })

    default:
      return state
  }
}

function visibility_reducer(state = FILTER_TYPES.SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;

    default:
      return state
  }
}

export default combineReducers({
  todos:      todos_reducer,
  visibility: visibility_reducer,
})
