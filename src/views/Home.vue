<template>
  <div class="home">
    <PostList />
    <PostDetail />
    <PostCard />
  </div>
</template>

<script>
// @ is an alias to /src
import PostList from "@/components/PostList.vue";
import PostDetail from "@/components/PostDetail.vue";
import PostCard from "@/components/PostCard.vue";

export default {
  name: "home",
  components: {
    PostList,
    PostDetail,
    PostCard,
  },
};
</script>
