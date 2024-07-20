<template>
	<div>
		<div class="container">
			<the-header />
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
	padding: 20px;
	background-color: #d3d3d3;
	width: 100%;
	min-height: 100vh;
}

.page {
	box-shadow: rgba(0, 0, 0, 0.2) 0 10px 14px;
	border-radius: 5px;
	padding: 20px;
	background-color: white;
	min-height: 80vh;
}
</style>
