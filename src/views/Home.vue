<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/PC Logo white bg.jpg" style="width:250px;height:40px" />
    <HelloWorld msg="Welcome to Your PriceCyper Plugin" />

    <!-- Check that the SDK client is not currently loading before accessing is methods -->
    <div v-if="!$auth.state.loading">
      <!-- show login when not authenticated -->
      <button v-if="!$auth.state.isAuthenticated" @click="login">Login</button>
      <!-- show logout when authenticated -->
      <button v-if="$auth.state.isAuthenticated" @click="logout">Logout</button>
    </div>
  </div>
</template>

// .. imports removed for brevity
<script>
import HelloWorld from '../components/HelloWorld.vue';
export default {
  name: "home",
  components: {
    HelloWorld
  },
  methods: {
    // Log the user in
    login() {
  this.$auth.loginWithRedirect();
},

    logout() {
  this.$auth.logout({
    returnTo: window.location.origin
  });

  }
}
}
</script>