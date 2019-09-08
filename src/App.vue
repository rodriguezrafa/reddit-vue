<template>
  <div id="app">
     <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {
  },
  created: function() {
    const localPosts = window.localStorage.getItem('rr_reddit_posts');
    // just execute action after hitting reddit endpoint, remove payload sent
    if (!localPosts) {
      this.$store.dispatch('getPosts', this.$store.state.dummyObject);
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}
</style>
