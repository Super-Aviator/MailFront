import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from "vant";
import {
	Lazyload
} from "vant";
import "vant/lib/index.css";

import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import '@/styles/index.scss' // global css

// 导入api
import api from '@/http/index'
// 初始化
Vue.use(api);
Vue.use(Vant);
Vue.use(Lazyload);

// 导入util中的index
import * as utils from '@/utils/index'
import * as validates from '@/utils/validate'
Vue.prototype.$util = utils //公共方法绑定到原型上
Vue.prototype.$validate = validates //表单验证函数绑定到原型上

Vue.config.productionTip = false;

const app = new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");

export default app
