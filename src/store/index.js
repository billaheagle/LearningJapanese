import Vue from 'vue'
import Vuex from 'vuex'
import alert from '@/store/alert'
import letters from '@/store/letters'
import wordsN5 from '@/store/wordsN5'
import wordsN4 from '@/store/wordsN4'
import wordsN3 from '@/store/wordsN3'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		
	},
	getters: {

	},
	mutations: {

	},
	actions: {

	},
	modules: {
		alert,
		letters,
		wordsN5,
		wordsN4,
		wordsN3,
	}
})
