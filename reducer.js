import storage from "./util/storage.js";
const init = {
  todos: storage.get(),
  filter: "all",
  editIndex: null,
  filters: {
    all: () => true,
    active: (todo) => !todo.completed,
    completed: (todo) => todo.completed,
  },
};
const actions = {
  add({ todos }, title) {
    if (title) {
      todos.push({ title, completed: false });
      storage.set(todos);
    }
  },
  toggle({ todos }, index) {
    let todo = todos[index];
    todo.completed = !todo.completed;
  },
  toggleAll({ todos }) {
    todos.forEach((todo) => (todo.completed = !todo.completed));
    storage.set(todos);
  },
  destroy({ todos }, index) {
    todos.splice(index, 1);
    storage.set(todos);
  },
  switchFilter(state, filter) {
    state.filter = filter;
  },
  clearCompleted(state) {
    state.todos = state.todos.filter(state.filters.active);
    storage.set(todos);
  },
  startEdit(state, index) {
    state.editIndex = index;
  },
  endEdit(state, title) {
    if (state.editIndex !== null) {
      if (title.value) {
        state.todos[state.editIndex].title = title;
        storage.set(state.todos);
      } else this.destroy(state, state.editIndex);
      state.editIndex = null;
    }
  },
  cancelEdit(state) {
    state.editIndex = null;
  },
};
export default function reducer(state = init, action, args) {
  actions[action] && actions[action](state, args);
  return state;
}
