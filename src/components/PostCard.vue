<template>
  <div class="PostCard">
    <h4 class="title">
      <span 
        :class="['click-indicator', {'--clicked': post.data.clicked}]"></span>
      {{post.data.author}}
      <span class="date">{{date}} ago</span>
    </h4>
    <div 
      class="body"
      @click="displayPost"
    >
      <div   class="wrapper-img">
        <img :src="getThumbnail">
      </div>
      <div class="wrapper-content">
        <p>{{post.data.title}}</p>
      </div>
      <div class="wrapper-icon">
        <img src="@/assets/chevrom-right.svg">
      </div>
    </div>
    <div class="footer">
      <span 
        class="dismiss"
        @click="dismissPost"
      >
        <img src="@/assets/cancel-circle.svg"> Dismiss Post
      </span>
      <span class="comments">{{post.data.num_comments}} Comments</span>
    </div>
  </div>
</template>

<script>
import thumbnail from '@/assets/placeholder.jpg';
import moment from 'moment';

export default {
  name: "PostCard",
  data: function() {
    return {
      thumbnail: thumbnail
    }
  },
  props: {
    post: {
      type: Object,
    },
    index: {
      type: Number,
    }
   },
   methods: {
     displayPost: function() {
       this.$store.dispatch('closeMenu');
       this.$store.dispatch('displayPost', this.index);
     },
     dismissPost: function() {
       this.$store.dispatch('dismissPost', this.index);
     },
   },
   computed: {
     getThumbnail: function() {
       let image = thumbnail;
       if (this.post.data.thumbnail && this.post.data.thumbnail != 'self' && this.post.data.thumbnail != 'default') {
         image = this.post.data.thumbnail;
       }
       return image;
     },
     date: function() {
       let formatDate = new Date(this.post.data.created*1000);
       formatDate = moment(formatDate).fromNow(true);
       return  formatDate; 
     }
   }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .PostCard {
    margin: 0 5px 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #444;

    .title {
      font-weight: normal;
      font-size: 17px;
      margin: 10px 0;

      .date {
        font-size: 14px;
        margin-left: 20px;
      }
    }

    .click-indicator {
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: rgb(14, 49, 143);
      margin-right: 10px;
      transition: background-color 0.3s;

      &.--clicked {
        background-color: transparent;
      }
    }

    .body {
      display: flex;
      align-items: center;
      margin-bottom: 10px;

      &:hover {
        cursor: pointer;
      }
    }

    .wrapper-img {
      width: 40%;
      min-width: 120px;
      margin-right: 20px;
      
      img {
        width: 100%;
      }
    }

    .wrapper-content {
      width: 100%;
      p {
        font-size: 14px;
        overflow: hidden;
        max-height: 60px;
      }
    }

    .wrapper-icon {
      width: 50px;
      margin: 0 10px;

      img {
        width: 100%;
      }
    }

    .footer {
      img {
        vertical-align: middle;
        width: 20px;
      }

      .comments {
        color: #ce620a;
        margin-left: 20px;
      }

      .dismiss {
        transition: color 0.3s;

        &:hover {
          color: #ce620a;
          cursor:pointer;
        }
      }
    }
  }
</style>
