import ToastComponent from './Toast.vue'

const Toast = {}
let isShow = false
let toastVueObj

Toast.install = function (Vue) {
  const ToastConstructor = Vue.extend(ToastComponent)
  Vue.prototype.$toast = function (message, options) {
    if (isShow) {
      return;
    }
    isShow = true
    toastVueObj = new ToastConstructor({
      data: {
        message,
        isShow
      }
    })
    let toastNode = toastVueObj.$mount().$el
    document.body.appendChild(toastNode)
    setTimeout(() => {
      toastVueObj.isShow = isShow = false
    }, 1500);
  }
}

export default Toast