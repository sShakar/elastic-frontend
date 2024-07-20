<template>
	<div>
		<form class="form" @submit.prevent="onSubmit">
			<label for="file">Upload PDF file</label>
			<div class="flex">
				<input ref="uploadField" name="file" type="file" />
				<button type="submit">Submit</button>
			</div>
		</form>

		<h2 v-if="pdfs.length">PDFs</h2>
		<ol class="results">
			<li v-for="(pdf, index) in pdfs" :key="index">
				<a :href="`http://localhost:3000/${pdf._source.fileName}`" target="_blank"
					>{{ pdf._source.title }} <span style="font-size: 20px">&#10532;</span></a
				>
			</li>
		</ol>
	</div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { $api } from '@/services';

const uploadField = ref<HTMLInputElement | null>(null);
const pdfs = ref<any[]>([]);

async function onSubmit() {
	const formData = new FormData();
	formData.append('file', uploadField.value?.files![0] as Blob);

	try {
		const response = await $api.post('http://localhost:3000/pdf/upload', formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		});
		console.log(response);
		await fetchAllPdfs();
	} catch (error) {
		console.error('Error uploading file:', error);
	}
}

async function fetchAllPdfs() {
	try {
		const data: any = await $api.get('http://localhost:3000/pdf/all');
		console.log('fetch all pdfs: ', data.hits.hits);
		pdfs.value = data.hits.hits;
	} catch (error) {
		console.error('Error fetching PDFs:', error);
	}
}

onMounted(() => fetchAllPdfs());
</script>

<style lang="scss" scoped>
.form {
	margin-bottom: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	label {
		margin: 20px;
	}

	input {
		cursor: pointer;
		padding: 12px;
		margin: 20px;
		border: solid 1px black;
		width: 50%;
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
	margin-bottom: 20px;
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
}
</style>
