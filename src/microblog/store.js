import {reactive} from 'vue'
import { testPosts } from './posts'

class Store {
	constructor() {
		this.state = reactive({
			posts: testPosts,
		})
	}
}

export const store = new Store()
