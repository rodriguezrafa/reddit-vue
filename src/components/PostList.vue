<template>
  <div class="PostList">
    <h2 class="title">Reddit Posts</h2>
    <transition-group tag="div" name="list" mode="out-in" appear>
        <PostCard 
          v-for="(post, i) in data"
          :key="post"
          :post="post"
          :index="i"
        />
    </transition-group>
    <div 
      class="dismiss-all"
      :class="{'--absolute': dismissAllClicked}"
      @click="dismissAll"
    >
      <h3 class="dismiss-title">Dismiss All</h3>
    </div>
  </div>
</template>

<script>
  import PostCard from "@/components/PostCard.vue";
  export default {
    name: "PostList",
    data: function() {
      return {
        dismissAllClicked: false,
      }
    },
    props: ['data'],
    components: {
      PostCard,
    },
    methods: {
      dismissAll: function() {
        this.$store.dispatch('dismissAll');
        this.$store.dispatch('closeMenu');
        this.dismissAllClicked = true;
      }
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .PostList {
    max-height: 100vh;
    min-height: 100vh;
    overflow-y: auto;
    position: relative;

    .title {
      padding: 10px 40px;
      background-color: #222;
      margin: 0 0 30px 0;
      text-align: center;
      top: 0;
      position: sticky;
    }

    .dismiss-all { 
      position: sticky;
      bottom: 0;
      background-color: #222;
      text-align: center;
      width: 100%;

      &.--absolute {
        position: absolute;
      }

      .dismiss-title {
        padding: 10px 0;
        margin: 0;
        font-weight: normal;
        color: #ce620a;
        transition: color 0.3s;

        &:hover {
          cursor: pointer;
          color: #d68d52;
        }
      }

    }

    .list-leave-active {
      transition: all 1s ease;
      position: absolute;
    }

    .list-leave-to {
      opacity: 0;
      transform: translateX(-100%);
    }

    .list-leave-to {
      opacity: 0;
      transform: translateX(-100%);
    }

    .list-move {
      transition: transform 1s ease;
    }
  }
</style>
