<template>
<transition name="fade">
  <div v-if="isShow" class="toast">
    <span>{{ message }}</span>
  </div>
</transition>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      isShow: false,
    };
  },
};
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

.toast span {
  color: #fff;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}
</style>
