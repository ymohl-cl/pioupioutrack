import {
	createRouter,
	createWebHistory,
} from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsFlight from '@/components/TabsFlight.vue';
import { store } from '@/store';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		redirect: '/flight',
		meta: {
			public: false,
		}
	},
	{
		path: '/login',
		component: () => import('@/views/Login.vue'),
		meta: {
			public: true,
		}
	},
	{
		path: '/signUp',
		component: () => import('@/views/SignUp.vue'),
		meta: {
			public: true,
		}
	},
	{
		path: "/flight/",
		component: TabsFlight,
		redirect: '/flight/resume',
		meta: {
			public: false,
		},
		children: [
			{
				path: 'resume',
				component: () => import('@/views/FlightResume.vue')
			},
			{
				path: "history",
				component: () => import('@/views/FlightHistory.vue')
			}
		]
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.public)){
		next();
		return;
	}
	const user = store.getters.user;
	if (user.Logged()) {
		next();
		return;
	}
	router.push('/login');
})

export default router
