<template>
  <transition name="fade">
    <div class="Modal" v-if="show">
        <div 
          class="modal-background"
          @click="closeModal"
        ></div>
        <img :src="image">
    </div>
  </transition>
</template>

<script>
import Modal from "@/components/Modal.vue";
export default {
  name: "Modal",
  props: ['image', 'show'],
  methods:{
    closeModal: function() {
      this.$emit('close')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .Modal {
    display: flex;
    align-items: center;
    justify-content: center;

    .modal-background {
      background-color: #000;
      width: 100vw;
      height: 100vh;
      position: absolute;
      z-index: 400;
      top: 0;
      left: 0;
    }

    img {
      max-width: 95%;
      max-height: 90%;
      position: absolute;
      z-index: 410;
      top: 50%;
      transform: translateY(-50%);
      margin: 0 auto;
      left: 0;
      right: 0;
    }

    
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
