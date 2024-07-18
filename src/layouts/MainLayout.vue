<template>
	<div>
		<the-header />
		<div class="container">
			<div class="page">
				<router-view />
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import TheHeader from '@/components/TheHeader.vue';
</script>

<style lang="scss" scoped>
.container {
	display: grid;
	background-color: #d3d3d3;
	width: 100%;
	height: 100vh;
}

.page {
	margin: 20px;
	padding: 20px;
	background-color: white;
	height: 80%;
}
</style>
