import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
		path: "/",
		name: "首页",
		component: () => import("@/views/home.vue"),
		meta: {
			index: 50
		}
	},
	{
		path: "/login",
		redirect: '/login/loginPage',
		component: () => import("@/views/login/index.vue"),
		meta: {
			index: 1
		},
		children: [{
			path: "/login/loginPage",
			name: "登录",
			component: () => import("@/views/login/components/loginPage.vue")
		},{
			path: "/login/registerPage",
			name: "注册",
			component: () => import("@/views/login/components/registerPage.vue")
		}]
	}
];

const router = new VueRouter({
	base: process.env.BASE_URL,
	routes
});

export default router;
