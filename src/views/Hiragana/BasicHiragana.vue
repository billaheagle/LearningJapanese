<template>
	<div>
		<v-row>
			<v-col cols="12" v-for="(obj, i) in hiragana" :key="i">
				<v-divider v-if="i == 0 || i == 11 || i == 16"/>
				<h1 class="text-center" v-if="i == 0 || i == 11 || i == 16">{{title(i)}}</h1>
				<v-divider v-if="i == 0 || i == 11 || i == 16"/>
				<v-row class="mb-n6 mx-8">
					<v-col cols="2" v-for="(item, j) in obj" :key="j" class="mx-4">
						<v-card outlined>
							<v-card-text class="text-center">
								<h1 class="black--text">{{item.hiragana}}</h1>
								<v-divider class="my-2" />
								<h3 class="primary--text">{{item.romaji}}</h3>
							</v-card-text>
						</v-card>
					</v-col>
				</v-row>
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
		},
		methods: {
			title(i) {
				if(i == 0) return 'Basic Hiragana'
				else if(i == 11) return 'Dakuon & Handakuon'
				else if(i == 16) return 'Youon'
			}
		}
	}
</script>
<style scoped></style>