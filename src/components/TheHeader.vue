<template>
	<ul class="header">
		<li @click="$router.push('/')">Upload</li>
		<li @click="$router.push('query')">Query</li>
	</ul>
</template>

<style lang="scss" scoped>
.header {
	height: 30px;
	width: 100%;
	display: flex;
	justify-items: center;
	align-items: center;
	list-style: none;

	li {
		margin: 0 4px;
	}
}
</style>
