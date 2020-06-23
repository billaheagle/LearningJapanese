<template>
	<div>
		<v-card outlined>
			<v-card-title><h2>{{text.title}}</h2></v-card-title>
			<v-divider class="mx-4" />
			<v-card-text class="mb-n4" v-if="!state.start">
				<v-row>
					<v-col cols="4">
						<v-select dense v-model="state.qty" :items="state.qtyItem" :rules="[v => !!v || 'Number of Question is required']" label="Number of Question" required></v-select>
					</v-col>
					<v-col cols="4">
						<v-select dense v-model="state.timer" :items="state.timerItem" :rules="[v => !!v || 'Timer is required']" label="Timer" required></v-select>
					</v-col>
					<v-col cols="2">
						<v-btn small block color="primary" dark @click="selectAll">{{text.button1}}</v-btn>
					</v-col>
					<v-col cols="2">
						<v-btn small block color="secondary" dark @click="clearAll">{{text.button2}}</v-btn>
					</v-col>
					<v-col cols="12" class="mt-n12">
						<v-row>
							<v-col cols="3" v-for="(item, i) in katakana" :key="i" class="mb-n8">
								<v-checkbox v-model="selected" :label="word(item)" :value="`${i}`" color="success"></v-checkbox>
							</v-col>
						</v-row>
					</v-col>
				</v-row>
			</v-card-text>
			<v-card-text v-if="state.start">
				<v-container id="scroll-target" style="max-height: 550px" class="overflow-y-auto">
				<v-row v-scroll:#scroll-target="onScroll" align="center" justify="center" style="height: 400px">
					<v-col cols="6" v-for="(item, i) in katakanas" :key="i" class="mb-n4">
						<v-row>
							<v-col cols="4" class="mt-1">
								<h2>{{item}}</h2>
							</v-col>
							<v-col cols="8">
								<v-text-field dense v-model="answer[i]" :success-messages="checkSuccess(i)" :error-messages="checkError(i)" :readonly="state.finish"></v-text-field>
							</v-col>
						</v-row>
					</v-col>
				</v-row>
				</v-container>
			</v-card-text>
			<v-card-actions>
				<v-btn block color="success" @click="start" v-if="!state.start" :disabled="!intro">{{text.button3}}</v-btn>
			</v-card-actions>
			<v-card-actions>
				<v-btn block color="success" @click="check" v-if="state.start && !state.finish" :disabled="!checkAns">{{text.button4}}</v-btn>
			</v-card-actions>
			<v-card-actions>
				<v-btn block color="secondary" @click="reload" v-if="state.start">{{text.button5}}</v-btn>
			</v-card-actions>
		</v-card>
		<v-card outlined v-if="state.finish" class="mt-5">
			<v-card-title><h2>{{text.title2}}</h2></v-card-title>
			<v-divider class="mx-4" />
			<v-card-text>
				<v-row class="text-center">
					<v-col cols="4">
						<h1 :class="scoreColor">{{score}}</h1> Total Skor
					</v-col>
					<v-col cols="4">
						<h1><span class="success--text">{{state.trueAns}}</span> / {{totalAns}}</h1> Jumlah Pertanyaan benar
					</v-col>
					<v-col cols="4">
						<h1 class="primary--text">60 Detik</h1> Jumlah waktu yang dibutuhkan
					</v-col>
				</v-row>
			</v-card-text>
		</v-card>
	</div>
</template>
<script>
	import { mapActions, mapGetters } from 'vuex'
	export default {
		props: {
			source: String
		},
		data: () => ({
			switch1: true,
			selected: [],
			state: {
				start: false,
				finish: false,
				trueAns: 0,
				qty: null,
				qtyItem: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
				timer: null,
				timerItem: ['1 Minutes', '5 Minutes', '10 Minutes', '15 Minutes', '20 Minutes', '25 Minutes', '30 Minutes']
			},
			text: {
				title: 'Katakana to Romaji',
				title2: 'Evaluation',
				button1: 'Select All',
				button2: 'Clear All',
				button3: 'Start',
				button4: 'Check',
				button5: 'Reload',
			},
			katakanas: [],
			romajis: [],
			answer: []
		}),
		created() {
		},
		computed: {
			...mapGetters({
				katakana: 'letters/getKatakana',
				katakanaIndex: 'letters/getKatakanaIndex',
			}),
			scoreColor() {
				if(this.score >= 75) return 'success--text'
				else if(this.score >= 50) return 'orange--text'
				else return 'red--text'
			},
			score() {
				return this.state.trueAns / this.katakanas.length * 100
			},
			totalAns() {
				return this.katakanas.length
			},
			intro() {
				return (this.state.timer && this.state.qty && this.selected.length > 0)
			},
			checkAns() {
				if(this.state.start) return (this.answer.length == this.katakanas.length)
				return true
			}
		},
		methods: {
			...mapActions({
				setAlert: 'alert/set'
			}),
			start() {
				this.state.start = !this.state.start
				this.text.button3 = "Check"
				var temp = []
				for (var i = 0; i < this.selected.length; i++) {
					temp = temp.concat(this.katakanaIndex(this.selected[i]))
				} 
				for (var j = 0; j < this.state.qty; j++) {
					var katakana_sentence = ""
					var romaji_sentence = ""
					var rand = Math.floor(Math.random() * (5 - 3 + 1) ) + 3
					for (var k = 0; k < rand; k++) {
						var idx = Math.floor(Math.random() * (temp.length));
						katakana_sentence = katakana_sentence.concat(temp[idx].katakana)
						romaji_sentence = romaji_sentence.concat(temp[idx].romaji)
					}
					this.katakanas = this.katakanas.concat(katakana_sentence)
					this.romajis = this.romajis.concat(romaji_sentence)
				}
			},
			check() {
				this.state.finish = !this.state.finish
				for (var x = 0; x < this.romajis.length; x++) {
					if(this.romajis[x].toLowerCase() == this.answer[x].toLowerCase()) this.state.trueAns++
				} 
			},
			reload() {
				this.katakanas = []
				this.romajis = []
				this.selected = []
				this.answer = []
				this.state.qty = null
				this.state.timer = null
				this.text.button3 = "Start"
				this.state.trueAns = 0
				this.state.start = !this.state.start
				if(this.state.finish) this.state.finish = !this.state.finish
			},
			checkSuccess(i) {
				if(this.state.finish) {
					if(this.romajis[i].toLowerCase() == this.answer[i].toLowerCase()) return this.romajis[i]
				}
				return ''
			},
			checkError(i) {
				if(this.state.finish) {
					if(this.romajis[i].toLowerCase() != this.answer[i].toLowerCase()) return this.romajis[i]
				}
				return ''
			},
			selectAll () {
				this.selected = []
				for (var i = 0; i < this.katakana.length; i++) {
					this.selected.push(i.toString())
				} 
			},
			word(item) {
				var letters = ''
				for(let i = 0; i < item.length; i++) {
					letters += item[i].katakana + ' '
				}
				return letters
			},
			clearAll() {
				this.selected = []
			},
			onScroll() {
			}
		}
	}
</script>
<style scoped></style>