//es6语法：
import Vue from "../node_modules/vue/dist/vue.min.js";
import VueRouter from "vue-router";
Vue.use(VueRouter);
// 定义并且注册组件
// 在官方的示例中使用 Vue.extend({})先注册了一个定义模板，再引用，看个人喜好吧
// 定义组件
var Foo = Vue.extend({
    template: '<p>This is foo!</p>'
})
var Bar = Vue.extend({
    template: '<p>This is bar!</p>'
})
// 路由器需要一个根组件。
// 出于演示的目的，这里使用一个空的组件，直接使用 HTML 作为应用的模板


const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
];

const router = new VueRouter({routes});
new Vue({
    router
    }).$mount('#app');