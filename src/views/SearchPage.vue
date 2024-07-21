<template>
	<div style="text-align: center">
		<form class="form" @submit.prevent="onSubmit">
			<label for="search">Search for name</label>
			<div class="flex">
				<input v-model="query" name="search" type="text" @keyup="debouncedSubmit" @change="debouncedSubmit" />
				<button type="submit">Search</button>
			</div>
		</form>

		<ul v-if="results" class="results">
			<li v-for="(result, index) in results" :key="index">
				<div v-for="(content, index) in result.matches" :key="index" class="matches">
					<strong v-for="(item, index) in extractFromHTML(content)" :key="index" style="color: green">{{
						item
					}}</strong>
					<a :href="`${baseUrl}${result.filename}`" target="_blank"
						>{{ result.title }} <span style="font-size: 20px">&#10532;</span></a
					>
					<hr style="width: 50%; height: 1px; color: darkgreen" />
				</div>
			</li>
		</ul>
	</div>

	<h1 style="text-align: center" v-if="isLoading">Loading...</h1>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { $api } from '@/services';

const baseUrl = ref(import.meta.env.VITE_DEFAULT_BASE_API);
const query = ref<string | null>();
const results = ref<any[]>([]);
const isLoading = ref(false);

async function onSubmit() {
	results.value = [];
	try {
		isLoading.value = true;
		const data: any = await $api.post('pdf/search', { query: query.value });
		data.hits.hits.forEach((hit: any) =>
			results.value.push({ filename: hit._source.filename, title: hit._source.title, matches: hit.highlight.content })
		);
	} catch (error) {
		console.error('Error uploading file:', error);
	} finally {
		isLoading.value = false;
	}
}

async function debouncedSubmit() {
	setTimeout(async () => {
		if (query.value) await onSubmit();
	}, 100);
}

function extractFromHTML(html: string) {
	const parser = new DOMParser();
	const doc = parser.parseFromString(html, 'text/html');

	const emElements = doc.getElementsByTagName('em');
	return Array.from(emElements).map(el => el.textContent);
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
			outline: darkgreen solid 0.1px;
			border: none;
		}
	}

	button {
		color: white;
		cursor: pointer;
		margin: 10px;
		padding: 12px 22px;
		background-color: darkgreen;
		border-radius: 10px;
		border: none;
		box-shadow: 2px 1px 18px rgba(0, 0, 0, 0.2);
		transition: ease-in-out 0.2s;

		&:hover {
			scale: 1.02;
		}
	}
}

.flex {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
}

.results {
	a,
	a:active,
	a:visited {
		color: black;
		text-decoration: none;
	}
	a:hover {
		color: darkgreen;
		text-decoration: underline;
	}

	li {
		list-style: none;
	}
}

.result-item {
	display: flex;
	flex-direction: column;
	text-align: center;

	a {
		margin: 20px;
	}
}

.matches {
	display: flex;
	flex-direction: column;

	strong {
		margin-bottom: 10px;
	}

	a {
		margin-bottom: 20px;
	}
}
</style>
