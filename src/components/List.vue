<template>
  <div>
    <b-card>
      <h1>Users Data</h1>
      <table class="table table-bordered table-striped table-sm">
        <tr>
          <th>Employee First Name</th>
          <th>Employee Last Name</th>
          <th>Manager First Name</th>
          <th>Manager Last Name</th>
          <th>Action</th>
        </tr>
        <tr v-for="(item, index) in list" :key="index">
          <td>{{item.Employee_first_name}}</td>
          <td>{{item.Employee_last_name}}</td>
          <td>{{item.Manager_first_name}}</td>
          <td>{{item.Manager_first_name}}</td>
          <td></td>
        </tr>
      </table>
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
