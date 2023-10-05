<template>
  <div class="posts">
    <div class="posts_heading">
      <div class="posts_heading__inner">
        <h1>List of users</h1>
        <el-button type="success">Create user</el-button>
      </div>
    </div>

    <div class="wrapper_card">
      <Card v-for="item in store.posts" :key="item.id" :item="item" />
    </div>

  </div>
</template>

<script>
import Card from '../components/Card.vue';
import { useMainStore } from '../store';

export default {
  data() {
    return {
      store: useMainStore(),
    };
  },
  computed: {
    async posts() {
      console.log(this.store, 'store');
      console.log(this.$store.$state, 'STATE');
      return this.$store.$state?.posts;
    },
  },
  methods: {
    async editPost(post) {
      // Реализуйте редактирование поста
    },
    async deletePost(postId) {
      // Реализуйте удаление поста
    },
    openAddPostModal() {
      // Откройте модальное окно для добавления поста
    },
  },
  async mounted() {
    this.store.getPosts();
  },
  components: { Card }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=AR+One+Sans:wght@400;500;600;700&display=swap');

body {
  font-family: 'AR One Sans', sans-serif;
}

.posts_heading {
  display: flex;
  justify-content: center;
  width: 100%;
}

.posts_heading__inner {
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.posts_heading__inner h1 {
  color: rgb(31, 70, 82);
}
.wrapper_card {
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
}
</style>