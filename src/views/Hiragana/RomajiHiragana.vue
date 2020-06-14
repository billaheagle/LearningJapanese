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
							<v-col cols="3" v-for="(item, i) in romaji" :key="i" class="mb-n8">
								<v-checkbox v-model="selected" :label="`${item}`" :value="`${i}`" color="success"></v-checkbox>
							</v-col>
						</v-row>
					</v-col>
				</v-row>
			</v-card-text>
			<v-card-text v-if="state.start">
				<v-container id="scroll-target" style="max-height: 550px" class="overflow-y-auto">
				<v-row v-scroll:#scroll-target="onScroll" align="center" justify="center" style="height: 400px">
					<v-col cols="6" v-for="(item, i) in romajis" :key="i" class="mb-n4">
						<v-row>
							<v-col cols="4" class="mt-1">
								<h2>{{item}}</h2>
							</v-col>
							<v-col cols="8">
								<v-text-field dense :value="answer(i)" readonly></v-text-field>
							</v-col>
						</v-row>
					</v-col>
				</v-row>
				</v-container>
			</v-card-text>
			<v-card-actions>
				<v-btn block color="success" @click="check" :disabled="!intro">{{text.button3}}</v-btn>
			</v-card-actions>
			<v-card-actions>
				<v-btn block color="secondary" @click="reload" v-if="state.start">{{text.button4}}</v-btn>
			</v-card-actions>
		</v-card>
		<v-card outlined v-if="state.finish" class="mt-5">
			<v-card-title><h2>{{text.title2}}</h2></v-card-title>
			<v-divider class="mx-4" />
			<v-card-text>
				<v-row class="text-center">
					<v-col cols="12">
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
				qty: null,
				qtyItem: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
				timer: null,
				timerItem: ['1 Minutes', '5 Minutes', '10 Minutes', '15 Minutes', '20 Minutes', '25 Minutes', '30 Minutes']
			},
			text: {
				title: 'Romaji to Hiragana',
				title2: 'Evaluation',
				button1: 'Select All',
				button2: 'Clear All',
				button3: 'Start',
				button4: 'Reload',
			},
			hiraganas: [],
			romajis: [],
		}),
		created() {
		},
		computed: {
			...mapGetters({
				hiragana: 'letters/getHiragana',
				hiraganaIndex: 'letters/getHiraganaIndex',
				romaji: 'letters/getRomaji',
				romajiIndex: 'letters/getRomajiIndex'
			}),
			scoreColor() {
				if(this.score >= 75) return 'success--text'
				else if(this.score >= 50) return 'orange--text'
				else return 'red--text'
			},
			score() {
				return this.state.trueAns / this.hiraganas.length * 100
			},
			totalAns() {
				return this.hiraganas.length
			},
			intro() {
				return (this.state.timer && this.state.qty && this.selected.length > 0)
			}
		},
		methods: {
			...mapActions({
				setAlert: 'alert/set'
			}),
			check() {
				if(this.state.start) {
					this.state.finish = !this.state.finish
				} else {
					this.state.start = !this.state.start
					this.text.button3 = "Check"
					var temp = []
					var temp2 = []
					for (var i = 0; i < this.selected.length; i++) {
						temp = temp.concat(this.hiraganaIndex(this.selected[i]))
						temp2 = temp2.concat(this.romajiIndex(this.selected[i]))
					} 
					for (var j = 0; j < this.state.qty; j++) {
						var hiragana_sentence = ""
						var romaji_sentence = ""
						var rand = Math.floor(Math.random() * (5 - 3 + 1) ) + 3
						for (var k = 0; k < rand; k++) {
							var idx = Math.floor(Math.random() * (temp.length));
							hiragana_sentence = hiragana_sentence.concat(temp[idx])
							romaji_sentence = romaji_sentence.concat(temp2[idx] + ' ')
						}
						this.hiraganas = this.hiraganas.concat(hiragana_sentence)
						this.romajis = this.romajis.concat(romaji_sentence)
					}
				}
			},
			answer(i) {
				if(this.state.finish) {
					return this.hiraganas[i]
				}
				return ''
			},
			reload() {
				this.hiraganas = []
				this.romajis = []
				this.selected = []
				this.state.qty = null
				this.state.timer = null
				this.text.button3 = "Start"
				this.state.start = !this.state.start
				this.state.finish = !this.state.finish
			},
			selectAll () {
				this.selected = []
				for (var i = 0; i < this.hiragana.length; i++) {
					this.selected.push(i.toString())
				} 
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