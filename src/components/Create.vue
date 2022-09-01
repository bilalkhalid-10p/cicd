<template>
  <div>
    <b-form @submit="onSubmit">
      <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
          description="We'll never share your email with anyone else."
      >
        <b-form-select
            id="input-3"
            v-model="parent"
            :options="parents"
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
            id="input-2"
            v-model="name"
            placeholder="Enter name"
            required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import DataService from "@/services/DataService";

export default {
  name: 'create-component',
  data() {
    return {
      parent: '#',
      parents: [],
      name: ''
    };
  },
  created() {
    return DataService.getParentsData().then((res) => {
      this.parents = res;
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>