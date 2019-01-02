<template>
  <div class="container">
    <h1>Lastest Posts</h1>
    <hr>
    <div class="create-post">
      <form @submit.prevent="createPost">
      <input type="text" id="create-post" v-model="text" placeholder="Create a post">
      </form>
    </div>
    <hr>
    <p class="error" v-if="error">{{error}}</p>
    <div class="post-container1">
      <div class="post1"
      v-for="(post, index) in posts.slice().reverse()"
      v-bind:item="post"
      v-bind:index="index"
      v-bind:key="post._id"
      v-on:dblclick="deletePost(post._id)"
      >         
      {{post.createdAt.getDate()}}/{{post.createdAt.getMonth()}}/{{post.createdAt.getFullYear()}}
      <hr>
      <p class="text1">{{post.text}} </p>
      </div>

    </div>

  </div>
</template>

<script>
import PostService from '../PostService'

export default {
  name: 'PostCompnent',
  data() {
    return {
      posts: [],
      error: '',
      text: ''
    }
  },
  async created() {
    try {
       
      this.posts = await PostService.getPosts();
      
    } catch (err) {
        this.error = err.message;
       
    }
  },
  methods: {
    async createPost(){
      await PostService.insertPost(this.text)
      this.posts = await PostService.getPosts();
      this.text = '';
    },
    async deletePost(id){
      await PostService.deletePost(id)
      this.posts = await PostService.getPosts();
    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.post1 {
  padding: 0.7px;
  font-size: 1.3em;
  background-color: #E0EDF4;
  border-left: 5px solid #3EB3F6;
  margin-bottom: 2px;
  color: #3E5252;
}

.text1 {
  font-size: 1.3em;
   margin: 10px;
  }
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0px;
}
a {
  color: #42b983;
}

p {
  margin: 0px;
}

input {
      width: calc(100% - 40px);
      border: 0;
      padding: 20px;
      font-size: 1.3em;
      background-color: #323333;
      color: #687F7F;
}
</style>
