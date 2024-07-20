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
	box-shadow: rgba(0, 0, 0, 0.2) 0 2px 14px;
	border-radius: 5px;
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
		font-weight: bold;
	}
}

.active {
	text-decoration: underline;
	color: darkgreen;
}
</style>
