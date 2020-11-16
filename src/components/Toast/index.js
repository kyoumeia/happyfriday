let _TOAST = {
  show: false,
  component: null
}
export default {
  install(Vue) {
    Vue.prototype.$toast = function (message, options) {
      let ToastComponent = Vue.extend({
        data() {
          return {
            show: _TOAST.show,
            message,
          }
        },
        template: '<div v-if="show">{{message}}</div>'
      })
      if (_TOAST.show) {
        return;
      }
      if (!_TOAST.component) {
        _TOAST.component = new ToastComponent()
        let toastElement = _TOAST.component.$mount().$el
        document.body.appendChild(toastElement)
      }
      _TOAST.component.show = _TOAST.show = true
      _TOAST.component.message = message
      setTimeout(() => {
        _TOAST.component.show = _TOAST.show = false
      }, 1500);
    }
  }
}