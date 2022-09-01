<template>
  <div>
    <b-card>
      <h1>Users Data</h1>
      <b-table striped hover :items="list"></b-table>
    </b-card>
  </div>
</template>

<script>
import DataService from "@/services/DataService";

export default {
  name: 'list-component',
  data() {
    return {
      list: []
    };
  },
  created() {
    return DataService.listData().then((res) => {
      this.list = res;
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
