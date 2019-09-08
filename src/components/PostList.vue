<template>
  <div class="PostList">
    <h1>PostList</h1>
    <PostCard />
  </div>
</template>

<script>
  import PostCard from "@/components/PostCard.vue";
  export default {
    name: "PostList",
    props: {},
    components: {
      PostCard,
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
