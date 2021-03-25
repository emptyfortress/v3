import { createApp } from 'vue'
// import App from './composition/App.vue'
// import App from './microblog/App.vue'
// import App from './router/App.vue'
// import { router } from './router/router'
import App from './vuex/App.vue'
import { store } from './vuex/store'

const app = createApp(App)
app.use(store)
app.mount('#app')
