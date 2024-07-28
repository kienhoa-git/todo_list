import html from "../core.js";
import { connect } from "../store.js";
import Footer from "./Footer.js";
import header from "./Header.js";
import TodoList from "./TodoList.js";
function app({ todos }) {
  return html`
    <section class="todoapp">
      ${header()} ${todos.length > 0 && TodoList()}
      ${todos.length > 0 && Footer()}
    </section>
  `;
}
export default connect()(app);
