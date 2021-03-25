import { createRouter, createWebHistory } from 'vue-router'
import Hello from './Hello.vue'
import Posts from './Posts.vue'
import Post from './Post.vue'

export const router = createRouter({
	history: createWebHistory(),

	routes: [ 
		{
			path: '/hello',
			name: 'hello',
			component: Hello
		},
		{
			path: '/posts',
			name: 'posts',
			component: Posts,
			children: [
				{
					path: ':id',
					name: 'post',
					component: Post
				}
			]
		},
	]
})

