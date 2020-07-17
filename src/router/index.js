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
			//=== BEGIN DICTIONARY ==============================================================================
			{
				path: 'dictionary/list-of-words',
				name: 'Dictionnary',
				component: () => import( /*webpackChunkName: "ListOfWords"*/ '../views/Dictionary/ListOfWords.vue')
			},
			{
				path: 'dictionary/has-kanji',
				name: 'Has-Kanji',
				component: () => import( /*webpackChunkName: "Practice"*/ '../views/Dictionary/HasKanji.vue')
			},
			{
				path: 'dictionary/new-words',
				name: 'New-Words',
				component: () => import( /*webpackChunkName: "NewWords"*/ '../views/Dictionary/NewWords.vue')
			},
			//=== END DICTIONARY ================================================================================
			//=== BEGIN QUIZ ====================================================================================
			{
				path: 'quiz/number',
				name: 'Number',
				component: () => import( /*webpackChunkName: "Number"*/ '../views/Quiz/Number.vue')
			},
			{
				path: 'quiz/practice-words',
				name: 'Practice Words',
				component: () => import( /*webpackChunkName: "Practice"*/ '../views/Quiz/PracticeWords.vue')
			},
			{
				path: 'quiz/practice-new-words',
				name: 'Practice New Words',
				component: () => import( /*webpackChunkName: "Practice"*/ '../views/Quiz/PracticeNewWords.vue')
			},
			{
				path: 'quiz/hiragana-katakana',
				name: 'Dictionnary',
				component: () => import( /*webpackChunkName: "HiraganaKatakana"*/ '../views/Quiz/HiraganaKatakana.vue')
			},
			{
				path: 'quiz/vocabulary',
				name: 'Has-Kanji',
				component: () => import( /*webpackChunkName: "Vocabulary"*/ '../views/Quiz/Vocabulary.vue')
			},
			//=== END QUIZ ======================================================================================
		]
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router
