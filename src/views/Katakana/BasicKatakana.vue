<template>
	<div>
		<b>Basic Katakana</b>
		<v-row>
			<v-col cols="4" v-for="(item, i) in katakana" :key="i">
				{{i}} - {{item}}
			</v-col>
		</v-row>
	</div>
</template>
<script>
	import { mapGetters } from 'vuex'
	export default {
		props: {
			source: String,
		},
		data: () => ({
			
		}),
		computed: {
			...mapGetters({
				katakana: 'letters/getKatakana',
			}),
		}
	}
</script>
<style scoped></style>