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
      <p class="m-1">{{ text }}</p>
    </b-row>
    <hr />
    <b-row class="justify-content-center source mb-2"><div>
  <b-link :href="source" target="_blank">Source</b-link>
</div></b-row>
    <b-row class="footer p-1" align-v="center">
      <b-col md="4" class="score">
        Points: {{ score }}
        <b-button v-if="authenticated" class="btn" @click="addPoint()">
          <font-awesome-icon v-bind:class="{ active: upvoted }" icon="plus-square" />
        </b-button>
      </b-col>
      <b-col md="4" class="fav">
        <b-button v-if="authenticated" class="btn btn-fav" @click="addToFavorites()">
          Add to favorites
          <font-awesome-icon v-bind:class="{ active: favorited }" icon="star" />
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
      modalShow: false,
      upvoted: false,
      favorited: false,
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
    addPoint() {
      apiService
        .upvote(this.slug)
        .then(response => {
          if (response.status == 200) {
            this.score = response.data.score;
            this.upvoted = !this.upvoted;
          }
        })
        .catch(error =>
          alert("You can't do that! Please register and/or log in\n" + error)
        );
    },
    addToFavorites() {
      apiService
        .addToFavs(this.slug)
        .then(response => {
          if (response.status === 200) {
            alert("Added " + this.title + " to favorites!");
            this.favorited = !this.favorited;
          }
        })
        .catch(error =>
          alert("You can't do that! Please register and/or log in\n" + error)
        );
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
.active {
  color: gold;
}
</style>