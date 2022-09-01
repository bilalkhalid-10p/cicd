<template>
  <div class="col-8 align-content-center">
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
          <td>{{item.employee_first_name ?? 'N/A'}}</td>
          <td>{{item.employee_last_name ?? 'N/A'}}</td>
          <td>{{item.manager_first_name ?? 'N/A'}}</td>
          <td>{{item.manager_last_name ?? 'N/A'}}</td>
          <td><b-button @click="editUser(item)">Button</b-button></td>
        </tr>
      </table>
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
  },
  methods: {
    editUser(item) {
      console.log(item);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
