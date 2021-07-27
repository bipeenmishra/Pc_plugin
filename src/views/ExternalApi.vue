<template>
  <div>
    <button @click="callApi">Call</button>
    <p>{{ apiMessage}}</p>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Api",
  data() {
    return {
      apiMessage:"",
      executed: false
    };
  },
  methods: {
    async callApi() {
        const token = await this.$auth.getTokenSilently();
        try {
          const {data} = await axios.get('https://datasets-dev.pricecypher.com/api/datasets/1000/business_cells/all/transactions',
            {
              headers: {
                Authorization: `Bearer ${token}`,
              }
            });
          this.apiMessage=data;
          this.executed=true;
        } catch (e) {
        this.apiMessage = `Error: the server responded with '${e.response.status}: ${e.response.statusText}'`;
        }
      }
    }
  };
</script>