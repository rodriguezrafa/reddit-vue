<template>
  <div class="Home">
    <div 
      class="menu"
      @click="toggleMenu"
    >
      Icon
    </div>
    <div 
      class="wrapper-list"
      :class="{'--show': menuVisible}"
    >
      <PostList />
    </div>
    <div class="wrapper-detail">
      <PostDetail />
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import PostList from "@/components/PostList.vue";
  import PostDetail from "@/components/PostDetail.vue";

  export default {
    name: "home",
    data: function() {
      return {
        menuVisible: false,
      }
    },
    components: {
      PostList,
      PostDetail,
    },
    methods: {
      toggleMenu: function() {
        this.menuVisible = !this.menuVisible;
      }
    },
  };
</script>

<style scoped lang="scss">
  .Home {
    display: flex;

    > div {
      min-height: 100vh;
    }

    .wrapper-list {
      background-color: skyblue;
      width: 100%;
      max-width: 400px;
      text-align: left;
      padding: 0px 5px 30px;

      @media (max-width: 992px) {
        position: absolute;
        left: 0;
        top: 0;
        transform: translateX(-100%);
        transition: transform 0.5s ease-in-out;

        &.--show {
          transform: translateX(0);
        }
      }
    }

    .wrapper-detail {
      background-color: salmon;
      width: 100%;
      padding: 30px 5px;
    }

    .menu {
      display: none;
      position: fixed;
      top: 20px;
      left: 20px;
      z-index: 300;
      padding: 0;

      @media (max-width: 992px) {
          display: block;
      }
    }
  }
</style>
