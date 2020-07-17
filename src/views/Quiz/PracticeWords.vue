<template>
	<div>
		<v-card outlined>
			<v-card-title><h2>{{text.title}} ({{dictLength}})</h2></v-card-title>
			<v-card-text class="mb-n4" v-if="state.start">
				<v-row>
					<v-col cols="3" v-for="(item, i) in dictionary" :key="i">
						<v-card outlined>
							<v-card-text class="text-center">
								<h1 class="black--text">{{kanji(item)}}</h1>
								<v-divider class="my-2" />
								<h3 class="primary--text mb-n2" v-if="state.finish">{{item.spell}}</h3>
								<v-text-field class="my-n2" v-model="answer[i]" :success-messages="checkSuccess(i)" :error-messages="checkError(i)" :readonly="state.finish"></v-text-field>
							</v-card-text>
						</v-card>
					</v-col>
				</v-row>
			</v-card-text>
			<v-card-actions v-if="!state.start">
				<v-btn block color="success" @click="start">{{text.button}}</v-btn>
			</v-card-actions>
			<v-card-actions v-if="state.start && !state.finish">
				<v-btn block color="success" @click="check" :disabled="!checkAns">{{text.button2}}</v-btn>
			</v-card-actions>
			<v-card-actions v-if="state.start">
				<v-btn block color="secondary" @click="reload">{{text.button3}}</v-btn>
			</v-card-actions>
		</v-card>
		<v-card outlined v-if="state.finish" class="mt-5">
			<v-card-title><h2>{{text.title2}}</h2></v-card-title>
			<v-divider class="mx-4" />
			<v-card-text>
				<v-row class="text-center">
					<v-col cols="6">
						<h1 :class="scoreColor">{{score}}</h1> Total Skor
					</v-col>
					<v-col cols="6">
						<h1><span class="success--text">{{state.trueAns}}</span> / {{totalAns}}</h1> Jumlah Pertanyaan benar
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
			state: {
				start: false,
				finish: false,
				trueAns: 0,
			},
			text: {
				title: 'Practice Words',
				button: 'Start',
				button2: 'Check',
				button3: 'Reload',
			},
			answer: [],
			dictionary: []
		}),
		created() {
			this.dictionary = this.dict
		},
		computed: {
			...mapGetters({
				dict: 'words/getDictionary',
				dictLength: 'words/getDictionaryLength',
			}),
			score() {
				return Math.round(this.state.trueAns / this.dictionary.length * 100)
			},
			scoreColor() {
				if(this.score >= 75) return 'success--text'
				else if(this.score >= 50) return 'orange--text'
				else return 'red--text'
			},
			totalAns() {
				return this.dictionary.length
			},
			checkAns() {
				if(this.state.start) return (this.answer.length == this.dictionary.length)
				return true
			}
		},
		methods: {
			start() {
				this.state.start = !this.state.start
				this.text.button = "Check"
				this.dictionary = this.suffle(this.dictionary)
			},
			check() {
				this.state.finish = !this.state.finish
				for (var x = 0; x < this.dictionary.length; x++) {
					for (var y = 0; y < this.dictionary[x].mean.length; y++) {
						if(this.dictionary[x].mean[y].toLowerCase() == this.answer[x].toLowerCase()) {
							this.state.trueAns++
							break
						}
					}
				} 
			},
			suffle(arr) {
				let suffleArray = arr
				for(let i = suffleArray.length - 1; i > 0; i--){
					const j = Math.floor(Math.random() * i)
					const temp = suffleArray[i]
					suffleArray[i] = suffleArray[j]
					suffleArray[j] = temp
				}
				return suffleArray
			},
			reload() {
				this.answer = []
				this.text.button = "Start"
				this.state.trueAns = 0
				this.state.start = !this.state.start
				if(this.state.finish) this.state.finish = !this.state.finish
			},
			checkSuccess(i) {
				if(this.state.finish) {
					var note = ''
					for (var a = 0; a < this.dictionary[i].mean.length; a++) {
						if(this.dictionary[i].mean[a].toLowerCase() == this.answer[i].toLowerCase()) {
							if(this.dictionary[i].note != '') note = ' | Note: (' + this.dictionary[i].note + ')'
							return this.dictionary[i].mean.join(', ') + note
						}
					}
				}
				return ''
			},
			checkError(i) {
				if(this.state.finish) {
					var err = true
					var note = ''
					for (var b = 0; b < this.dictionary[i].mean.length; b++) {
						if(this.dictionary[i].mean[b].toLowerCase() == this.answer[i].toLowerCase()) {
							err = false
						}
					}
					if(this.dictionary[i].note != '') note = ' | Note: (' + this.dictionary[i].note + ')'
					if(err) return this.dictionary[i].mean.join(', ') + note
				}
				return ''
			},
			kanji(item) {
				if(item.kanji == null || item.kanji == '') return item.spell
				return item.kanji
			}
		}
	}
</script>
<style scoped></style>