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
			//=== BEGIN DICTIONARY N5 ==============================================================================
			{
				path: 'dictionary-n5/list-of-words',
				name: 'Dictionnary',
				component: () => import( /*webpackChunkName: "ListOfWords"*/ '../views/DictionaryN5/ListOfWords.vue')
			},
			{
				path: 'dictionary-n5/list-of-kanji',
				name: 'Has-Kanji',
				component: () => import( /*webpackChunkName: "ListOfKanji"*/ '../views/DictionaryN5/ListOfKanji.vue')
			},
			{
				path: 'dictionary-n5/new-words',
				name: 'New-Words',
				component: () => import( /*webpackChunkName: "NewWords"*/ '../views/DictionaryN5/NewWords.vue')
			},
			{
				path: 'dictionary-n5/practice-words',
				name: 'Practice Words',
				component: () => import( /*webpackChunkName: "PracticeWords"*/ '../views/DictionaryN5/PracticeWords.vue')
			},
			{
				path: 'dictionary-n5/practice-new-words',
				name: 'Practice New Words',
				component: () => import( /*webpackChunkName: "PracticeNewWords"*/ '../views/DictionaryN5/PracticeNewWords.vue')
			},
			{
				path: 'dictionary-n5/step-by-step-words',
				name: 'Practice New Words',
				component: () => import( /*webpackChunkName: "StepByStepWords"*/ '../views/DictionaryN5/StepByStepWords.vue')
			},
			//=== END DICTIONARY N5 ================================================================================
			//=== BEGIN DICTIONARY N4 ==============================================================================
			{
				path: 'dictionary-n4/list-of-words',
				name: 'Dictionnary',
				component: () => import( /*webpackChunkName: "ListOfWords"*/ '../views/DictionaryN4/ListOfWords.vue')
			},
			{
				path: 'dictionary-n4/list-of-kanji',
				name: 'Has-Kanji',
				component: () => import( /*webpackChunkName: "ListOfKanji"*/ '../views/DictionaryN4/ListOfKanji.vue')
			},
			{
				path: 'dictionary-n4/new-words',
				name: 'New-Words',
				component: () => import( /*webpackChunkName: "NewWords"*/ '../views/DictionaryN4/NewWords.vue')
			},
			{
				path: 'dictionary-n4/practice-words',
				name: 'Practice Words',
				component: () => import( /*webpackChunkName: "PracticeWords"*/ '../views/DictionaryN4/PracticeWords.vue')
			},
			{
				path: 'dictionary-n4/practice-new-words',
				name: 'Practice New Words',
				component: () => import( /*webpackChunkName: "PracticeNewWords"*/ '../views/DictionaryN4/PracticeNewWords.vue')
			},
			{
				path: 'dictionary-n4/step-by-step-words',
				name: 'Practice New Words',
				component: () => import( /*webpackChunkName: "StepByStepWords"*/ '../views/DictionaryN4/StepByStepWords.vue')
			},
			//=== END DICTIONARY N4 ================================================================================
			//=== BEGIN DICTIONARY N4 ==============================================================================
			{
				path: 'dictionary-n3/list-of-words',
				name: 'Dictionnary',
				component: () => import( /*webpackChunkName: "ListOfWords"*/ '../views/DictionaryN3/ListOfWords.vue')
			},
			{
				path: 'dictionary-n3/list-of-kanji',
				name: 'Has-Kanji',
				component: () => import( /*webpackChunkName: "ListOfKanji"*/ '../views/DictionaryN3/ListOfKanji.vue')
			},
			{
				path: 'dictionary-n3/new-words',
				name: 'New-Words',
				component: () => import( /*webpackChunkName: "NewWords"*/ '../views/DictionaryN3/NewWords.vue')
			},
			{
				path: 'dictionary-n3/practice-words',
				name: 'Practice Words',
				component: () => import( /*webpackChunkName: "PracticeWords"*/ '../views/DictionaryN3/PracticeWords.vue')
			},
			{
				path: 'dictionary-n3/practice-new-words',
				name: 'Practice New Words',
				component: () => import( /*webpackChunkName: "PracticeNewWords"*/ '../views/DictionaryN3/PracticeNewWords.vue')
			},
			{
				path: 'dictionary-n3/step-by-step-words',
				name: 'Practice New Words',
				component: () => import( /*webpackChunkName: "StepByStepWords"*/ '../views/DictionaryN3/StepByStepWords.vue')
			},
			//=== END DICTIONARY N4 ================================================================================
			//=== BEGIN QUIZ ====================================================================================
			{
				path: 'quiz/number',
				name: 'Number',
				component: () => import( /*webpackChunkName: "Number"*/ '../views/Quiz/Number.vue')
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
