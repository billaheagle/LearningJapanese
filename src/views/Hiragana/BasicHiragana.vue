<template>
	<div>
		<b>Basic Hiragana</b>
		<v-row>
			<v-col cols="4" v-for="(item, i) in hiragana" :key="i">
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
				hiragana: 'letters/getHiragana',
			}),
		}
	}
</script>
<style scoped></style>