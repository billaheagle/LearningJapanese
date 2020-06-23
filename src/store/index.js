import Vue from 'vue'
import Vuex from 'vuex'
import alert from '@/store/alert'
import letters from '@/store/letters'
import words from '@/store/words'

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
		words,
	}
})
