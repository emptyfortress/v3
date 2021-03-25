import { createStore } from 'vuex'
import { albums } from './albums'

export const store = createStore({
	modules: {
		albums
	}
})

