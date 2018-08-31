import { createStore } from 'redux'
import root_reducer    from './modules/todoapp'
import { add_todo, toggle_todo, set_visibility_filter, FILTER_TYPES } from './modules/todoapp'

const store = createStore(root_reducer)

console.log(store.getState())

const unsubscribe = store.subscribe(() => console.log(store.getState()))

store.dispatch(add_todo('foo'))
store.dispatch(add_todo('bar'))
store.dispatch(toggle_todo(0))
store.dispatch(toggle_todo(1))
store.dispatch(set_visibility_filter(FILTER_TYPES.SHOW_ACTIVE))

unsubscribe()
