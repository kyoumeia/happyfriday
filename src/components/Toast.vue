<template>
<div v-if="ifShowToast" :class="[hideToast, 'toast']">
  {{message}}
</div>
</template>

<script>
export default {
  data() {
    return {
      hideToast: '',
      ifShowToast: ''
    }
  },
  props: {
    message: String,
    ifShow: {
      type: Boolean,
      default: false
    }
  },
  created() {

  },
  computed: {
    // ifShowToast() {
    //   return this.ifShow
    // }
  },
  watch: {
    ifShow() {
      this.ifShowToast = this.ifShow
      setTimeout(() => {
        this.$emit('initIfShow')
      }, 1500)
    }
  },
}
</script>

<style scoped>
.toast {
  display: flex;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  background: rgba(0, 0, 0, 0.7);
  border-radius: 8px;
  max-width: 70%;
  padding: 16px;
  color: #fff;
  min-height: 88px;
  min-width: 88px;
  font-size: 14px;
  text-align: center;
  white-space: pre-wrap;
  align-items: center;
  justify-content: center;
}

.hide-toast {
  opacity: 0;
  transition: opacity 1.5s;
}
</style>
