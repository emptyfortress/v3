import { createRouter, createWebHistory } from 'vue-router'
import photoApp from './photoApp.vue'

export const router = createRouter({
	history: createWebHistory(),

	routes: [ 
		{
			path: '/',
			name: 'root',
			component: photoApp
		},
	]
})

