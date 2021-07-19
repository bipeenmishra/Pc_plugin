<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <!-- Check that the SDK client is not currently loading before accessing is methods -->
    <div v-if="!$auth.state.loading">
      <!-- show login when not authenticated -->
      <button v-if="!$auth.state.isAuthenticated" @click="login">Login</button>
      <!-- show logout when authenticated -->
      <button v-if="$auth.state.isAuthenticated" @click="logout">Logout</button>
    </div>
  </div>
</template>


<script>
import HelloWorld from './components/HelloWorld.vue'
import { Auth0Plugin, authGuard } from "@marketredesign/auth0-spa-vue";
Vue.use(Auth0Plugin, {
  domain: 'The Auth0 login domain',
  clientId: 'Auth0 client ID for this application',
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : 'default redirect'
    );
  }
});


export default {
  name: 'App',
  components: {
    HelloWorld,
    
  },methods: {
    // Log the user in
    login() {
      
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  }
};
</script>




<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>