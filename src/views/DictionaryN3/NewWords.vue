<template>
	<div>
		<v-card outlined>
			<v-card-title><h2>{{text.title}} ({{dictionaryLength}})</h2></v-card-title>
			<v-card-text class="mb-n4">
				<v-row>
					<v-col cols="3" v-for="(item, i) in dictionary" :key="i">
						<v-card outlined>
							<v-card-text class="text-center">
								<h1 class="black--text">{{kanji(item)}}</h1>
								<v-divider class="my-2" />
								<h3 class="primary--text">{{item.spell}}</h3>
								<v-divider class="my-2" />
								<h5 class="mb-n2">{{mean(item)}}</h5>
							</v-card-text>
						</v-card>
					</v-col>
				</v-row>
			</v-card-text>
		</v-card>
	</div>
</template>
<script>
	import { mapGetters } from 'vuex'
	export default {
		props: {
			source: String,
		},
		data: () => ({
			text: {
				title: 'New Vocabulary',
			},
		}),
		computed: {
			...mapGetters({
				dictionary: 'wordsN4/getNewDictionary',
				dictionaryLength: 'wordsN4/getNewDictionaryLength',
			}),
		},
		methods: {
			kanji(item) {
				if(item.kanji == null || item.kanji == '') return item.spell
				return item.kanji
			},
			mean(item) {
				return item.mean.join(', ') + this.note(item)
			},
			note(item) {
				if(item.note != '') return ' | Note: (' + item.note + ')'
				return ''
			}
		}
	}
</script>
<style scoped></style>