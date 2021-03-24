import {reactive} from 'vue'
import { testPosts } from './posts'

class Store {
	constructor() {
		this.state = reactive({
			posts: testPosts,
			currentTag: null,
		})
	}

	setHashtag (tag) {
		this.state.currentTag = tag
	}

	incrementLike (post) {
		const Post = this.state.posts.find( e => e.id === post.id)
		Post.likes += 1
	}

}
export const store = new Store()
