import {
	createRouter,
	createWebHistory,
} from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsFlight from '@/components/TabsFlight.vue'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		redirect: '/flight'
	},
	{
		path: "/flight/",
		component: TabsFlight,
		redirect: '/flight/resume',
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
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
