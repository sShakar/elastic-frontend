<template>
	<div>
		<form class="form" @submit.prevent="onSubmit">
			<label for="search">Search for name</label>
			<input v-model="query" name="search" type="text" />

			<button type="submit">Search</button>
		</form>

		<ul>
			<li v-for="(result, index) in results" :key="index">
				<strong>{{
					result.highlight && result.highlight.content ? result.highlight.content : result._source.title
				}}</strong
				>: <a :href="`http://localhost:3000/uploads/${result._source.fileName}`">{{ result._source.title }}</a>
			</li>
		</ul>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { $api } from '@/services';

const query = ref<string | null>();
const results = ref<any[]>([]);

async function onSubmit() {
	console.log(query.value);
	try {
		const response = await $api.post('http://localhost:3000/pdf/search', { query });
		console.log(response);
	} catch (error) {
		console.error('Error uploading file:', error);
	}
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
