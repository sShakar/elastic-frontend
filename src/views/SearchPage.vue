<template>
	<form class="form" @submit.prevent="onSubmit">
		<label for="search">Search for name</label>
		<input v-model="searchField" name="search" type="text" />

		<button type="submit">Search</button>
	</form>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const searchField = ref<string | null>();

function onSubmit() {
	console.log(searchField.value);
}
</script>

<style lang="scss" scoped>
.form {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	label {
		margin: 20px;
	}
	input {
		margin: 20px;
		padding: 12px;
		width: 50%;

		&:focus {
			outline: darkgreen solid 1px;
			border: none;
		}
	}
	button {
		color: darkgreen;
		cursor: pointer;
		margin: 10px;
		padding: 12px 22px;
		background-color: transparent;
		border-radius: 10px;
		border: darkgreen solid 1px;
		box-shadow: 2px 1px 18px rgba(0, 0, 0, 0.2);
		transition: ease-in-out 0.2s;

		&:hover {
			scale: 1.1;
		}
	}
}
</style>
