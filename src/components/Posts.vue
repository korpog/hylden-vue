<template>
  <div>
    <h1>Posts</h1>

    <table class="table table-bordered table-hover">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Category</th>
          <th>Score</th>
          <th>Text</th>
          <th>Sources</th>
          <th>Created</th>
        </tr>
      </thead>
      <tbody>
        <tr v-bind:key="post.id" v-for="post in posts" >
          <th>{{ post.id }}</th>

          <th>{{ post.title }}</th>

          <td>{{ post.category }}</td>

          <td>{{ post.score }}</td>

          <td>{{ post.text }}</td>

          <td>{{ post.sources }}</td>

          <td>{{ post.created }}</td>
        </tr>
      </tbody>
    </table>
    <div></div>
  </div>
</template>

<script>
import {APIService} from '../APIService';

const apiService = new APIService();

export default {

name: 'Posts',

components: {

},

data() {

return {
posts: [],

};

},

methods: {

getPosts(){
    apiService.getPosts().then((data) => {

        this.posts = data.results;
    });
},
},

mounted() {
this.getPosts();
},
}
</script>