import { createSelector } from 'reselect';

// const getVisibilityFilter = (state) => state.visibilityFilter
// const getTodos = (state) => state.todos
const getAbm = (state) => state.abm;

export const makeGetText = () => {
  let oldText = undefined;
  return createSelector(
    [ getAbm ],
    (abm) => {
      debugger;
      if (oldText === abm.text) {
        return oldText;
      } else {
        oldText = abm.text;
        return abm.text;
      }
    }
  )
}

// const makeGetVisibleTodos = () => {
//   let oldText = undefined;
//   return createSelector(
//     [ getVisibilityFilter, getTodos ],
//     (visibilityFilter, todos) => {
//       switch (visibilityFilter) {
//         case 'SHOW_COMPLETED':
//           return todos.filter(todo => todo.completed)
//         case 'SHOW_ACTIVE':
//           return todos.filter(todo => !todo.completed)
//         default:
//           return todos
//       }
//     }
//   )
// }
//
// export default makeGetVisibleTodos
