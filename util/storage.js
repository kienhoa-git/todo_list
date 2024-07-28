const STORANGE_KEY = "TODOS";
export default {
  get() {
    return JSON.parse(localStorage.getItem(STORANGE_KEY)) || [];
  },
  set(todos) {
    localStorage.setItem(STORANGE_KEY, JSON.stringify(todos));
  },
};
