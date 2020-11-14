<template>
<div class="common-view">
  <header>
    <span class="title" v-if="fatherComponent == 'home'">第一周</span>
    <span class="title" v-if="fatherComponent == 'item'">第{{currentQuestion}}题</span>
  </header>
  <div class="mid" v-if="fatherComponent == 'home'">
    <div class="home-bg commom-bg"></div>
    <router-link class="home-btn common-btn" to="item"></router-link>
  </div>
  <div class="mid" v-if="fatherComponent == 'item'">
    <div class="item-bg commom-bg">
      <p>{{ questions[currentQuestion - 1].title }}</p>
      <ul>
        <li :class="cueAnwserIndex === index ? 'active' : ''" v-for="(item, index) in questions[currentQuestion - 1].anwser" :key="item.anwser_id" @click="chooseAnwser(index)">
          <span>{{ item.anwser_describe }}</span>
        </li>
      </ul>
    </div>
    <span class="item-btn common-btn" @click="nextAnwser" v-if="currentQuestion < questions.length"></span>
    <span class="submit-btn common-btn" @click="commitAnwser" v-else></span>
  </div>
</div>
</template>

<script>
import {
  mapState
} from "vuex";
import {
  SCORE_INCREMENT,
  UPDATE_CURRENT_ANWSER
} from '../store/mutations-type'
export default {
  data() {
    return {
      cueAnwserIndex: "",
    };
  },
  props: ["fatherComponent"],
  computed: mapState(["currentQuestion", "questions"]),
  methods: {
    chooseAnwser(index) {
      this.cueAnwserIndex = index;
    },
    nextAnwser() {
      if (this.cueAnwserIndex === "") {
        alert("请选择答案！");
      } else {
        // 判断当前选择的是否是正确答案
        let isAnwser = this.questions[this.currentQuestion - 1].anwser[
          this.cueAnwserIndex
        ].is_anwser;
        if (isAnwser) {
          // 如果是正确答案，分数加20
          this.$store.commit(SCORE_INCREMENT)
        }
        // 进入下一题
        this.$store.commit(UPDATE_CURRENT_ANWSER)
        // 初始化cueAnwserIndex
        this.cueAnwserIndex = ''
      }
    },
    commitAnwser() {
      this.$router.push('score')
    }
  },
};
</script>

<style scoped>
.common-view header {
  position: absolute;
  top: -1rem;
  right: 2rem;
  height: 7.9rem;
  width: 4rem;
  background-image: url("../assets/images/WechatIMG2.png");
  background-size: 100% 100%;
  z-index: 9;
}

.common-view header .title {
  position: absolute;
  bottom: 1rem;
  font-size: 0.75rem;
  left: 0.9rem;
  color: #a57c50;
  font-weight: bolder;
}

.mid {
  width: 100%;
  position: absolute;
  top: 7rem;
}

.commom-bg {
  height: 13.92rem;
  width: 15.78rem;
  position: absolute;
  top: 0;
  background-size: 100% 100%;
  left: 50%;
  margin-left: -7.89rem;
}

.commom-bg p {
  color: #FFFFFF;
}

.common-btn {
  height: 2.52rem;
  width: 5.19rem;
  background-size: 100% 100%;
  position: absolute;
  top: 14rem;
  left: 50%;
  margin-left: -2.6rem;
}

.home-bg {
  background-image: url("../assets/images/1-2.png");
}

.home-btn {
  background-image: url("../assets/images/1-4.png");
}

.item-bg {
  background-image: url("../assets/images/2-1.png");
}

.item-btn {
  background-image: url("../assets/images/2-2.png");
}

.submit-btn {
  background-image: url("../assets/images/3-1.png");
}

ul li {
  margin: 5px 0;
}

ul li span {
  color: #FFFFFF;
  font-size: 0.8rem;
  display: inline-block;
  padding: 2px 4px;
  border-radius: 2px;
}

ul li.active span {
  background-color: rgba(233, 241, 110, 0.5);
}
</style>
