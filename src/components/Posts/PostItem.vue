<template>
  <b-container class="post-item my-3 w-75 mx-auto">
    <b-row class="header">
      <b-col md="2" class="text-center category">
        <p class="my-auto py-1">{{ category }}</p>
      </b-col>
      <b-col
        md="10"
        class="text-center title"
        @mouseover="hover=true"
        @mouseleave="hover=false"
        :class="{ active: hover }"
      >
        <p class="my-auto py-1">
          <b-link id="title" :to="{ name: 'post', params: { slug: slug }}">{{ title }}</b-link>
          <span v-if="authenticated">
            <b-button size="sm" class="mx-1 edit-btn" @click="modalShow = !modalShow">
              <font-awesome-icon icon="pen" />Edit
            </b-button>
            <b-button title="Delete this post" size="sm" class="mx-1 del-btn" @click="deletePost()">
              <font-awesome-icon icon="trash" />
            </b-button>
          </span>
        </p>
      </b-col>
    </b-row>
    <b-row class="justify-content-center text">
      <p class="p-2">{{ text }}</p>
    </b-row>
    <b-row class="justify-content-center source mb-2">Source: {{ source }}</b-row>
    <b-row class="footer p-1" align-v="center">
      <b-col md="4" class="score">
        <b-button class="btn">
          Points: {{ score }}
          <font-awesome-icon icon="plus-square" />
        </b-button>
      </b-col>
      <b-col md="4" class="fav">
        <b-button class="btn">
          Add to favorites
          <font-awesome-icon icon="star" />
        </b-button>
      </b-col>
      <b-col md="4" class="created">{{ created }}</b-col>
    </b-row>

    <b-modal v-model="modalShow" size="xl" title="Edit Post" hide-footer>
      <PostEditForm :id="id" :slug="slug"></PostEditForm>
    </b-modal>
  </b-container>
</template>

<script>
import { APIService } from "../../APIService";
import PostEditForm from "./PostEditForm.vue";

const apiService = new APIService();

export default {
  name: "PostItem",
  components: {
    PostEditForm
  },
  props: {
    id: Number,
    title: String,
    slug: String,
    category: String,
    text: String,
    source: String,
    score: Number,
    created: String
  },
  data() {
    return {
      hover: false,
      modalShow: false
    };
  },
  computed: {
    authenticated: function() {
      return localStorage.getItem("username") != null;
    }
  },
  methods: {
    deletePost() {
      apiService
        .deletePost(this.slug)
        .then(response => {
          if (response.status === 204) {
            alert("Post deleted!");
            this.$router.go();
          }
        })
        .catch(error => alert(error));
    },
    addPoint() {},
    addToFavorites() {
      apiService
        .addToFavs(this.id)
        .then(response => {
          if (response.status === 200) {
            alert("Added post to favorites!");
          }
        })
        .catch(error => alert(error));
    }
  }
};
</script>

<style scoped>
#title {
  color: black;
  text-decoration: none;
}
.active {
  font-weight: 800;
}
.post-item {
  border: 2px solid black;
}
.header {
  font-family: "Lato", sans-serif;
  font-size: 1.2em;
  border-bottom: solid 1px black;
}
.category {
  background: darkslategray;
  color: white;
}
.title {
  background: linear-gradient(to bottom, #ffd65e 0%, #febf04 100%);
}
.footer {
  background: linear-gradient(to bottom, #eaefb5 0%, #e1e9a0 100%);
  border-top: solid 1px black;
}
.btn {
  color: black;
  background: transparent;
  border: none;
  outline: none;
}
.del-btn {
  float: right;
}
.edit-btn {
  color: crimson;
  background: transparent;
  border: none;
  outline: none;
  float: right;
}
</style>