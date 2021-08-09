<template>
  <div>
    <button  @click="callApi">Call</button>
    <p>{{transactions}}</p>
   </div>
   
</template>
 <script>
import axios from "axios";

export default {
  name: "external-api",
  data() {
    return {
      transactions:""
    };
  },
  methods: {
    async callApi() {     
      // Get the access token from the auth wrapper
      const token = await this.$auth.getTokenSilently();

      // Use Axios to make a call to the API
      const { data } = await axios.get("https://datasets-dev.pricecypher.com/api/datasets/1000/business_cells/all/transactions", {
        headers: {
          Authorization: `Bearer ${token}`    // send the access token through the 'Authorization' header
        }
      });

      this.transactions = data;
       
    }

  }
};
</script>
