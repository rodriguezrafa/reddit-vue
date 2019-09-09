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
    this.axios.get('https://www.reddit.com/r/Vue/new.json?sort=new').then((response) => {
      this.$store.dispatch('getPosts', response.data);
    }).catch((error) => {
        console.log('axios error: ', error);
    });
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
