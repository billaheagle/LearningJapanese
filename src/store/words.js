export default {
	namespaced: true,
	state: {
		dictionary: [
			//=== START HAS KANJI ==================================================================================
			{kanji: '私', spell: 'わたし',mean: ['Saya', 'Aku'], note: ''},
			{kanji: '名前', spell: 'なまえ', mean: ['Nama'], note: ''},
			{kanji: 'あの人', spell: 'あのひと', mean: ['Orang Itu'], note: ''},
			{kanji: '日本', spell: 'にほん', mean: ['Jepang'], note: ''},
			{kanji: '本', spell: 'ほん', mean: ['Buku'], note: ''},
			{kanji: '初めまして', spell: 'はじめまして', mean: ['Perkenalkan'], note: ''},
			{kanji: '先生', spell: 'せんせい', mean: ['Guru', 'Dosen'], note: ''},
			{kanji: '答え', spell: 'こたえ', mean: ['Jawaban'], note: ''},
			{kanji: '学生', spell: 'がくせい', mean: ['Murid', 'Siswa', 'Mahasiswa'], note: ''},
			{kanji: '会社員', spell: 'かいしゃいｎ', mean: ['Pegawai', 'Karyawan'], note: ''},
			{kanji: '練習', spell: 'れんしゅう', mean: ['Latihan'], note: ''},
			{kanji: '宿題', spell: 'しゅくだい', mean: ['PR', 'Pekerjaan Rumah'], note: ''},
			{kanji: '大学', spell: 'だいがっこう', mean: ['Kampus', 'Universitas'], note: ''},
			{kanji: '病院', spell: 'びょういん', mean: ['Rumah Sakit'], note: ''},
			{kanji: '医者', spell: 'いしゃ', mean: ['Dokter'], note: ''},
			{kanji: '研究者', spell: 'けんきゅうしゃ', mean: ['Peneliti'], note: ''},
			{kanji: '学校', spell: 'がっこう', mean: ['Sekolah'], note: ''},
			{kanji: '銀行員', spell: 'ぎんこういん', mean: ['Pegawai Bank', 'Bankir'], note: ''},
			{kanji: '誰', spell: 'だれ', mean: ['Siapa'], note: ''},
			{kanji: '始めます', spell: 'はじめます', mean: ['Memulai', 'Mulai'], note: ''},
			{kanji: 'から来ました', spell: 'からきました', mean: ['Datang Dari'], note: ''},
			{kanji: '～歳', spell: '～さい', mean: ['~ Umur', 'Umur'], note: ''},
			{kanji: '何', spell: 'なん / なに', mean: ['Apa'], note: ''},
			{kanji: '何歳', spell: 'なんさい', mean: ['Umur Berapa'], note: ''},
			{kanji: '新聞', spell: 'しんぶん', mean: ['Koran', 'Surat Kabar'], note: ''},
			{kanji: '辞書', spell: 'じしょ', mean: ['Kamus'], note: ''},
			{kanji: '名称', spell: 'めいし', mean: ['Kartu Nama', 'Tanda Pengenal'], note: ''},
			{kanji: '車', spell: 'くるま', mean: ['Mobil'], note: ''},
			{kanji: '手帳', spell: 'てちょう', mean: ['Buku Agenda', 'Note'], note: ''},
			{kanji: '鉛筆', spell: 'えんぴつ', mean: ['Pensil'], note: ''},
			{kanji: '時計', spell: 'とけい', mean: ['Jam'], note: ''},
			{kanji: '違います', spell: 'ちがいます', mean: ['Bukan', 'Salah', 'Tidak'], note: ''},
			{kanji: '英語', spell: 'えいご', mean: ['Bahasa Inggris'], note: ''},
			{kanji: '～語', spell: '～ご', mean: ['~ Bahasa', 'Bahasa'], note: ''},
			{kanji: '鍵', spell: 'かぎ', mean: ['Kunci'], note: ''},
			{kanji: '雑誌', spell: 'ざっし', mean: ['Majalah'], note: ''},
			{kanji: '傘', spell: 'かさ', mean: ['Payung'], note: ''},
			{kanji: 'お世話になります', spell: 'おせわになります', mean: ['Diajar', 'Dibimbing', 'Diurus'], note: ''},
			{kanji: '机', spell: 'つくえ', mean: ['Meja'], note: ''},
			{kanji: 'お菓子', spell: 'おかし', mean: ['Cemilan', 'Permen'], note: ''},
			{kanji: 'お茶', spell: 'おちゃ', mean: ['Teh'], note: ''},
			//--- HAS KANJI AND HAS NOTE ---------------------------------------------------------------------------
			{kanji: 'あの方', spell: 'あのかた', mean: ['Orang Itu'], note: 'Sopan'},
			{kanji: '教師', spell: 'きょうし', mean: ['Guru', 'Dosen'], note: 'Profesi Sendiri'},
			{kanji: '失礼ですが', spell: 'しつれいですが', mean: ['Permisi', 'Maaf'], note: 'Sopan'},
			//=== END HAS KANJI ====================================================================================
			//=== START WITHOUT KANJI ==============================================================================
			{kanji: '', spell: 'あなた', mean: ['Anda', 'Kamu'], note: ''},
			{kanji: '', spell: 'もんだい', mean: ['Soal'], note: ''},
			{kanji: '', spell: 'しつもん', mean: ['Pertanyaan'], note: ''},
			{kanji: '', spell: 'じゅうきょう', mean: ['Pelajaran', 'Mata Kuliah'], note: ''},
			{kanji: '', spell: 'よろしく', mean: ['Salam Kenal'], note: ''},
			//--- WITHOUT KANJI HAS NOTE ---------------------------------------------------------------------------
			{kanji: '', spell: 'どなた', mean: ['Siapa'], note: 'Sopan'},
			{kanji: '', spell: 'おいくつ', mean: ['Umur Berapa'], note: 'Sopan'},
			{kanji: '', spell: 'パソコン', mean: ['Personal Computer', 'Laptop', 'Komputer'], note: ''},
			{kanji: '', spell: 'カード', mean: ['Kartu'], note: ''},
			{kanji: '', spell: 'ボールペン', mean: ['Pulpen', 'Bolpoin'], note: ''},
			{kanji: '', spell: 'シャープペンシル', mean: ['Pensil Mekanik', 'Pensil Pilot'], note: ''},
			{kanji: '', spell: 'かばん', mean: ['Tas', 'Koper'], note: ''},
			{kanji: '', spell: 'テレビ', mean: ['TV', 'Televisi'], note: ''},
			{kanji: '', spell: 'スマホ', mean: ['Smartphone', 'HP'], note: ''},
			{kanji: '', spell: 'バイク', mean: ['Motor', 'Sepeda Motor'], note: ''},
			{kanji: '', spell: 'いす', mean: ['Kursi', 'Bangku'], note: ''},
			{kanji: '', spell: 'おみやげ', mean: ['Oleh-oleh'], note: ''},
			{kanji: '', spell: 'ノート', mean: ['Buku Catatan', 'Note'], note: 'Lebih Kecil'},
			{kanji: '', spell: 'コーヒー', mean: ['Kopi'], note: ''},
			//=== END WITHOUT KANJI ================================================================================
			//{kanji: '', spell: '', mean: [''], note: ''},
		],
	},
	getters: {
		getDictionary: state => {
			return state.dictionary
		},
		getSuffleDictionary: state => {
			let suffleArray = state.dictionary
			for(let i = suffleArray.length - 1; i > 0; i--){
				const j = Math.floor(Math.random() * i)
				const temp = suffleArray[i]
				suffleArray[i] = suffleArray[j]
				suffleArray[j] = temp
			}
			return suffleArray
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
	},
	mutations: {

	},
	actions: {

	},
}
