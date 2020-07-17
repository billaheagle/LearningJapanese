<template>
	<div>
		<v-card outlined>
			<v-card-title><h2>{{text.title}}</h2></v-card-title>
			<v-divider class="mx-4" />
			<v-card-text class="mb-n4">
				<v-row>
					<v-col cols="2" class="mt-3 text-center">
						<h2>Number :</h2>
					</v-col>
					<v-col cols="8">
						<v-text-field outlined dense :value="question" disabled></v-text-field>
					</v-col>
					<v-col cols="2">
						<v-btn block color="primary" dark @click="generate">{{text.button1}}</v-btn>
					</v-col>
				</v-row>
				<v-divider class="mx-4 mb-4" />
				<v-row>
					<v-col cols="2" class="mt-3 text-center">
						<h2>Answer :</h2>
					</v-col>
					<v-col cols="8">
						<v-text-field outlined dense v-model="answer"></v-text-field>
					</v-col>
					<v-col cols="2">
						<v-btn block color="primary" @click="check" :disabled="!start">{{text.button2}}</v-btn>
					</v-col>
				</v-row>
			</v-card-text>
		</v-card>
		<v-alert :type="status" class="mt-4" v-if="finish">{{penulisan}}</v-alert>
	</div>
</template>
<script>
	export default {
		props: {
			source: String,
		},
		data: () => ({
			satuan: [
				'ichi', 'ni', 'san', 'yon', 'go', 'roku', 'nana', 'hachi', 'kyuu'
			],
			puluhan: [
				'juu', 'nijuu', 'sanjuu', 'yonjuu', 'gojuu', 'rokujuu', 'nanajuu', 'hachijuu', 'kyuujuu'
			],
			ratusan: [
				'hyaku', 'nihyaku', 'sanbyaku', 'yonhyaku', 'gohyaku', 'roppyaku', 'nanahyaku', 'happyaku', 'kyuuhyaku'
			],
			ribuan: [
				'sen', 'nisen', 'sanzen', 'yonsen', 'gosen', 'rokusen', 'nanasen', 'hassen', 'kyuusen'
			],
			puluh_ribuan: [
				'ichiman', 'niman', 'sanman', 'yonman', 'goman', 'rokuman', 'nanaman', 'hachiman', 'kyuuman'
			],
			tens_of_thousands: 0,
			thousand: 0,
			hundreds: 0,
			dozens: 0,
			unit: 0,
			question: null,
			hint: null,
			answer: null,
			status: null,
			finish: false,
			start: false,
			penulisan: '',
			text: {
				title: 'Number',
				button1: 'Generate',
				button2: 'Submit'
			}
		}),
		computed: {
		},
		methods: {
			check() {
				if(this.answer.toLowerCase() == this.penulisan) this.status = 'success'
				else this.status = 'error'
				this.start = false
				this.finish = true
			},
			generate() {
				var random = Math.floor(Math.random() * 99999) + 1
				this.number(random)
				this.question = random
				this.finish = false
				this.answer = null
				this.start = true
			},
			reset() {
				this.tens_of_thousands = 0
				this.thousand = 0
				this.hundreds = 0
				this.dozens = 0
				this.unit = 0
				this.penulisan = ''
			},
			number(num) {
				this.reset()
				var temp = num
				var number = ''
				if(Math.floor(num / 10000) > 0) {
					this.tens_of_thousands = Math.floor(num / 10000)
					num -= this.tens_of_thousands * 10000
					if(num > 0) {
						number += (this.tens_of_thousands * 10000) + ' + '
						this.penulisan += this.puluh_ribuan[this.tens_of_thousands - 1] + ' '
					}
					else {
						number += (this.tens_of_thousands * 10000)
						this.penulisan += this.puluh_ribuan[this.tens_of_thousands - 1]
					}
				}
				if(Math.floor(num / 1000) > 0) {
					this.thousand = Math.floor(num / 1000)
					num -= this.thousand * 1000
					if(num > 0) {
						number += (this.thousand * 1000) + ' + '
						this.penulisan += this.ribuan[this.thousand - 1] + ' '
					}
					else {
						number += (this.thousand * 1000)
						this.penulisan += this.ribuan[this.thousand - 1]
					}
				}
				if(Math.floor(num / 100) > 0) {
					this.hundreds = Math.floor(num / 100)
					num -= this.hundreds * 100
					if(num > 0) {
						number += (this.hundreds * 100) + ' + '
						this.penulisan +=  this.ratusan[this.hundreds - 1] + ' '
					}
					else {
						number += (this.hundreds * 100)
						this.penulisan +=  this.ratusan[this.hundreds - 1]
					}
				}
				if(Math.floor(num / 10) > 0) {
					this.dozens = Math.floor(num / 10)
					num -= this.dozens * 10
					if(num > 0) {
						number += (this.dozens * 10) + ' + '
						this.penulisan +=  this.puluhan[this.dozens - 1] + ' '
					}
					else {
						number += (this.dozens * 10)
						this.penulisan +=  this.puluhan[this.dozens - 1]
					}
				}
				if(num > 0) {
					this.unit = num
					num -= this.unit
					number += this.unit
					this.penulisan += this.satuan[this.unit - 1]
				}
				number += ' = ' + temp
				return number
			}
		}
	}
</script>
<style scoped></style>