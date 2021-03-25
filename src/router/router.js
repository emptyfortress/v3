import { createRouter, createWebHistory } from 'vue-router'
import Hello from './Hello.vue'
import Posts from './Posts.vue'

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
			component: Posts
		}
	]
})

