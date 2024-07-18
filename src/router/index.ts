import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
	scrollBehavior: (_to, _from, savedPosition) => savedPosition ?? { left: 0, top: 0 },
	history: createWebHistory(import.meta.env.VITE_DEFAULT_BASE_URL),
	routes
});

export default router;
