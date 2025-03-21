import { defineComponent, h } from 'vue'
import { compile } from 'vue/dist/vue.esm-bundler.js'

export const CustomTitle = defineComponent({
  props: {
    content: {
      type: String,
      required: true
    }
  },
  render() {
    return h('span', h(compile(this.content)))
  }
})
