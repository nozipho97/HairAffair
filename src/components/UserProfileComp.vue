<template>
    <div class="row">
        <table class="table">
      <thead>
        <tr>
          <th scope="col">First Nmae</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email Address</th>
          <th scope="col">User Role</th>
          <th scop="col">Gender</th>
        </tr>
      </thead>
      <tbody>
        <tr  v-for="user in users" :key="userID">
          <td> {{ user.firstName }}</td>
          <td> {{ user.lastName }}</td>
          <td> {{ user.emailAddress }}</td>
          <td> {{ user.userRole }}</td>
          <td>{{user.userProfile}}</td>
          <td>{{user.gender}}</td>
        </tr>
      </tbody>
      </table>
      </div>
    
   
      
    
</template>
<script>
import {computed} from '@vue/runtime-core';
import { useStore } from 'vuex';

export default {

    setup() {
        const store = useStore();
        store.dispatch('fetchUsers');
        const fetchUser =
            computed(() => store.state.users);
        return {
            fetchUser

        }
    }
}
</script>