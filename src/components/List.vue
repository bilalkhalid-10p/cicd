<template>
  <div>
    <h1>this is list</h1>
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
