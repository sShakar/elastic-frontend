<template>
	<ul class="header">
		<li @click="$router.push('/')" :class="isActive('/') && 'active'">Upload</li>
		<li @click="$router.push('search')" :class="isActive('/search') && 'active'">Search</li>
	</ul>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';

const route = useRoute();

function isActive(path = ''): boolean {
	return path === route.path;
}
</script>

<style lang="scss" scoped>
.header {
	border-radius: 10px;
	padding: 30px;
	background-color: white;
	height: 10px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	list-style: none;

	li {
		margin: 0 20px;
		cursor: pointer;
	}
}

.active {
	text-decoration: underline;
	color: darkgreen;
}
</style>
