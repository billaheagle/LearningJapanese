<template>
	<div>
		<v-card outlined>
			<v-card-title><h2>{{text.title}} ({{dictionaryLength}})</h2></v-card-title>
			<v-card-actions class="mb-n4">
				<v-row v-if="!state.start">
					<v-col cols="12">
						<v-btn block color="success" @click="start">{{text.button}}</v-btn>
					</v-col>
				</v-row>
				<v-row v-if="state.start">
					<v-col cols="6">
						<v-btn outlined block color="secondary" @click="hide">{{text.button2}}</v-btn>
					</v-col>
					<v-col cols="6">
						<v-btn outlined block color="secondary" @click="suffle">{{text.button3}}</v-btn>
					</v-col>
				</v-row>
			</v-card-actions>
			<v-card-text class="mb-n4">
				<v-row v-if="state.start">
					<v-col cols="3" v-for="(item, i) in dictionary" :key="i">
						<v-card outlined>
							<v-card-text class="text-center">
								<h1 class="black--text" v-if="state.show" >{{item.kanji}}</h1>
								<v-divider class="my-2" v-if="state.show" />
								<h5 class="mb-n1">{{mean(item)}}</h5>
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
				title: 'List of Kanji',
				button: 'Start',
				button2: 'Show Kanji',
				button3: 'Suffle Words'
			},
			state: {
				start: false,
				show: false,
			},
			dictionary: [],
		}),
		created() {
			this.dictionary = this.dict
			//this.dictionary = this.suffling(this.dict)
		},
		computed: {
			...mapGetters({
				dict: 'wordsN4/getHasKanji',
				dictionaryLength: 'wordsN4/getHasKanjiLength',
			}),
		},
		methods: {
			hide() {
				if(!this.state.show) {
					this.text.button2 = 'Hide Kanji'
					this.state.show = !this.state.show
				} else {
					this.text.button2 = 'Show Kanji'
					this.state.show = !this.state.show
				}
			},
			start() {
				this.state.start = !this.state.start
			},
			suffling(arr) {
				let suffleArray = arr
				for(let i = suffleArray.length - 1; i > 0; i--){
					const j = Math.floor(Math.random() * i)
					const temp = suffleArray[i]
					suffleArray[i] = suffleArray[j]
					suffleArray[j] = temp
				}
				return suffleArray
			},
			suffle() {
				this.dictionary = this.suffling(this.dict)
				this.state.start = !this.state.start
				this.text.button2 = 'Show Kanji'
				this.state.show = false
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