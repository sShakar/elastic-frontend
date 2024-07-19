<template>
	<form class="form" @submit.prevent="onSubmit">
		<label for="file">Upload PDF file</label>
		<input ref="uploadField" name="file" type="file" />

		<button type="submit">Submit</button>
	</form>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const uploadField = ref<HTMLInputElement | null>();

function onSubmit() {
	console.log(uploadField.value?.files![0]);
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
