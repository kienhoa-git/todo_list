import html from "../core.js";
import { connect } from "../store.js";
const connected = connect();
function header() {
  return html`
    <header class="header">
      <h1>todos</h1>
      <input
        onkeyup="event.keyCode === 13 && dispatch('add', this.value.trim())"
        class="new-todo"
        placeholder="What needs to be done?"
        autofocus
      />
    </header>
  `;
}
export default connected(header);
