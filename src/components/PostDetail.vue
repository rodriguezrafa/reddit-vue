<template>
  <div class="PostDetail">
    <h2 class="title">{{details.author}}</h2>
    <div 
      class="wrapper-image"
      v-if="details.thumbnail"
    >
      <img :src="details.thumbnail" alt="">
    </div>

    <h4>{{details.title}}</h4>
  </div>
</template>

<script>
export default {
  name: "PostDetail",
  props: {
    details: {
      type: Object,
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .PostDetail {
    padding:  0 30px;

    .title {
      margin-bottom: 40px;
    }

    .wrapper-image {
      text-align: center;
    }
  }
</style>
