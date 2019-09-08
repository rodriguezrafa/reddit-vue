<template>
  <div class="PostList">
    <h2 class="title">Reddit Posts</h2>
    <transition-group>
      <PostCard 
        v-for="(post, i) in data"
        :key="`post-${i}`"
        :post="post"
        :index="i"
      />
    </transition-group>
  </div>
</template>

<script>
  import PostCard from "@/components/PostCard.vue";
  export default {
    name: "PostList",
    props: {
      data: {
        type: Array,
      },
    },
    components: {
      PostCard,
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .PostList {
    max-height: 100vh;
    overflow-y: scroll;

    .title {
      padding: 10px 40px;
      background-color: #222;
      margin: 0 0 30px 0;
      text-align: center;
      top: 0;
      position: sticky;
    }
  }
</style>
