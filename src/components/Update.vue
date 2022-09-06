<template>
  <div class="container" style="text-align: left;">
    <b-card class="col-md-12">
      <div class="col-12">
        <h1>Update User</h1>
      </div>

      <b-form @submit.prevent="updateUser()" >
        <b-form-group
            id="input-group-1"
            label="Select Manager"
            label-for="input-1"
        >
          <b-form-select
              id="input-3"
              v-model="manager_id"
              :options="managers"
          ></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-2" label="First Name" label-for="input-2">
          <b-form-input
              id="input-2"
              v-model="first_name"
              placeholder="Enter first name"
              required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Last Name" label-for="input-2">
          <b-form-input
              id="input-2"
              v-model="last_name"
              placeholder="Enter last name"
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
      manager_id: '',
      managers: [],
      first_name: '',
      last_name: ''
    };
  },
  created() {
    return DataService.getManagersData().then((res) => {
      this.managers.unshift({'value': '', 'text': 'Select Manager'});
      res.forEach(element => {
        this.managers.push({'value': element.id, 'text': element.first_name + ' ' + element.last_name});
      });
      this.getUserData(this.$route.params.id);
    })
  },
  methods: {
    updateUser() {
      if(this.first_name.trim() === '' && this.last_name.trim() === '') {
        alert('Enter valid name');
        return false;
      }

      let data = {
        first_name: this.first_name.trim().charAt(0).toUpperCase() + this.first_name.slice(1),
        last_name: this.last_name.trim().charAt(0).toUpperCase() + this.last_name.slice(1),
        manager_id: this.manager_id,
        user_id: this.$route.params.id
      };

      return DataService.updateUser(data).then(() => {
        this.$router.push({ name: "list" });
      })
    },
    getUserData(userId) {
      let data = {
        userId: userId,
      };

      return DataService.getUserData(data).then((res) => {
        if(res.length > 0) {
          this.manager_id = res[0].manager_id === 0 ? '' : res[0].manager_id;
          this.first_name = res[0].first_name;
          this.last_name = res[0].last_name;
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>