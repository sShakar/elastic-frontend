<template>
	<div>
		<form class="form" @submit.prevent="onSubmit">
			<label for="file">Upload PDF file</label>
			<input ref="uploadField" name="file" type="file" />

			<button type="submit">Submit</button>
		</form>

		<h2>PDFs</h2>
		<ul>
			<li v-for="(pdf, index) in pdfs" :key="index">
				<a :href="`http://localhost:3000/${pdf._source.fileName}`" target="_blank">{{ pdf._source.title }}</a>
			</li>
		</ul>
	</div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { $api } from '@/services';

const uploadField = ref<HTMLInputElement | null>(null);
const pdfs = ref<any[]>([]);

async function onSubmit() {
	console.log(uploadField.value?.files![0]);
	const formData = new FormData();
	formData.append('file', uploadField.value?.files![0] as Blob);

	try {
		const response = await $api.post('http://localhost:3000/pdf/upload', formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		});
		console.log(response);
	} catch (error) {
		console.error('Error uploading file:', error);
	}
}

const fetchAllPdfs = async () => {
	try {
		const data: any = await $api.get('http://localhost:3000/pdf/all');
		console.log(data.hits.hits);
		pdfs.value = data.hits.hits;
	} catch (error) {
		console.error('Error fetching PDFs:', error);
	}
};

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
