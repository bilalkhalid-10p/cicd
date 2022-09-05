<template>
  <div class="container" style="text-align: left;">
    <b-card class="col-md-12">
      <div class="col-12">
        <h1>Create User</h1>
      </div>

      <b-form @submit.prevent="createUser()" >
        <b-form-group
            id="input-group-1"
            label="Select Manager"
            label-for="input-1"
        >
          <b-form-select
              id="input-3"
              v-model="manager"
              :options="managers"
          ></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-2" label="Employee Name" label-for="input-2">
          <b-form-input
              id="input-2"
              v-model="name"
              placeholder="Enter name"
              required
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </b-card>
  </div>
</template>

<script>
import DataService from "@/services/DataService";

export default {
  name: 'create-component',
  data() {
    return {
      manager: '',
      managers: [],
      name: ''
    };
  },
  created() {
    return DataService.getManagersData().then((res) => {
      this.managers.unshift({'value': '', 'text': 'Select Manager'});
      res.forEach(element => {
        this.managers.push({'value': element.id, 'text': element.first_name + ' ' + element.last_name});
      });
    })
  },
  methods: {
    createUser() {
      if(this.name.trim() === '') {
        alert('Enter valid name');
        return false;
      }
      let data = {
        name: this.name.trim(),
        manager_id: this.manager
      }
      return DataService.createUser(data).then((res) => {
        console.log(res);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>