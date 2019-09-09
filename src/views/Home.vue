<template>
  <div class="Home">
    <div 
      class="menu"
      @click="toggleMenu"
    >
      <img src="@/assets/menu.svg">
    </div>
    <div 
      class="wrapper-list"
      :class="{'--show': $store.state.menuIsOpen}"
    >
      <PostList :data="this.$store.state.postList" />
    </div>
    <div 
      class="wrapper-detail"
      @click="closeMenu"
    >
      <PostDetail :details="$store.state.postDetail" />
    </div>
  </div>
</template>

<script>
  import PostList from "@/components/PostList.vue";
  import PostDetail from "@/components/PostDetail.vue";

  export default {
    name: "home",
    components: {
      PostList,
      PostDetail,
    },
    methods: {
      toggleMenu: function() {
        this.$store.dispatch('toggleMenu');
      },
      closeMenu: function() {
        this.$store.dispatch('closeMenu');
      }
    },
  };
</script>

<style scoped lang="scss">
  .Home {
    display: flex;

    > div {
      min-height: 100vh;
      box-sizing: border-box;
    }

    .wrapper-list {
      background-color: #000;
      color: #ddd;
      width: 100%;
      max-width: 400px;
      text-align: left;
      padding: 0px;
      min-height: 100vh;

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
      width: 70%;
      padding: 30px 5px;

      @media (max-width: 992px) {
        width: 100%;
      }
    }

    .menu {
      display: none;
      position: fixed;
      top: 10px;
      left: 20px;
      z-index: 300;
      padding: 5px;
      background-color: #222;
      min-height: 0;

      img {
        width: 25px;
        display: block;
      }

      @media (max-width: 992px) {
          display: block;
      }
    }
  }
</style>
