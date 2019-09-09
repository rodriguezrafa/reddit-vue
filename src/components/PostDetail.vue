<template>
  <div class="PostDetail">
    <h2 class="title">{{details.author}}</h2>
    <div 
      class="wrapper-image"
      v-if="details.thumbnail && details.thumbnail != 'self' && details.thumbnail != 'default'"
    >
      <img 
        :src="details.thumbnail"
        @click="showModal = true"
      >
    </div>

    <h4>{{details.title}}</h4>
    <Modal 
      :show="showModal"
      :image="details.thumbnail"
      @close="showModal = false"
    />
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
export default {
  name: "PostDetail",
  data: function() {
    return {
      showModal: false,
    }
  },
  components: {
    Modal,
  },
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

    img:hover {
      cursor:pointer;
    }
  }
</style>
