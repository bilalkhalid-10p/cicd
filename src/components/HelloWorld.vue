<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="data in dataArray" :key="data.id">{{data.firstname}} {{data.lastname}}</li>
    </ul>
  </div>
</template>

<script>
import DataService from '@/services/DataService';
export default {
  name: 'home-component',
  props: {
    msg: String
  },
  data() {
    return {
      dataArray: []
    };
  },
  created() {
    return DataService.getData().then((res) => {
      this.dataArray = res;
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
