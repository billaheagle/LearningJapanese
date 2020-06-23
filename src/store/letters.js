export default {
	namespaced: true,
	state: {
		hiragana: [
			[{hiragana: 'あ', romaji: 'a'}, {hiragana: 'い', romaji: 'i'}, {hiragana: 'う', romaji: 'u'}, {hiragana: 'え', romaji: 'e'}, {hiragana: 'お', romaji: 'o'}],
			[{hiragana: 'か', romaji: 'ka'}, {hiragana: 'き', romaji: 'ki'}, {hiragana: 'く', romaji: 'ku'}, {hiragana: 'け', romaji: 'ke'}, {hiragana: 'こ', romaji: 'ko'}],
			[{hiragana: 'さ', romaji: 'sa'}, {hiragana: 'し', romaji: 'shi'}, {hiragana: 'す', romaji: 'su'}, {hiragana: 'せ', romaji: 'se'}, {hiragana: 'そ', romaji: 'so'}],
			[{hiragana: 'た', romaji: 'ta'}, {hiragana: 'ち', romaji: 'chi'}, {hiragana: 'つ', romaji: 'tsu'}, {hiragana: 'て', romaji: 'te'}, {hiragana: 'と', romaji: 'to'}],
			[{hiragana: 'な', romaji: 'na'}, {hiragana: 'に', romaji: 'ni'}, {hiragana: 'ぬ', romaji: 'nu'}, {hiragana: 'ね', romaji: 'ne'}, {hiragana: 'の', romaji: 'no'}],
			[{hiragana: 'は', romaji: 'ha'}, {hiragana: 'ひ', romaji: 'hi'}, {hiragana: 'ふ', romaji: 'fu'}, {hiragana: 'へ', romaji: 'he'}, {hiragana: 'ほ', romaji: 'ho'}],
			[{hiragana: 'ま', romaji: 'ma'}, {hiragana: 'み', romaji: 'mi'}, {hiragana: 'む', romaji: 'mu'}, {hiragana: 'め', romaji: 'me'}, {hiragana: 'も', romaji: 'mo'}],
			[{hiragana: 'や', romaji: 'ya'}, {hiragana: 'ゆ', romaji: 'yu'}, {hiragana: 'よ', romaji: 'yo'}],
			[{hiragana: 'ら', romaji: 'ra'}, {hiragana: 'り', romaji: 'ri'}, {hiragana: 'る', romaji: 'ru'}, {hiragana: 'れ', romaji: 're'}, {hiragana: 'ろ', romaji: 'ro'}],
			[{hiragana: 'わ', romaji: 'wa'}, {hiragana: 'を', romaji: 'wo'}],
			[{hiragana: 'ん', romaji: 'n'}],
			[{hiragana: 'が', romaji: 'ga'}, {hiragana: 'ぎ', romaji: 'gi'}, {hiragana: 'ぐ', romaji: 'gu'}, {hiragana: 'げ', romaji: 'ge'}, {hiragana: 'ご', romaji: 'go'}],
			[{hiragana: 'ざ', romaji: 'za'}, {hiragana: 'じ', romaji: 'ji'}, {hiragana: 'ず', romaji: 'zu'}, {hiragana: 'ぜ', romaji: 'ze'}, {hiragana: 'ぞ', romaji: 'zo'}],
			[{hiragana: 'だ', romaji: 'da'}, {hiragana: 'ぢ', romaji: 'ji'}, {hiragana: 'づ', romaji: 'zu'}, {hiragana: 'で', romaji: 'de'}, {hiragana: 'ど', romaji: 'do'}],
			[{hiragana: 'ば', romaji: 'ba'}, {hiragana: 'び', romaji: 'bi'}, {hiragana: 'ぶ', romaji: 'bu'}, {hiragana: 'べ', romaji: 'be'}, {hiragana: 'ぼ', romaji: 'bo'}],
			[{hiragana: 'ぱ', romaji: 'pa'}, {hiragana: 'ぴ', romaji: 'pi'}, {hiragana: 'ぷ', romaji: 'pu'}, {hiragana: 'ぺ', romaji: 'pe'}, {hiragana: 'ぽ', romaji: 'po'}],
			[{hiragana: 'きゃ', romaji: 'kya'}, {hiragana: 'きゅ', romaji: 'kyu'}, {hiragana: 'きょ', romaji: 'kyo'}],
			[{hiragana: 'しゃ', romaji: 'sha'}, {hiragana: 'しゅ', romaji: 'shu'}, {hiragana: 'しょ', romaji: 'sho'}],
			[{hiragana: 'ちゃ', romaji: 'cha'}, {hiragana: 'ちゅ', romaji: 'chu'}, {hiragana: 'ちょ', romaji: 'cho'}],
			[{hiragana: 'にゃ', romaji: 'nya'}, {hiragana: 'にゅ', romaji: 'nyu'}, {hiragana: 'にょ', romaji: 'nyo'}],
			[{hiragana: 'ひゃ', romaji: 'hya'}, {hiragana: 'ひゅ', romaji: 'hyu'}, {hiragana: 'ひょ', romaji: 'hyo'}],
			[{hiragana: 'みゃ', romaji: 'mya'}, {hiragana: 'みゅ', romaji: 'myu'}, {hiragana: 'みょ', romaji: 'myo'}],
			[{hiragana: 'りゃ', romaji: 'rya'}, {hiragana: 'りゅ', romaji: 'ryu'}, {hiragana: 'りょ', romaji: 'ryo'}],
			[{hiragana: 'ぎゃ', romaji: 'gya'}, {hiragana: 'ぎゅ', romaji: 'gyu'}, {hiragana: 'ぎょ', romaji: 'gyo'}],
			[{hiragana: 'じゃ', romaji: 'ja'}, {hiragana: 'じゅ', romaji: 'ju'}, {hiragana: 'じょ', romaji: 'jo'}],
			[{hiragana: 'ぢゃ', romaji: 'ja'}, {hiragana: 'ぢゅ', romaji: 'ju'}, {hiragana: 'ぢょ', romaji: 'jo'}],
			[{hiragana: 'びゃ', romaji: 'bya'}, {hiragana: 'びゅ', romaji: 'byu'}, {hiragana: 'びょ', romaji: 'byo'}],
			[{hiragana: 'ぴゃ', romaji: 'pya'}, {hiragana: 'ぴゅ', romaji: 'pyu'}, {hiragana: 'ぴょ', romaji: 'pyo'}]
		],
		katakana: [
			[{katakana: 'ア', romaji: 'a'}, {katakana: 'イ', romaji: 'i'}, {katakana: 'ウ', romaji: 'u'}, {katakana: 'エ', romaji: 'e'}, {katakana: 'オ', romaji: 'o'}],
			[{katakana: 'カ', romaji: 'ka'}, {katakana: 'キ', romaji: 'ki'}, {katakana: 'ク', romaji: 'ku'}, {katakana: 'ケ', romaji: 'ke'}, {katakana: 'コ', romaji: 'ko'}],
			[{katakana: 'サ', romaji: 'sa'}, {katakana: 'シ', romaji: 'shi'}, {katakana: 'シ', romaji: 'su'}, {katakana: 'セ', romaji: 'se'}, {katakana: 'ソ', romaji: 'so'}],
			[{katakana: 'タ', romaji: 'ta'}, {katakana: 'チ', romaji: 'chi'}, {katakana: 'ツ', romaji: 'tsu'}, {katakana: 'テ', romaji: 'te'}, {katakana: 'ト', romaji: 'to'}],
			[{katakana: 'ナ', romaji: 'na'}, {katakana: 'ニ', romaji: 'ni'}, {katakana: 'ヌ', romaji: 'nu'}, {katakana: 'ネ', romaji: 'ne'}, {katakana: 'ノ', romaji: 'no'}],
			[{katakana: 'ハ', romaji: 'ha'}, {katakana: 'ヒ', romaji: 'hi'}, {katakana: 'フ', romaji: 'fu'}, {katakana: 'ヘ', romaji: 'he'}, {katakana: 'ホ', romaji: 'ho'}],
			[{katakana: 'マ', romaji: 'ma'}, {katakana: 'ミ', romaji: 'mi'}, {katakana: 'ム', romaji: 'mu'}, {katakana: 'メ', romaji: 'me'}, {katakana: 'モ', romaji: 'mo'}],
			[{katakana: 'ヤ', romaji: 'ya'}, {katakana: 'ユ', romaji: 'yu'}, {katakana: 'ヨ', romaji: 'yo'}],
			[{katakana: 'ラ', romaji: 'ra'}, {katakana: 'リ', romaji: 'ri'}, {katakana: 'ル', romaji: 'ru'}, {katakana: 'レ', romaji: 're'}, {katakana: 'ロ', romaji: 'ro'}],
			[{katakana: 'ワ', romaji: 'wa'}, {katakana: 'ヲ', romaji: 'wo'}],
			[{katakana: 'ン', romaji: 'n'}],
			[{katakana: 'ガ', romaji: 'ga'}, {katakana: 'ギ', romaji: 'gi'}, {katakana: 'グ', romaji: 'gu'}, {katakana: 'ゲ', romaji: 'ge'}, {katakana: 'ゴ', romaji: 'go'}],
			[{katakana: 'ザ', romaji: 'za'}, {katakana: 'ジ', romaji: 'ji'}, {katakana: 'ズ', romaji: 'zu'}, {katakana: 'ゼ', romaji: 'ze'}, {katakana: 'ゾ', romaji: 'zo'}],
			[{katakana: 'ダ', romaji: 'da'}, {katakana: 'ヂ', romaji: 'ji'}, {katakana: 'ヅ', romaji: 'zu'}, {katakana: 'デ', romaji: 'de'}, {katakana: 'ド', romaji: 'do'}],
			[{katakana: 'バ', romaji: 'ba'}, {katakana: 'ビ', romaji: 'bi'}, {katakana: 'ブ', romaji: 'bu'}, {katakana: 'ベ', romaji: 'be'}, {katakana: 'ボ', romaji: 'bo'}],
			[{katakana: 'パ', romaji: 'pa'}, {katakana: 'ピ', romaji: 'pi'}, {katakana: 'プ', romaji: 'pu'}, {katakana: 'ペ', romaji: 'pe'}, {katakana: 'ポ', romaji: 'po'}],
			[{katakana: 'キャ', romaji: 'kya'}, {katakana: 'キュ', romaji: 'kyu'}, {katakana: 'キョ', romaji: 'kyo'}],
			[{katakana: 'シャ', romaji: 'sha'}, {katakana: 'シュ', romaji: 'shu'}, {katakana: 'ショ', romaji: 'sho'}],
			[{katakana: 'チャ', romaji: 'cha'}, {katakana: 'チュ', romaji: 'chu'}, {katakana: 'チョ', romaji: 'cho'}],
			[{katakana: 'ニャ', romaji: 'nya'}, {katakana: 'ニュ', romaji: 'nyu'}, {katakana: 'ニョ', romaji: 'nyo'}],
			[{katakana: 'ヒャ', romaji: 'hya'}, {katakana: 'ヒュ', romaji: 'hyu'}, {katakana: 'ヒョ', romaji: 'hyo'}],
			[{katakana: 'ミャ', romaji: 'mya'}, {katakana: 'ミュ', romaji: 'myu'}, {katakana: 'ミョ', romaji: 'myo'}],
			[{katakana: 'リャ', romaji: 'rya'}, {katakana: 'リュ', romaji: 'ryu'}, {katakana: 'リョ', romaji: 'ryo'}],
			[{katakana: 'ギャ', romaji: 'gya'}, {katakana: 'ギュ', romaji: 'gyu'}, {katakana: 'ギョ', romaji: 'gyo'}],
			[{katakana: 'ジャ', romaji: 'ja'}, {katakana: 'ジュ', romaji: 'ju'}, {katakana: 'ジョ', romaji: 'jo'}],
			[{katakana: 'ビャ', romaji: 'bya'}, {katakana: 'ビュ', romaji: 'byu'}, {katakana: 'ビョ', romaji: 'byo'}],
			[{katakana: 'ピャ', romaji: 'pya'}, {katakana: 'ピュ', romaji: 'pyu'}, {katakana: 'ピョ', romaji: 'pyo'}],
			//[{katakana: 'ファ', romaji: 'fa'}, {katakana: 'フィ', romaji: 'fi'}, {katakana: 'ホウ', romaji: 'hu'}, {katakana: 'フェ', romaji: 'fe'}, {katakana: 'フォ', romaji: 'fo'}],
		],
	},
	getters: {
		getHiragana: state => {
			return state.hiragana
		},
		getHiraganaIndex: (state) => (index) => {
			return state.hiragana[index]
		},
		getKatakana: state => {
			return state.katakana
		},
		getKatakanaIndex: (state) => (index) => {
			return state.katakana[index]
		},
		getAllLetters: state => {
			var temp = []
			for (var h = 0; h < this.hiragana.length; h++) {
				temp = temp.concat(state.hiragana[h])
			} 
			for (var i = 0; i < this.katakana.length; i++) {
				temp = temp.concat(state.katakana[i])
			}
			return temp
		},
	},
	mutations: {

	},
	actions: {

	},
}
