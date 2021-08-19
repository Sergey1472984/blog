import Component from "./Component.js";

export default class Post extends Component {
    constructor(post) {
        super("post");
        this._post = post;
        this.render();
    }
    render() {
        this.$element.innerHTML = `<div>${this._post.title}</div>`;
    }
}