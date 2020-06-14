import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Homepage',
		component: () => import( /*webpackChunkName: "about"*/ '../views/Homepage.vue'),
		children: [
			//=== BEGIN ROUTE HOMEPAGE ==========================================================================
			{
				path: 'introduction',
				name: 'Introduction',
				component: () => import( /*webpackChunkName: "about"*/ '../views/Introduction.vue')
			},
			//=== END ROUTE HOMEPAGE ============================================================================
			//=== BEGIN ROUTE HIRAGANA ==========================================================================
			{
				path: 'hiragana/basic-hiragana',
				name: 'Basic-Hiragana',
				component: () => import( /*webpackChunkName: "about"*/ '../views/Hiragana/BasicHiragana.vue')
			},
			{
				path: 'hiragana/hiragana-romaji',
				name: 'Hiragana-Romaji',
				component: () => import( /*webpackChunkName: "about"*/ '../views/Hiragana/HiraganaRomaji.vue')
			},
			{
				path: 'hiragana/romaji-hiragana',
				name: 'Romaji-Hiragana',
				component: () => import( /*webpackChunkName: "about"*/ '../views/Hiragana/RomajiHiragana.vue')
			},
			//=== END ROUTE HIRAGANA ============================================================================
			//=== BEGIN ROUTE KATAKANA ==========================================================================
			{
				path: 'katakana/basic-katakana',
				name: 'Basic-Katakana',
				component: () => import( /*webpackChunkName: "about"*/ '../views/Katakana/BasicKatakana.vue')
			},
			{
				path: 'katakana/katakana-romaji',
				name: 'Katakana-Romaji',
				component: () => import( /*webpackChunkName: "about"*/ '../views/Katakana/KatakanaRomaji.vue')
			},
			{
				path: 'katakana/romaji-katakana',
				name: 'Romaji-Katakana',
				component: () => import( /*webpackChunkName: "about"*/ '../views/Katakana/RomajiKatakana.vue')
			},
			//=== END ROUTE KATAKANA ============================================================================
			//=== BEGIN ROUTE KANJI =============================================================================
			{
				path: 'kanji/basic-kanji',
				name: 'Basic-Kanji',
				component: () => import( /*webpackChunkName: "about"*/ '../views/Kanji/BasicKanji.vue')
			},
			{
				path: 'kanji/kanji-n1',
				name: 'Kanji-N1',
				component: () => import( /*webpackChunkName: "about"*/ '../views/Kanji/KanjiN1.vue')
			},
			{
				path: 'kanji/kanji-n2',
				name: 'Kanji-N2',
				component: () => import( /*webpackChunkName: "about"*/ '../views/Kanji/KanjiN2.vue')
			},
			{
				path: 'kanji/kanji-n3',
				name: 'Kanji-N3',
				component: () => import( /*webpackChunkName: "about"*/ '../views/Kanji/KanjiN3.vue')
			},
			{
				path: 'kanji/kanji-n4',
				name: 'Kanji-N4',
				component: () => import( /*webpackChunkName: "about"*/ '../views/Kanji/KanjiN4.vue')
			},
			{
				path: 'kanji/kanji-n5',
				name: 'Kanji-N5',
				component: () => import( /*webpackChunkName: "about"*/ '../views/Kanji/KanjiN5.vue')
			},
			//=== END ROUTE KANJI ===============================================================================
		]
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router