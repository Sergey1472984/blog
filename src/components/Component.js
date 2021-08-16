export default class Component {
  constructor(selector) {
    this.selector = selector;
    this.$element = document.querySelector(selector);
  }
}
