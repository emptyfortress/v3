import {reactive, computed} from 'vue'
import { testPosts } from './posts'

class Store {
	constructor() {
		this.state = reactive({
			posts: testPosts,
			currentTag: null,
		})
	}

	get filteredPosts () {
		return computed(() => {
			if (!this.state.currentTag) {
				return this.state.posts
			}
			return this.state.posts.filter(post => post.hashtags.includes(this.state.currentTag)) 
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
