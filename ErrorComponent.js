Vue.component(`error`, {
  data() {
    return {
      $root.error
    }

  },

  template: `
  <div>Ошибка сервера</div>
  `
})
