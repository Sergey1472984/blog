import Component from "../Component.js";
import Post from "../Post/Post.js";

export default class PostsList extends Component {
  constructor(onClick, title, className = "sort-button") {
    super(className, "button");
    this.$element.addEventListener("click", onClick);
    this.$element.textContent = title
  }
}