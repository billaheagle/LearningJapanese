export default {
	namespaced: true,
	state: {
		dictionary: [
			//{kanji: '', spell: '', mean: [''], note: '', new:true},
		],
	},
	getters: {
		getDictionary: state => {
			return state.dictionary
		},
		getDictionaryIndex: (state) => (index) => {
			return state.dictionary[index]
		},
		getDictionaryLength: state => {
			return state.dictionary.length
		},
		getHasKanji: state => {
			let hasKanji = []
			for(let i = 0; i < state.dictionary.length; i++) {
				if(state.dictionary[i].kanji != '') hasKanji.push(state.dictionary[i]) 
			}
			return hasKanji
		},
		getHasKanjiLength: state => {
			let length = 0
			for(let i = 0; i < state.dictionary.length; i++) {
				if(state.dictionary[i].kanji != '') length++
			}
			return length
		},
		getNewDictionary: state => {
			let newDictionary = []
			for(let i = 0; i < state.dictionary.length; i++) {
				if(state.dictionary[i].new) newDictionary.push(state.dictionary[i]) 
			}
			return newDictionary
		},
		getNewDictionaryLength: state => {
			let length = 0
			for(let i = 0; i < state.dictionary.length; i++) {
				if(state.dictionary[i].new) length++
			}
			return length
		},
	},
	mutations: {

	},
	actions: {

	},
}
