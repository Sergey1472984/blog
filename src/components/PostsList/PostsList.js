import Component from "../Component.js";
import Post from "../Post/Post.js";
import Button from "../Button/Button.js"

export default class PostsList extends Component {
    constructor(posts = [], className = "posts-list") {
        super(className);
        this.posts = posts;
        this.render();

    }

    handlerSortByTitle() {
        this.posts.sort((a, b) => a.title > b.title ? 1 : -1);
        this.clear()
        this.render()
    }

    handleSortByContent() {
        this.posts.sort((a, b) => {

            return b.title.length - a.title.length;
        })

        this.clear()
        this.render()
    }

    clear() {
        this.$element.innerHTML = ''
    }

    render() {
        const $buttonTitleElement = new Button(this.handlerSortByTitle.bind(this), "По названию").$element;
        const $buttonContentElement = new Button(this.handleSortByContent.bind(this), "По содержанию").$element;
        this.$element.appendChild($buttonTitleElement);
        this.$element.appendChild($buttonContentElement);

        this.posts.forEach((post) => {
            this.$element.appendChild(
                new Post(post).$element
            );
        });
    }
}