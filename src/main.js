import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueNumberFormat from 'vue-number-format'
import VueSimpleAlert from "vue-simple-alert"
import Toasted from 'vue-toasted'
import loader from "vue-ui-preloader"
import VueDatePicker from '@mathieustan/vue-datepicker';
import '@mathieustan/vue-datepicker/dist/vue-datepicker.min.css';
import * as Sentry from "@sentry/vue";
import { BrowserTracing } from "@sentry/tracing";

import './assets/styles/main.css'

Vue.use(VueNumberFormat, { prefix: 'Rp ', decimal: ',', thousand: '.', precision: 0 })
Vue.use(VueSimpleAlert, { reverseButtons: true })
Vue.use(Toasted)
Vue.use(loader)
Vue.use(VueDatePicker);
Vue.config.productionTip = false

Sentry.init({
  Vue,
  dsn: "https://ad2a1e0e8a254df08d3f6195a41626ba@o1076959.ingest.sentry.io/6231385",
  integrations: [
    new BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracingOrigins: ["localhost:8080", "https://dash-ak.tripwe.id/", /^\//],
    }),
  ],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
