<template>
<div class="score">
  <div class="score-box">
    <p class="score-num">{{score}}分！</p>
    <p class="score-tips">{{scoreTips}}</p>
  </div>
  <div class="share-btn" @click="showToast">
  </div>
</div>
</template>

<script>
import {
  mapState
} from 'vuex'
export default {
  data() {
    return {
      scoreTips: '',
      scoreTipsArr: ['你说，是不是把知识都还给小学老师了？', '还不错，但还需要继续加油哦！', '不要嘚瑟还有进步的空间！', '智商离爆表只差一步了！', '你也太聪明啦！']
    }
  },
  computed: mapState(['score']),
  created() {
    document.body.className = 'score'
    this.getScoreTips();
  },
  methods: {
    getScoreTips() {
      let index
      if (this.score === 0) {
        index = 0;
      } else {
        index = parseInt(this.score / 20) - 1
      }
      this.scoreTips = this.scoreTipsArr[index]
    },
    showToast() {
      this.$toast('感谢您的分享！', {})
    }
  },
}
</script>

<style scoped>
.score {
  position: relative;
  width: 100%;
}

.score-box {
  position: absolute;
  height: 12.74rem;
  width: 13.58rem;
  background-image: url('../../assets/images/4-2.png');
  background-size: 100% 100%;
  top: 1.5rem;
  left: 50%;
  margin-left: -7.2rem;
}

.score-box .score-num {
  position: absolute;
  width: 10rem;
  height: 2.5rem;
  top: 7rem;
  left: 50%;
  margin-left: -4.6rem;
  text-align: center;
  font-size: 2rem;
  color: #a51d31;
  font-weight: bolder;
  -webkit-text-stroke: 0.05rem #412318;
}

.score-box .score-tips {
  position: absolute;
  width: 10rem;
  height: 2.5rem;
  top: 10rem;
  left: 50%;
  margin-left: -4.6rem;
  text-align: center;
  font-size: 0.75rem;
  color: #3e2415;
}

.share-btn {
  position: absolute;
  width: 7.7rem;
  height: 3.37rem;
  top: 16rem;
  left: 50%;
  margin-left: -3.7rem;
  background-image: url('../../assets/images/4-3.png');
  background-size: 100% 100%;
}
</style>
