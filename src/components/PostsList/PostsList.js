import Component from "../Component.js";

export default class extends Component{
    constructor(className = "posts-list") {
        super (className);
    }
    render() {
          this.$element.innerHTML = ` <div></div>`;
          return this.$element;
       
    }
}