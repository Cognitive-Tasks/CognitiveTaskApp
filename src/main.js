import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

import RowTableSessioni from './components/rowTableSessioni.vue'
import RowTableRisultati from './components/rowTableRisultati.vue'
import MainHeader from './components/mainHeader.vue'
import MainFooter from './components/mainFooter.vue'
import AdminHeader from './components/adminHeader.vue'

const app = createApp(App)

app.use(router)

app.component('row-table-sessioni', RowTableSessioni)
app.component('row-table-risultati', RowTableRisultati)
app.component('admin-header', AdminHeader)

app.component('main-header', MainHeader)
app.component('main-footer', MainFooter)


app.mount('#app')