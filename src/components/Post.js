export default class Post {
  constructor(post) {
    this._post = post;
  }
  render() {
    return `<div class="post">
            <div>${this._post.title}</div>
            <div>${this._post.body}</div>
        <div>`;
  }
}
