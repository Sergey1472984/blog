export default class Component {
  constructor(className) {
    this.className = className;
    this.$element = document.createElement("div");
    this.$element.classList.add(className);
  }
}
