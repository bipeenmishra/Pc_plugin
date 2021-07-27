import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Auth0Plugin} from "@marketredesign/auth0-spa-vue";


Vue.use(Auth0Plugin, {
  domain: 'auth.marketredesign.com',
  clientId: 'QbDKFV5z3Dqs8x5mubBd5bSwVVj1zuE1',
  audience: 'https://api.pricecypher.com',
  scope:'read:datasets',
  redirectUri:'http://localhost:8080/',

  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : 'default redirect'
    );
  }
});


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
