import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import routerAreaPersonale from './router/indexAreaPersonale'
import AppAreaPersonale from './AppAreaPersonale.vue'
import Session from './components/session.vue'
import Ris from './components/ris.vue'

const app = createApp(App)
const appAreaPersonale = createApp(AppAreaPersonale)

app.use(router)
appAreaPersonale.use(routerAreaPersonale)

appAreaPersonale.component('session', Session)
appAreaPersonale.component('ris', Ris)


app.mount('#app')
appAreaPersonale.mount('#appAreaPersonale')
