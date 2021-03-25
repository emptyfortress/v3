import { createStore } from 'vuex'
import { testPosts } from '../microblog/posts'

const delay = (() => new Promise(res =>
	setTimeout(res, 1000)
))

export const store = createStore({
	state() {
		return {
			currentPost: null
		}
	},
	mutations: {
		setPost(state,payload) {
			state.currentPost = payload
		}
	},
	actions: {
		async fetchData(ctx, payload) {
			await delay()
			const post = testPosts.find((x) => x.id === payload)
			ctx.commit('setPost', post)
		}

	}
})
