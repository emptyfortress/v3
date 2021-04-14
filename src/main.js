import { createApp } from 'vue'
// import App from './composition/App.vue'
// import App from './microblog/App.vue'
// import App from './router/App.vue'
// import { router } from './router/router'
import App from './photos/App.vue'
import { store } from './photos/store'
import { router } from './photos/router'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
