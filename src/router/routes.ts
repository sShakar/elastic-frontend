import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		component: () => import('@/layouts/MainLayout.vue'),
		redirect: '/',
		children: [
			{
				name: 'upload',
				path: '/',
				component: () => import('@/views/UploadPage.vue'),
				meta: {
					title: 'Staff'
				}
			},
			{
				name: 'query',
				path: 'query',
				component: () => import('@/views/QueryPage.vue'),
				meta: {
					title: 'Update Staff'
				}
			}
		]
	},

	{
		name: 'not-found',
		path: '/:catchAll(.*)*',
		redirect: '/'
	}
];

export default routes;
