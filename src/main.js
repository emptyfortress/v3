import { createApp } from 'vue'
// import App from './composition/App.vue'
// import App from './microblog/App.vue'
import App from './router/App.vue'
import { router } from './router/router'

const app = createApp(App)
app.use(router)
app.mount('#app')
