import Post from "./Post.js";

export default class PostList extends Post {
    constructor(titles) {
        super("post");
        this._titles = titles;
        this.render();
        console.log(this._titles)
    }

    sortFunction(titles) {
        titles.sort((a, b) => {
            if (a > b) {
                return 1;
            }
            if (a < b) {
                return -1;
            }
            return 0;
        })
        return titles
    }
}