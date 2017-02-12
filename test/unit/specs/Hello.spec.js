import Vue from 'vue'
import Hello from 'src/components/Hello'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Hello, This Is My Sample')
  })
})
