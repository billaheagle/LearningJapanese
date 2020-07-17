export default {
	namespaced: true,
	state: {
		noun: [

		],
		adjective: [

		],
		verb: [

		],
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
			{kanji: '学生', spell: 'がくせい', mean: ['Murid', 'Siswa'], note: ''},
			{kanji: '会社員', spell: 'かいしゃいｎ', mean: ['Pegawai', 'Karyawan'], note: ''},
			{kanji: '練習', spell: 'れんしゅう', mean: ['Latihan'], note: ''},
			{kanji: '宿題', spell: 'しゅくだい', mean: ['PR', 'Pekerjaan Rumah'], note: ''},
			{kanji: '大学', spell: 'だいがっこう', mean: ['Kampus', 'Universitas'], note: ''},
			{kanji: '病院', spell: 'びょういん', mean: ['Rumah Sakit'], note: ''},
			{kanji: 'お土産', spell: 'おみやげ', mean: ['Oleh-oleh'], note: ''},
			{kanji: '医者', spell: 'いしゃ', mean: ['Dokter'], note: ''},
			{kanji: '研究者', spell: 'けんきゅうしゃ', mean: ['Peneliti'], note: ''},
			{kanji: '学校', spell: 'がっこう', mean: ['Sekolah'], note: ''},
			{kanji: '銀行', spell: 'ぎんこう', mean: ['Bank'], note: ''},
			{kanji: '銀行員', spell: 'ぎんこういん', mean: ['Pegawai Bank', 'Bankir'], note: ''},
			{kanji: '誰', spell: 'だれ', mean: ['Siapa'], note: ''},
			{kanji: '始めます', spell: 'はじめます', mean: ['Memulai', 'Mulai'], note: ''},
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
			{kanji: '教室', spell: 'きょうしつ', mean: ['Kelas', 'Ruang Kelas'], note: ''},
			{kanji: '食堂', spell: 'しょくどう', mean: ['Kantin', 'Rumah Makan', 'Rumah Makan'], note: ''},
			{kanji: '事務所', spell: 'じむしょ', mean: ['Kantor'], note: ''},
			{kanji: '会議室', spell: 'かいぎしつ', mean: ['Ruang Rapat'], note: ''},
			{kanji: '受付', spell: 'うけつけ', mean: ['Meja Informasi', 'Resepsionis'], note: ''},
			{kanji: '部屋', spell: 'へや', mean: ['Kamar'], note: ''},
			{kanji: '階段', spell: 'かいだん', mean: ['Tangga'], note: ''},
			{kanji: '自動販売機', spell: 'じどうはんばいき', mean: ['Mesin Jual Otomatis', 'Vending Machine'], note: ''},
			{kanji: '電話', spell: 'でんわ', mean: ['Telepon'], note: ''},
			{kanji: 'お国', spell: 'おくに', mean: ['Negara'], note: ''},
			{kanji: '靴', spell: 'くつ', mean: ['Sepatu'], note: ''},
			{kanji: '服', spell: 'ふく', mean: ['Baju', 'Pakaian'], note: ''},
			{kanji: '売り場', spell: 'うりば', mean: ['Tempat Penjualan'], note: ''},
			{kanji: '地下', spell: 'ちか', mean: ['Bawah Tanah', 'Basement'], note: ''},
			{kanji: '～階', spell: 'かい / がい', mean: ['~ Lantai', 'Lantai'], note: ''},
			{kanji: '何階', spell: 'なんがい', mean: ['Lantai Berapa'], note: ''},
			{kanji: '～円', spell: '～えん', mean: ['~ Yen', 'Yen'], note: ''},
			{kanji: '～百', spell: '～ひゃく', mean: ['~ Ratus', 'Ratus'], note: ''},
			{kanji: '～千', spell: '～せん', mean: ['~ Ribu', 'Ribu'], note: ''},
			{kanji: '～万', spell: '～まん', mean: ['~ Puluh Ribu', 'Puluh Ribu'], note: ''},
			{kanji: '見せてください', spell: 'みせてください', mean: ['Tolong Perlihatkan'], note: ''},
			{kanji: '新大阪', spell: 'しんおおさか', mean: ['Shin-Oosaka'], note: ''},
			{kanji: '文房具', spell: 'ぶんぼうぐ', mean: ['Alat Tulis'], note: ''},
			{kanji: '化粧品', spell: 'けしょうひん', mean: ['Alat Makeup', 'Kosmetik'], note: ''},
			{kanji: '今', spell: 'いま', mean: ['Sekarang'], note: ''},
			{kanji: '～時', spell: '～じ', mean: ['~ Jam', 'Jam'], note: ''},
			{kanji: '～分', spell: 'ふん / ぷん', mean: ['~ Menit', 'Menit'], note: ''},
			{kanji: '半', spell: 'はん', mean: ['Setengah'], note: ''},
			{kanji: '何時', spell: 'なんじ', mean: ['Jam Berapa'], note: ''},
			{kanji: '何分', spell: 'なんぷん', mean: ['Berapa Menit'], note: ''},
			{kanji: '午前', spell: 'ごぜん', mean: ['AM'], note: ''},
			{kanji: '午後', spell: 'ごご', mean: ['PM'], note: ''},
			{kanji: '曜日', spell: 'ようび', mean: ['Hari'], note: ''},
			{kanji: '月曜日', spell: 'げつようび', mean: ['Hari Senin', 'Senin'], note: ''},
			{kanji: '火曜日', spell: 'かようび', mean: ['Hari Selasa', 'Selasa'], note: ''},
			{kanji: '水曜日', spell: 'すいようび', mean: ['Hari Rabu', 'Rabu'], note: ''},
			{kanji: '木曜日', spell: 'もくようび', mean: ['Hari Kamis', 'Kamis'], note: ''},
			{kanji: '金曜日', spell: 'きんようび', mean: ['Hari Jumat', 'Jumat'], note: ''},
			{kanji: '土曜日', spell: 'どようび', mean: ['Hari Sabtu', 'Sabtu'], note: ''},
			{kanji: '日曜日', spell: 'にちようび', mean: ['Hari Minggu', 'Minggu', 'Ahad'], note: ''},
			{kanji: '朝', spell: 'あさ', mean: ['Pagi'], note: ''},
			{kanji: '昼', spell: 'ひる', mean: ['Siang'], note: ''},
			{kanji: '夕方', spell: 'ゆうがた', mean: ['Sore'], note: ''},
			{kanji: '晩', spell: 'ばん', mean: ['Malam'], note: ''},
			{kanji: '毎', spell: 'まい', mean: ['Setiap'], note: ''},
			{kanji: '毎朝', spell: 'まいあさ', mean: ['Setiap Pagi'], note: ''},
			{kanji: '毎晩', spell: 'まいばん', mean: ['Setiap Malam'], note: ''},
			{kanji: '毎日', spell: 'まいにち', mean: ['Setiap Hari'], note: ''},
			{kanji: '寝ます', spell: 'ねます', mean: ['Tidur'], note: ''},
			{kanji: '今日', spell: 'きょう', mean: ['Hari ini'], note: ''},
			{kanji: '明日', spell: 'あした', mean: ['Besok'], note: ''},
			{kanji: '昨日', spell: 'きのう', mean: ['Kemarin'], note: ''},
			{kanji: '明後日', spell: 'あさって', mean: ['Lusa'], note: ''},
			{kanji: '一昨日', spell: 'おととい', mean: ['Lusa Kemarin'], note: ''},
			{kanji: '今朝', spell: 'けさ', mean: ['Tadi Pagi', 'Pagi ini'], note: ''},
			{kanji: '今晩', spell: 'こんばん', mean: ['Malam Ini', 'Nanti Malam'], note: ''},
			{kanji: '図書館', spell: 'としょかん', mean: ['Perpustakaan', 'Perpus'], note: ''},
			{kanji: '働きます', spell: 'はたらきます', mean: ['Bekerja'], note: ''},
			{kanji: '休みます', spell: 'やすみます', mean: ['Istirahat', 'Cuti', 'Libur'], note: ''},
			{kanji: '休み', spell: 'やすみ', mean: ['Istirahat', 'Cuti', 'Libur'], note: ''},
			{kanji: '昼休み', spell: 'ひるやすみ', mean: ['Istirahat Siang'], note: ''},
			{kanji: '勉強します', spell: 'べんきょうします', mean: ['Belajar'], note: ''},
			{kanji: '終わります', spell: 'おわります', mean: ['Selesai'], note: ''},
			{kanji: '試験', spell: 'しけん', mean: ['Ujian', 'Tes'], note: ''},
			{kanji: '会議', spell: 'かいぎ', mean: ['Rapat'], note: ''},
			{kanji: '映画', spell: 'えいが', mean: ['Film'], note: ''},
			{kanji: '番号', spell: 'ばんごう', mean: ['Nomor'], note: ''},
			{kanji: '何番', spell: 'なんばん', mean: ['Nomor Berapa'], note: ''},
			{kanji: '郵便局', spell: 'ゆうびんきょく', mean: ['Kantor Pos'], note: ''},
			{kanji: '美術館', spell: 'びじゅつかん', mean: ['Gedung Kesenian'], note: ''},
			{kanji: '行きます', spell: 'いきます', mean: ['Pergi'], note: ''},
			{kanji: '来ます', spell: 'きます', mean: ['Datang'], note: ''},
			{kanji: '帰ります', spell: 'かえります', mean: ['Pulang'], note: ''},
			{kanji: '駅', spell: 'えき', mean: ['Stasiun'], note: ''},
			{kanji: '今週', spell: 'こんしゅう', mean: ['Minggu Ini'], note: ''},
			{kanji: '来週', spell: 'らいしゅう', mean: ['Minggu Depan'], note: ''},
			{kanji: '先週', spell: 'せんしゅう', mean: ['Minggu Lalu'], note: ''},
			{kanji: '今月', spell: 'こんげつ', mean: ['Bulan Ini'], note: ''},
			{kanji: '来月', spell: 'らいげつ', mean: ['Bulan Depan'], note: ''},
			{kanji: '先月', spell: 'せんげつ', mean: ['Bulan Lalu'], note: ''},
			{kanji: '何月', spell: 'なんがつ', mean: ['Bulan Apa'], note: ''},
			{kanji: '今年', spell: 'ことし', mean: ['Tahun Ini'], note: ''},
			{kanji: '来年', spell: 'らいねん', mean: ['Tahun Depan'], note: ''},
			{kanji: '去年', spell: 'きょねん', mean: ['Tahun Lalu'], note: ''},
			{kanji: '～年', spell: '～ねん', mean: ['Tahun ~', 'Tahun'], note: ''},
			{kanji: '何年', spell: 'なんねん', mean: ['Tahun Berapa'], note: ''},
			{kanji: '～日', spell: '～にち', mean: ['Tanggal ~', 'Tanggal', 'Hari ~'], note: ''},
			{kanji: '何日', spell: 'なんにち', mean: ['Tanggal Berapa', 'Berapa Hari'], note: ''},
			{kanji: '飛行機', spell: 'ひこうき', mean: ['Pesawat', 'Pesawat Terbang'], note: ''},
			{kanji: '船', spell: 'ふね', mean: ['Kapal Laut', 'Perahu'], note: ''},
			{kanji: '電車', spell: 'でんしゃ', mean: ['Kereta Listrik'], note: ''},
			{kanji: '地下鉄', spell: 'ちかてつ', mean: ['Kereta Bawah Tanah'], note: ''},
			{kanji: '歩いて', spell: 'あるいて', mean: ['Berjalan Kaki', 'Jalan Kaki'], note: ''},
			{kanji: '書きます', spell: 'かきます', mean: ['Menulis'], note: ''},
			{kanji: '新幹線', spell: 'しんかんせん', mean: ['Shinkansen'], note: ''},
			{kanji: '自転車', spell: 'じてんしゃ', mean: ['Sepeda'], note: ''},
			{kanji: '友達', spell: 'ともだち', mean: ['Teman'], note: ''},
			{kanji: '誕生日', spell: 'たんじょうび', mean: ['HUT', 'Hari Ulang Tahun'], note: ''},
			{kanji: '家族', spell: 'かぞく', mean: ['Keluarga'], note: ''},
			{kanji: '一人で', spell: 'ひとりで', mean: ['Sendirian', 'Sendiri'], note: ''},
			{kanji: '普通', spell: 'ふつう', mean: ['Biasa'], note: ''},
			{kanji: '急行', spell: 'きゅうこう', mean: ['Ekspres', 'Expres'], note: ''},
			{kanji: '特急', spell: 'とっきゅう', mean: ['Super Ekspres', 'Super Expres'], note: ''},
			{kanji: '次の', spell: 'つぎの', mean: ['Selanjutnya'], note: ''},
			{kanji: '馬', spell: 'うま', mean: ['Kuda'], note: ''},
			{kanji: '食べます', spell: 'たべます', mean: ['Makan'], note: ''},
			{kanji: '飲みます', spell: 'のみます', mean: ['Minum'], note: ''},
			{kanji: '吸います', spell: 'すいます', mean: ['Menghisap'], note: ''},
			{kanji: '聞きます', spell: 'ききます', mean: ['Mendengar'], note: ''},
			{kanji: '読みます', spell: 'よみます', mean: ['Membaca'], note: ''},
			{kanji: '描きます', spell: 'かきます', mean: ['Menggambar'], note: ''},
			{kanji: '買います', spell: 'かいます', mean: ['Membeli'], note: ''},
			{kanji: '会います', spell: 'あいます', mean: ['Bertemu'], note: ''},
			{kanji: 'お花見', spell: 'おはなみ', mean: ['Menikmati Bunga Sakura', 'Melihat Bunga'], note: ''},
			{kanji: '煙草', spell: 'たばこ', mean: ['Rokok', 'Tembakau'], note: ''},
			{kanji: '手紙', spell: 'てがみ', mean: ['Surat'], note: ''},
			{kanji: '写真', spell: 'しゃしん', mean: ['Foto'], note: ''},
			{kanji: 'ご飯/御飯', spell: 'ごはん', mean: ['Nasi'], note: ''},
			{kanji: '朝ご飯', spell: 'あさごはん', mean: ['Sarapan', 'Makan Pagi'], note: ''},
			{kanji: '昼ご飯', spell: 'ひるごはん', mean: ['Makan Siang'], note: ''},
			{kanji: '晩御飯', spell: 'ばんごはん', mean: ['Makan Malam'], note: ''},
			{kanji: '卵', spell: 'たまご', mean: ['Telur'], note: ''},
			{kanji: '肉', spell: 'にく', mean: ['Daging'], note: ''},
			{kanji: '魚', spell: 'さかな', mean: ['Ikan'], note: ''},
			{kanji: '野菜', spell: 'やさい', mean: ['Sayur'], note: ''},
			{kanji: '果物', spell: 'くだもの', mean: ['Buah', 'Buah-buahan'], note: ''},
			{kanji: '水', spell: 'みず', mean: ['Air'], note: ''},
			{kanji: '紅茶', spell: 'こうちゃ', mean: ['Teh'], note: ''},
			{kanji: '牛乳/ミルク', spell: 'ぎゅうにゅう', mean: ['Susu', 'Susu Sapi'], note: ''},
			{kanji: 'お酒', spell: 'おさけ', mean: ['Minuman Keras'], note: ''},
			{kanji: '店', spell: 'みせ', mean: ['Toko', 'Warung'], note: ''},
			{kanji: '庭', spell: 'にわ', mean: ['Halaman'], note: ''},
			{kanji: '時々', spell: 'ときどき', mean: ['Kadang-kadang', 'Terkadang'], note: ''},
			{kanji: '音楽', spell: 'おんがく', mean: ['Musik', 'Lagu'], note: ''},
			{kanji: '切ります', spell: 'きります', mean: ['Memotong', 'Menggunting'], note: ''},
			{kanji: '送ります', spell: 'おくります', mean: ['Mengirim'], note: ''},
			{kanji: '貰います', spell: 'もらいます', mean: ['Mendapatkan', 'Menerima'], note: ''},
			{kanji: '貸します', spell: 'かします', mean: ['Meminjamkan', 'Menyewakan'], note: ''},
			{kanji: '電話をかけます', spell: 'でんわをかけます', mean: ['Menelpon'], note: ''},
			{kanji: '手', spell: 'て', mean: ['Tangan'], note: ''},
			{kanji: '年賀状', spell: 'ねんがじょう', mean: ['Kartu Tahun Baru'], note: ''},
			{kanji: '消しゴム', spell: 'けしごむ', mean: ['Penghapus', 'Penghapus Karet'], note: ''},
			{kanji: '紙', spell: 'かみ', mean: ['Kertas'], note: ''},
			{kanji: '花', spell: 'はな', mean: ['Bunga'], note: ''},
			{kanji: '荷物', spell: 'にもつ', mean: ['Barang'], note: ''},
			{kanji: 'お金', spell: 'おかね', mean: ['Uang', 'Duit'], note: ''},
			{kanji: 'お父さん', spell: 'おとうさん', mean: ['Bapak', 'Bapak Orang Lain'], note: ''},
			{kanji: 'お母さん', spell: 'おかあさん', mean: ['Ibu', 'Ibu Orang Lain'], note: ''},
			{kanji: '切符', spell: 'きっぷ', mean: ['Tiket', 'Karcis'], note: ''},
			{kanji: '恋人', spell: 'こいびと', mean: ['Pacar', 'Kekasih'], note: ''},
			{kanji: '出します', spell: 'だします', mean: ['Mengeluarkan'], note: ''},
			{kanji: '家', spell: 'いえ', mean: ['Rumah'], note: ''},
			{kanji: '教師', spell: 'きょうし', mean: ['Guru', 'Dosen'], note: 'Profesi Sendiri'},
			{kanji: 'あの方', spell: 'あのかた', mean: ['Orang Itu'], note: 'Sopan'},
			{kanji: '失礼ですが', spell: 'しつれいですが', mean: ['Permisi', 'Maaf'], note: 'Sopan'},
			{kanji: 'お手洗い', spell: 'おてあらい', mean: ['Toilet', 'WC', 'Kamar Kecil'], note: 'Sopan'},
			{kanji: '遊園地', spell: 'ゆえんち', mean: ['Taman Hiburan'], note: 'Ragu di Spell'},
			{kanji: '彼', spell: 'かれ', mean: ['Dia', 'Dia Laki-laki'], note: 'Laki-laki'},
			{kanji: '彼女', spell: 'かのじょ', mean: ['Dia', 'Dia Perempuan'], note: 'Perempuan'},
			{kanji: '～番線', spell: '～ばんせん', mean: ['Peron Nomor ~', 'Peron Nomor'], note: ''},
			{kanji: '習います', spell: 'ならいます', mean: ['Belajar'], note: 'Ada Mentor'},
			{kanji: '父', spell: 'ちち', mean: ['Bapak', 'Ayah'], note: 'Ayah Kandung'},
			{kanji: '母', spell: 'はは', mean: ['Ibu', 'Bunda'], note: 'Ibu Kandung'},
			{kanji: '綺麗「な」', spell: 'きれい', mean: ['Cantik', 'Bersih'], note: ''}, //5
			{kanji: '静か「な」', spell: 'しずか', mean: ['Sunyi', 'Tenang'], note: ''}, //5
			{kanji: '有名「な」', spell: 'ゆうめい', mean: ['Terkenal'], note: ''}, //5
			{kanji: '親切「な」', spell: 'しんせつ', mean: ['Baik Hati'], note: 'Untuk Orang Lain'}, //5
			{kanji: '元気「な」', spell: 'げんき', mean: ['Sehat', 'Sehat Wal Afiyat'], note: ''}, //5
			{kanji: '暇「な」', spell: 'ひま', mean: ['Senggang', 'Luang'], note: ''}, //5
			{kanji: '便利「な」', spell: 'べんり', mean: ['Praktis', 'Simpel'], note: ''}, //5
			{kanji: '素敵「な」', spell: 'すてき', mean: ['Bagus'], note: ''}, //5
			{kanji: '大きい', spell: 'おおきい', mean: ['Besar'], note: ''}, //5
			{kanji: '小さい', spell: 'ちいさい', mean: ['Kecil'], note: ''}, //5
			{kanji: '新しい', spell: 'あたらし', mean: ['Baru'], note: ''}, //5
			{kanji: '古い', spell: 'ふるい', mean: ['Lama', 'Tua'], note: ''}, //5
			{kanji: '悪い', spell: 'わるい', mean: ['Buruk', 'Jelek'], note: ''}, //5
			{kanji: '暑い', spell: 'あつい', mean: ['Panas'], note: 'Cuaca'}, //5
			{kanji: '熱い', spell: 'あつい', mean: ['Panas'], note: 'Benda'}, //5
			{kanji: '寒い', spell: 'さむい', mean: ['Dingin'], note: 'Cuaca'}, //5
			{kanji: '冷たい', spell: 'つめたい', mean: ['Dingin'], note: 'Benda'}, //5
			{kanji: '難しい', spell: 'むずかしい', mean: ['Sulit', 'Susah'], note: ''}, //5
			{kanji: '易しい', spell: 'やさしい', mean: ['Mudah', 'Ramah'], note: ''}, //5
			{kanji: '高い', spell: 'たかい', mean: ['Tinggi', 'Mahal'], note: ''}, //5
			{kanji: '安い', spell: 'やすい', mean: ['Murah'], note: ''}, //5
			{kanji: '低い', spell: 'ひくい', mean: ['Rendah'], note: ''}, //5
			{kanji: '忙しい', spell: 'いそがしい', mean: ['Sibuk'], note: ''}, //5
			{kanji: '楽しい', spell: 'たのしい', mean: ['Senang', 'Gembira'], note: ''}, //5
			{kanji: '白い', spell: 'しろい', mean: ['Putih'], note: 'Sifat'}, //5
			{kanji: '黒い', spell: 'くろい', mean: ['Hitam'], note: 'Sifat'}, //5
			{kanji: '赤い', spell: 'あかい', mean: ['Merah'], note: 'Sifat'}, //5
			{kanji: '青い', spell: 'あおい', mean: ['Biru'], note: 'Sifat'}, //5
			{kanji: '桜', spell: 'さくら', mean: ['Bunga Sakura', 'Sakura'], note: ''}, //5
			{kanji: '山', spell: 'やま', mean: ['Gunung'], note: ''}, //5
			{kanji: '町', spell: 'まち', mean: ['Kota'], note: ''}, //5
			{kanji: '食べ物', spell: 'たべもの', mean: ['Makanan'], note: ''}, //5
			{kanji: '寮', spell: 'りょう', mean: ['Asrama'], note: ''}, //5
			{kanji: '生活', spell: 'せいかつ', mean: ['Kehidupan'], note: ''}, //5
			{kanji: 'お仕事', spell: 'おしごと', mean: ['Pekerjaan'], note: ''}, //5
			{kanji: '金閣寺', spell: 'きんかくじ', mean: ['Kuil Kinkakuji'], note: ''}, //5
			{kanji: '咲きます', spell: 'さきます', mean: ['Berkembang', 'Mekar'], note: ''}, //5
			{kanji: '好き「な」', spell: 'すき', mean: ['Suka', 'Gemar'], note: ''}, //6
			{kanji: '嫌い「な」', spell: 'きらい', mean: ['Tidak Suka', 'Benci'], note: ''}, //6
			{kanji: '上手「な」', spell: 'じょうず', mean: ['Pandai', 'Pintar'], note: ''}, //6
			{kanji: '下手「な」', spell: 'へた', mean: ['Tidak Pandai', 'Tidak Pintar'], note: ''}, //6
			{kanji: '飲み物', spell: 'のみもの', mean: ['Minuman'], note: ''}, //6
			{kanji: '料理', spell: 'りょうり', mean: ['Masakan'], note: ''}, //6
			{kanji: '野球', spell: 'やきゅう', mean: ['Baseball'], note: ''}, //6
			{kanji: '旅行', spell: 'りょこう', mean: ['Perjalanan', 'Pariwisata', 'Tamasya'], note: ''}, //6
			{kanji: '歌', spell: 'うた', mean: ['Lagu'], note: ''}, //6
			{kanji: '絵', spell: 'え', mean: ['Gambar'], note: ''}, //6
			{kanji: '歌舞伎', spell: 'かぶき', mean: ['Kabuki'], note: 'Drama Tradisional Jepang'}, //6
			{kanji: '字', spell: 'じ', mean: ['Huruf'], note: ''}, //6
			{kanji: '子主人', spell: 'こしゅじん', mean: ['Suami'], note: 'Suami Orang Lain'}, //6
			{kanji: '夫/主人', spell: 'おっと/しゅじん', mean: ['Suami'], note: 'Suami Sendiri'}, //6
			{kanji: '奥さんが', spell: 'おくさんが', mean: ['Istri'], note: 'Istri Orang Lain'}, //6
			{kanji: '妻/家内', spell: 'つま/かない', mean: ['Istri'], note: 'Istri Sendiri'}, //6
			{kanji: '子ども', spell: 'こども', mean: ['Anak'], note: ''}, //6
			{kanji: '少し', spell: 'すこし', mean: ['Sedikit'], note: ''}, //6
			{kanji: '全然', spell: 'ぜんぜん', mean: ['Sama Sekali'], note: 'Disertai Kalimat Negatif'}, //6
			{kanji: '早く', spell: 'はやく', mean: ['Cepat'], note: 'Waktu'}, //6
			{kanji: '速く', spell: 'はやく', mean: ['Cepat'], note: 'Benda'}, //6
			{kanji: '漢字', spell: 'かんじ', mean: ['Kanji'], note: ''}, //6
			{kanji: 'ローマ字', spell: 'ローマじ', mean: ['Romaji', 'Huruf Latin'], note: ''}, //6
			{kanji: '細かいお金', spell: 'こまかいおかね', mean: ['Uang Kecil', 'Receh', 'Recehan'], note: ''}, //6
			{kanji: '用事', spell: 'ようじ', mean: ['Urusan'], note: ''}, //6
			{kanji: '約束', spell: 'やくそく', mean: ['Janji'], note: ''}, //6
			{kanji: '残念です「が」', spell: 'ざんねんです', mean: ['Sayang Sekali'], note: ''}, //6
			{kanji: '趣味', spell: 'しゅみ', mean: ['Hobi'], note: ''}, //6
			{kanji: '男', spell: 'おとこ', mean: ['Laki-laki', 'Pria'], note: ''}, //7
			{kanji: '女', spell: 'おんな', mean: ['Perempuan', 'Wanita'], note: ''}, //7
			{kanji: '犬', spell: 'いぬ', mean: ['Anjing'], note: ''}, //7
			{kanji: '猫', spell: 'ねこ', mean: ['Kucing'], note: ''}, //7
			{kanji: '象', spell: 'ぞう', mean: ['Gajah'], note: ''}, //7
			{kanji: '木', spell: 'き', mean: ['Pohon'], note: ''}, //7
			{kanji: '物', spell: 'もの', mean: ['Barang'], note: ''}, //7
			{kanji: '電池', spell: 'でんち', mean: ['Baterai'], note: ''}, //7
			{kanji: '箱', spell: 'はこ', mean: ['Kotak'], note: ''}, //7
			{kanji: '冷蔵庫', spell: 'れいぞうこ', mean: ['Kulkas'], note: ''}, //7
			{kanji: '窓', spell: 'まど', mean: ['Jendela'], note: ''}, //7
			{kanji: '公園', spell: 'こうえん', mean: ['Taman'], note: ''}, //7
			{kanji: '喫茶店', spell: 'きっさてん', mean: ['Kedai Kopi', 'Coffee Shop'], note: ''}, //7
			{kanji: '～屋', spell: '～や', mean: ['~ Toko', 'Toko'], note: ''}, //7
			{kanji: '乗り場', spell: 'のりば', mean: ['Tempat Naik'], note: 'Kendaraan'}, //7
			{kanji: '県', spell: 'けん', mean: ['Prefektur', 'Provinsi'], note: ''}, //7
			{kanji: '東京', spell: 'とうきょう', mean: ['Tokyo'], note: ''}, //7
			{kanji: '下', spell: 'した', mean: ['Bawah'], note: ''}, //7
			{kanji: '上', spell: 'うえ', mean: ['Atas'], note: ''}, //7
			{kanji: '中', spell: 'なか', mean: ['Dalam'], note: ''}, //7
			{kanji: '外', spell: 'そと', mean: ['Luar'], note: ''}, //7
			{kanji: '隣', spell: 'となり', mean: ['Sebelah', 'Samping'], note: ''}, //7
			{kanji: '右', spell: 'みぎ', mean: ['Kanan'], note: ''}, //7
			{kanji: '左', spell: 'ひだり', mean: ['Kiri'], note: ''}, //7
			{kanji: '前', spell: 'まえ', mean: ['Depan'], note: ''}, //7
			{kanji: '後ろ', spell: 'うしろ', mean: ['Belakang'], note: ''}, //7
			{kanji: '近く', spell: 'ちかく', mean: ['Dekat'], note: ''}, //7
			{kanji: '間', spell: 'あいだ', mean: ['Diantara', 'Antara'], note: ''}, //7
			{kanji: '動物園', spell: 'どうぶつえん', mean: ['Kebun Binatang'], note: ''}, //7
			/*{kanji: '～人', spell: '～にん', mean: ['~ Orang', 'Orang', 'Satuan Orang'], note: 'Jumlah Orang', new: true}, //8
			{kanji: '～台', spell: '～だい', mean: ['~ Buah', 'Buah', 'Satuan Mesin'], note: 'Jumlah Mesin', new: true}, //8
			{kanji: '～枚', spell: '～まい', mean: ['~ Lembar', 'Lembar', 'Satuan Lembar'], note: 'Jumlah Lembar', new: true}, //8
			{kanji: '～回', spell: '～かい', mean: ['~ Kali', 'Kali', 'Satuan Frekuensi'], note: 'Jumlah Frekuensi', new: true}, //8
			{kanji: '切手', spell: 'きいって', mean: ['Perangko'], note: '', new: true}, //8
			{kanji: '封筒', spell: 'ふうとう', mean: ['Amplop'], note: '', new: true}, //8
			{kanji: '両親', spell: 'りょうしん', mean: ['Orang Tua'], note: '', new: true}, //8
			{kanji: '兄弟', spell: 'きょうだい', mean: ['Saudara', 'Saudari'], note: '', new: true}, //8
			{kanji: '兄', spell: 'あに', mean: ['Kakak Laki-laki'], note: 'Kakak Sendiri', new: true}, //8
			{kanji: '姉', spell: 'あね', mean: ['Kakak Perempuan'], note: 'Kakak Sendiri', new: true}, //8
			{kanji: '弟', spell: 'おとうと', mean: ['Adik Laki-laki'], note: 'Adik Sendiri', new: true}, //8
			{kanji: '妹', spell: 'いもうと', mean: ['Adik Perempuan'], note: 'Adik Perempuan', new: true}, //8
			{kanji: '外国', spell: 'がいこく', mean: ['Luar Negri'], note: '', new: true}, //8
			{kanji: '～時間', spell: '～じかん', mean: ['Waktu', '~ Jam', 'Jam', 'Satuan Jam'], note: 'Jumlah Jam', new: true}, //8
			{kanji: '～週間', spell: '～しゅうかん', mean: ['~ Minggu', 'Minggu', 'Satuan Minggu'], note: 'Jumlah Minggu', new: true}, //8
			{kanji: '～か月「間」', spell: '～かげつ「かん」', mean: ['~ Bulan', 'Bulan', 'Satuan Bulan'], note: 'Jumlah Bulan', new: true}, //8
			{kanji: '～年「間」', spell: '～ねん「かん」', mean: ['~ Tahun', 'Tahun', 'Satuan Tahun'], note: 'Jumlah Tahun', new: true}, //8
			{kanji: '全部「で」', spell: 'ぜんぶ「で」', mean: ['Semua'], note: '', new: true}, //8
			{kanji: '船便', spell: 'ふなびん', mean: ['Pos Laut'], note: '', new: true}, //8
			{kanji: 'お出かけですか', spell: 'おでかけですか', mean: ['Mau Keluar'], note: '', new: true}, //8
			{kanji: '航空便', spell: 'こうくうびん', mean: ['Pos Udara'], note: '', new: true}, //8
			{kanji: '入れます', spell: 'はいれます', mean: ['Memasukkan'], note: '', new: true}, //8
			{kanji: '留学生', spell: 'りゅうがくせい', mean: ['Pelajar Asing'], note: '', new: true}, //8
			{kanji: '速達', spell: 'そくたつ', mean: ['Kiriman Cepat', 'Kiriman Ekspres'], note: '', new: true}, //8 */
			/*{kanji: '簡単「な」', spell: 'かんたん', mean: ['Mudah', 'Gampang'], note: '', new: true}, //9
			{kanji: '近い', spell: 'ちかい', mean: ['Dekat'], note: '', new: true}, //9
			{kanji: '遠い', spell: 'とおい', mean: ['Jauh'], note: '', new: true}, //9
			{kanji: '早い', spell: 'はやい', mean: ['Cepat'], note: 'Waktu', new: true}, //9
			{kanji: '速い', spell: 'はやい', mean: ['Cepat'], note: 'Benda', new: true}, //9
			{kanji: '遅い', spell: 'おそい', mean: ['Lambat'], note: '', new: true}, //9
			{kanji: '多い', spell: 'おおい', mean: ['Banyak'], note: 'Benda Hidup', new: true}, //9
			{kanji: '少ない', spell: 'すくない', mean: ['Sedikit'], note: 'Benda Hidup', new: true}, //9
			{kanji: '暖かい', spell: 'あたたかい', mean: ['Hangat'], note: 'Benda', new: true}, //9
			{kanji: '温かい', spell: 'あたたかい', mean: ['Hangat'], note: 'Suhu Ruangan', new: true}, //9
			{kanji: '涼し', spell: 'すずし', mean: ['Sejuk'], note: '', new: true}, //9
			{kanji: '甘い', spell: 'あまい', mean: ['Manis'], note: '', new: true}, //9
			{kanji: '辛い', spell: 'からい', mean: ['Pedas'], note: '', new: true}, //9
			{kanji: '重い', spell: 'おもい', mean: ['Berat'], note: '', new: true}, //9
			{kanji: '軽い', spell: 'かるい', mean: ['Ringan', 'Enteng'], note: '', new: true}, //9
			{kanji: '季節', spell: 'きせつ', mean: ['Musim'], note: '', new: true}, //9
			{kanji: '春', spell: 'はる', mean: ['Musim Semi'], note: '', new: true}, //9
			{kanji: '夏', spell: 'なつ', mean: ['Musim Panas'], note: '', new: true}, //9
			{kanji: '秋', spell: 'あき', mean: ['Musim Gugur'], note: '', new: true}, //9
			{kanji: '冬', spell: 'ふゆ', mean: ['Musim Dingin'], note: '', new: true}, //9
			{kanji: '天気', spell: 'てんき', mean: ['Cuaca'], note: '', new: true}, //9
			{kanji: '雨', spell: 'あめ', mean: ['Hujan'], note: '', new: true}, //9
			{kanji: '雪', spell: 'ゆき', mean: ['Salju'], note: '', new: true}, //9
			{kanji: '曇り', spell: 'くもり', mean: ['Mendung'], note: '', new: true}, //9
			{kanji: '空港', spell: 'くうこう', mean: ['Bandara'], note: '', new: true}, //9
			{kanji: '海', spell: 'うみ', mean: ['Laut'], note: '', new: true}, //9
			{kanji: '世界', spell: 'せかい', mean: ['Dunia'], note: '', new: true}, //9
			{kanji: '「お」祭り', spell: 'まつり', mean: ['Perayaan'], note: '', new: true}, //9
			{kanji: 'すき焼き', spell: 'すきやき', mean: ['Sukiyaki'], note: '', new: true}, //9
			{kanji: '刺身', spell: 'さしみ', mean: ['Ikan Mentah'], note: 'Dipotong Tipis', new: true}, //9
			{kanji: '豚', spell: 'ぶた', mean: ['Babi'], note: '', new: true}, //9
			{kanji: '鶏', spell: 'にわとり', mean: ['Ayam'], note: '', new: true}, //9
			{kanji: '生け花', spell: 'いけばな', mean: ['Seni Merangkai Bunga'], note: '', new: true}, //9
			{kanji: '紅葉', spell: 'もみじ', mean: ['Maple'], note: 'Daun Berubah Warna', new: true}, //9
			{kanji: '牛', spell: 'うし', mean: ['Lembu', 'Sapi'], note: '', new: true}, //9
			{kanji: '祇園祭', spell: 'ぎおんまつり', mean: ['Perayaan Gion'], note: '', new: true}, //9 */
			/*{kanji: '遊びます', spell: 'あそびます', mean: ['Bermain'], note: '', new: true}, //10
			{kanji: '泳ぎます', spell: 'およぎます', mean: ['Berenang'], note: '', new: true}, //10
			{kanji: '迎えます', spell: 'むかえます', mean: ['Menjemput'], note: '', new: true}, //10
			{kanji: '疲れます', spell: 'つかれます', mean: ['Lelah'], note: '', new: true}, //10
			{kanji: '結婚します', spell: 'けっこんします', mean: ['Menikah'], note: '', new: true}, //10
			{kanji: '欲しい', spell: 'ほしい', mean: ['Ingin', 'Mau'], note: '', new: true}, //10
			{kanji: '食事します', spell: 'しょくじします', mean: ['Makan'], note: '', new: true}, //10
			{kanji: '散歩します', spell: 'さんぽします', mean: ['Berjalan-jalan', 'Jalan-jalan'], note: 'Partikel を', new: true}, //10
			{kanji: '大変「な」', spell: 'たいへん', mean: ['Sulit', 'Sukar', 'Susah', 'Berat'], note: '', new: true}, //10
			{kanji: '買い物します', spell: 'かいものします', mean: ['Berbelanja', 'Belanja'], note: '', new: true}, //10
			{kanji: '広い', spell: 'ひろい', mean: ['Luas'], note: '', new: true}, //10
			{kanji: '狭い', spell: 'せまい', mean: ['Sempit'], note: '', new: true}, //10
			{kanji: '川', spell: 'かわ', mean: ['Sungai'], note: '', new: true}, //10
			{kanji: '美術', spell: 'びじゅつ', mean: ['Seni', 'Kesenian'], note: '', new: true}, //10
			{kanji: '釣り', spell: 'つり', mean: ['Mancing', 'Pancing'], note: '', new: true}, //10
			{kanji: '週末', spell: 'しゅうまつ', mean: ['Akhir Pekan'], note: '', new: true}, //10
			{kanji: '「お」正月', spell: 'しょうがつ', mean: ['Tahun Baru'], note: '', new: true}, //10
			{kanji: '何か', spell: 'なにか', mean: ['Sesuatu'], note: '', new: true}, //10
			{kanji: '喉が渇きます', spell: 'のごがかわきます', mean: ['Haus'], note: '', new: true}, //10
			{kanji: '痛い', spell: 'いたい', mean: ['Sakit'], note: '', new: true}, //10
			{kanji: '「ご」注文は', spell: 'ごちゅうもんは', mean: ['Mau Pesan Apa'], note: '', new: true}, //10
			{kanji: '定食', spell: 'ていしょく', mean: ['Menu Paket'], note: '', new: true}, //10
			{kanji: '牛どん', spell: 'ぎゅうどん', mean: ['Gyuudon'], note: '', new: true}, //10
			{kanji: '少々お待ちください', spell: 'しょうしょうおまちください', mean: ['Tunggu Sebentar', 'Tunggu'], note: '', new: true}, //10
			{kanji: '別々に', spell: 'べつべつに', mean: ['Sendiri-sendiri', 'Masing-masing'], note: '', new: true}, //10*/
			{kanji: '撮ります', spell: 'とります', mean: ['Mengambil Foto'], note: 'Foto'}, //11
			{kanji: '取ります', spell: 'とります', mean: ['Mengambil'], note: '', new: true}, //11
			{kanji: '手伝います', spell: 'てつだいます', mean: ['Membantu'], note: '', new: true}, //11
			{kanji: '呼びます', spell: 'よびます', mean: ['Memanggil'], note: '', new: true}, //11
			{kanji: '話します', spell: 'はなします', mean: ['Berbicara'], note: '', new: true}, //11
			{kanji: '使います', spell: 'つかいます', mean: ['Menggunakan'], note: '', new: true}, //11
			{kanji: '止めます', spell: 'とめます', mean: ['Menghentikan', 'Memarkir'], note: '', new: true}, //11
			{kanji: '見せます', spell: 'みせます', mean: ['Memperlihatkan'], note: '', new: true}, //11
			{kanji: '教えます', spell: 'おしえます', mean: ['Mengajarkan', 'Memberitahu'], note: '', new: true}, //11
			{kanji: '座ります', spell: 'すわります', mean: ['Duduk'], note: '', new: true}, //11
			{kanji: '立ちます', spell: 'たちます', mean: ['Berdiri'], note: '', new: true}, //11
			{kanji: '入ります', spell: 'はいります', mean: ['Masuk'], note: '', new: true}, //11
			{kanji: '出ます', spell: 'でます', mean: ['Keluar'], note: '', new: true}, //11
			{kanji: '降ります', spell: 'ふります', mean: ['Turun'], note: 'Hujan, Salju', new: true}, //11
			{kanji: '電気', spell: 'でんき', mean: ['Listrik'], note: '', new: true}, //11
			{kanji: '住所', spell: 'じゅうしょ', mean: ['Alamat'], note: '', new: true}, //11
			{kanji: '地図', spell: 'ちず', mean: ['Peta'], note: '', new: true}, //11
			{kanji: '塩', spell: 'しお', mean: ['Garam'], note: '', new: true}, //11
			{kanji: '砂糖', spell: 'さとう', mean: ['Gula'], note: '', new: true}, //11
			{kanji: '問題', spell: 'もんだい', mean: ['Masalah', 'Soal'], note: '', new: true}, //11
			{kanji: '読み方', spell: 'よみかた', mean: ['Cara Baca'], note: '', new: true}, //11
			{kanji: '～方', spell: '～かた', mean: ['Cara ~', 'Cara'], note: '', new: true}, //11
			{kanji: '信号', spell: 'しんごう', mean: ['Lampu Lalu Lintas'], note: '', new: true}, //11
			{kanji: '曲がります', spell: 'まがります', mean: ['Belok'], note: '', new: true}, //11
			{kanji: 'お釣り', spell: 'おつり', mean: ['Uang Kembalian', 'Kembalian'], note: '', new: true}, //11
			{kanji: '起きます', spell: 'おきます', mean: ['Bangun'], note: 'KK-2', new: true}, //11
			{kanji: '見ます', spell: 'みます', mean: ['Melihat'], note: 'KK-2', new: true}, //11
			{kanji: '浴びます', spell: 'あびます', mean: ['Mandi'], note: 'KK-2', new: true}, //11
			{kanji: '借ります', spell: 'かります', mean: ['Meminjam', 'Menyewa'], note: 'KK-2', new: true}, //11*/
			{kanji: '置きます', spell: 'おきます', mean: ['Meletakkan', 'Menaruh'], note: '', new: true}, //12
			{kanji: '作ります', spell: 'つくります', mean: ['Membuat'], note: 'Buatan Tangan', new: true}, //12
			{kanji: '造ります', spell: 'つくります', mean: ['Membangun', 'Memproduksi'], note: 'Buatan Mesin', new: true}, //12
			{kanji: '売ります', spell: 'うります', mean: ['Menjual'], note: '', new: true}, //12
			{kanji: '知ります', spell: 'しります', mean: ['Mengetahui', 'Mengenal'], note: '知りません　Bentuk Negatif', new: true}, //12
			{kanji: '住みます', spell: 'すみます', mean: ['Tinggal'], note: '', new: true}, //12
			{kanji: '研究します', spell: 'けんきゅうします', mean: ['Meneliti'], note: '', new: true}, //12
			{kanji: '資料', spell: 'しりょう', mean: ['Data', 'Bahan'], note: '', new: true}, //12
			{kanji: '事故表', spell: 'じこひょう', mean: ['Jadwal'], note: '', new: true}, //12
			{kanji: '着ます', spell: 'きます', mean: ['Memakai', 'Menggunakan'], note: '', new: true}, //12
			{kanji: '製品', spell: 'せいひん', mean: ['Produk'], note: '', new: true}, //12
			{kanji: '禁煙', spell: 'きんえん', mean: ['Tanda Larangan Merokok'], note: '', new: true}, //12
			{kanji: '電子辞書', spell: 'でんしじしょ', mean: ['Kamus Elektronik'], note: '', new: true}, //12
			{kanji: '経済', spell: 'けいざい', mean: ['Ekonomi'], note: '', new: true}, //12
			{kanji: '市役所', spell: 'しやくしょ', mean: ['Kantor Walikota', 'Kantor Daerah'], note: '', new: true}, //12
			{kanji: '高校', spell: 'こうこう', mean: ['SMA'], note: '', new: true}, //12
			{kanji: '歯医者', spell: 'はいしゃ', mean: ['Dokter Gigi'], note: '', new: true}, //12
			{kanji: '入ります', spell: 'はいります', mean: ['Memasukkan', 'Masuk'], note: '', new: true}, //12
			{kanji: '乗ります', spell: 'のります', mean: ['Mengendarai'], note: '', new: true}, //12
			{kanji: '独身', spell: 'どくしん', mean: ['Bujangan', 'Jomblo', 'Belum Menikah'], note: '', new: true}, //12
			{kanji: '皆さん', spell: 'みなさん', mean: ['Semuanya'], note: '', new: true}, //12
			{kanji: '思い出します', spell: 'おもいだします', mean: ['Teringat'], note: '', new: true}, //12
			{kanji: '日本橋', spell: 'にっぽんばし', mean: ['Daerah Pembelanjaan Oosaka'], note: '', new: true}, //12*/
			//=== END HAS KANJI ====================================================================================
			//=== START WITHOUT KANJI ==============================================================================
			{kanji: '', spell: 'あなた', mean: ['Anda', 'Kamu'], note: ''},
			{kanji: '', spell: 'しつもん', mean: ['Pertanyaan'], note: ''},
			{kanji: '', spell: 'じゅうきょう', mean: ['Pelajaran', 'Mata Kuliah'], note: ''},
			{kanji: '', spell: 'よろしく', mean: ['Salam Kenal'], note: ''},
			{kanji: '', spell: 'パソコン', mean: ['Personal Computer', 'Laptop', 'Komputer'], note: ''},
			{kanji: '', spell: 'カード', mean: ['Kartu'], note: ''},
			{kanji: '', spell: 'ボールペン', mean: ['Pulpen', 'Bolpoin'], note: ''},
			{kanji: '', spell: 'シャープペンシル', mean: ['Pensil Mekanik', 'Pensil Pilot'], note: ''},
			{kanji: '', spell: 'かばん', mean: ['Tas', 'Koper'], note: ''},
			{kanji: '', spell: 'テレビ', mean: ['TV', 'Televisi'], note: ''},
			{kanji: '', spell: 'スマホ', mean: ['Smartphone', 'HP'], note: ''},
			{kanji: '', spell: 'バイク', mean: ['Motor', 'Sepeda Motor'], note: ''},
			{kanji: '', spell: 'いす', mean: ['Kursi', 'Bangku'], note: ''},
			{kanji: '', spell: 'コーヒー', mean: ['Kopi'], note: ''},
			{kanji: '', spell: 'ロビー', mean: ['Lobby', 'Lobi', 'Ruang Tunggu'], note: ''},
			{kanji: '', spell: 'トイレ', mean: ['Toilet', 'WC', 'Kamar Kecil'], note: ''},
			{kanji: '', spell: 'エレベーター', mean: ['Lift', 'Elevator'], note: ''},
			{kanji: '', spell: 'エスカレーター', mean: ['Tangga Berjalan', 'Eskalator'], note: ''},
			{kanji: '', spell: 'レストラン', mean: ['Restoran'], note: ''},
			{kanji: '', spell: 'うち', mean: ['Rumah'], note: ''},
			{kanji: '', spell: 'ネクタイ', mean: ['Dasi'], note: ''},
			{kanji: '', spell: 'おむちゃ', mean: ['Mainan'], note: ''},
			{kanji: '', spell: 'いくら', mean: ['Berapa'], note: ''},
			{kanji: '', spell: '～から', mean: ['Dari ~', 'Dari'], note: ''},
			{kanji: '', spell: '～まで', mean: ['Sampai ~', 'Sampai'], note: ''},
			{kanji: '', spell: 'スーパー', mean: ['Pasar Swalayan', 'Supermarket'], note: ''},
			{kanji: '', spell: 'たくさん', mean: ['Banyak'], note: ''},
			{kanji: '', spell: 'バス', mean: ['Bus', 'Bis'], note: ''},
			{kanji: '', spell: 'タクシー', mean: ['Taksi', 'Taxi'], note: ''},
			{kanji: '', spell: 'いつ', mean: ['Kapan'], note: ''},
			{kanji: '', spell: 'フリーマーケット', mean: ['Flea Market'], note: ''},
			{kanji: '', spell: 'します', mean: ['Melakukan', 'Mengerjakan', 'Berbuat'], note: ''},
			{kanji: '', spell: 'テニス', mean: ['Tenis'], note: ''},
			{kanji: '', spell: 'サッカー', mean: ['Sepak Bola'], note: ''},
			{kanji: '', spell: 'レポート', mean: ['Laporan'], note: ''},
			{kanji: '', spell: 'ビデオ', mean: ['Video', 'Kaset Video'], note: ''},
			{kanji: '', spell: 'パン', mean: ['Roti'], note: ''},
			{kanji: '', spell: 'ジュース', mean: ['Jus', 'Sari Buah'], note: ''},
			{kanji: '', spell: 'ビール', mean: ['Bir'], note: ''},
			{kanji: '', spell: 'いっしょに', mean: ['Bersama', 'Bersama-sama'], note: ''},
			{kanji: '', spell: 'ちょっと', mean: ['Sebentar', 'Sedikit'], note: ''},
			{kanji: '', spell: 'いつも', mean: ['Selalu'], note: ''},
			{kanji: '', spell: 'それから', mean: ['Setelah itu', 'Kemudian'], note: ''},
			{kanji: '', spell: 'はさみ', mean: ['Gunting'], note: ''},
			{kanji: '', spell: 'あげます', mean: ['Memberikan', 'Memberi'], note: ''},
			{kanji: '', spell: 'はし', mean: ['Sumpit'], note: ''},
			{kanji: '', spell: 'スプーン', mean: ['Sendok'], note: ''},
			{kanji: '', spell: 'ナイフ', mean: ['Pisau'], note: ''},
			{kanji: '', spell: 'フォーク', mean: ['Garpu'], note: ''},
			{kanji: '', spell: 'ケータイ', mean: ['HP', 'Handphone'], note: ''},
			{kanji: '', spell: 'メール', mean: ['Mail', 'Email', 'E-Mail'], note: ''},
			{kanji: '', spell: 'パンチ', mean: ['Pelubang Kertas'], note: ''},
			{kanji: '', spell: 'ホッチキス', mean: ['Stapler', 'Staples'], note: ''},
			{kanji: '', spell: 'セロテープ', mean: ['Selotip'], note: ''},
			{kanji: '', spell: 'プレゼント', mean: ['Hadiah', 'Kado'], note: ''},
			{kanji: '', spell: 'シャツ', mean: ['Kemeja'], note: ''},
			{kanji: '', spell: 'もう', mean: ['Sudah', 'Lagi'], note: ''},
			{kanji: '', spell: 'まだ', mean: ['Masih'], note: ''},
			{kanji: '', spell: 'これから', mean: ['Mulai Sekarang'], note: ''},
			{kanji: '', spell: '～いがかですか', mean: ['Bagaimana dengan', 'Bagaimana'], note: ''},
			{kanji: '', spell: 'どなた', mean: ['Siapa'], note: 'Sopan'},
			{kanji: '', spell: 'おいくつ', mean: ['Umur Berapa'], note: 'Sopan'},
			{kanji: '', spell: 'ノート', mean: ['Buku Catatan', 'Note'], note: 'Lebih Kecil'},
			{kanji: '', spell: 'デパート', mean: ['Toserba', 'Mall'], note: ''},
			{kanji: '', spell: 'ハンサム「な」', mean: ['Tampan', 'Gagah', 'Ganteng'], note: ''}, //5
			{kanji: '', spell: 'にぎやか「な」', mean: ['Ramai'], note: ''}, //5
			{kanji: '', spell: 'いい/よい', mean: ['Baik', 'Bagus'], note: ''}, //5
			{kanji: '', spell: 'おもしろい', mean: ['Menarik'], note: ''}, //5
			{kanji: '', spell: 'おいしい', mean: ['Enak', 'Lezat'], note: ''}, //5
			{kanji: '', spell: 'あまり～', mean: ['Tidak Begitu ~', 'Tidak Begitu'], note: ''}, //5
			{kanji: '', spell: 'とても～', mean: ['Sangat ~', 'Sangat'], note: ''}, //5
			{kanji: '', spell: 'ところ', mean: ['Tempat'], note: ''}, //5
			{kanji: '', spell: 'どう', mean: ['Bagaimana'], note: ''}, //5
			{kanji: '', spell: 'どんな～', mean: ['~ Yang Bagaimana', 'Yang Bagaimana'], note: ''}, //5
			{kanji: '', spell: 'そして', mean: ['Kemudian', 'Dan'], note: ''}, //5
			{kanji: '', spell: 'わかります', mean: ['Mengerti', 'Paham'], note: ''}, //6
			{kanji: '', spell: 'あります', mean: ['Ada'], note: 'Benda Mati'}, //6
			{kanji: '', spell: 'スポーツ', mean: ['Olahraga'], note: ''}, //6
			{kanji: '', spell: 'ダンス', mean: ['Dansa', 'Dance', 'Tarian'], note: ''}, //6
			{kanji: '', spell: 'クラシック', mean: ['Klasik'], note: ''}, //6
			{kanji: '', spell: 'カラオケ', mean: ['Karoke'], note: ''}, //6
			{kanji: '', spell: 'よく', mean: ['Dengan Baik'], note: ''}, //6
			{kanji: '', spell: 'だいたい', mean: ['Kebanyakan', 'Sebagian Besar'], note: ''}, //6
			{kanji: '', spell: 'かかります', mean: ['Membutuhkan', 'Memakan'], note: 'Waktu / Uang'}, //6
			{kanji: '', spell: 'チケット', mean: ['Tiket'], note: ''}, //6
			{kanji: '', spell: 'アルバイト', mean: ['Kerja Paruh Waktu'], note: ''}, //6
			{kanji: '', spell: 'どうして', mean: ['Kenapa'], note: ''}, //6
			{kanji: '', spell: 'だめです', mean: ['Tidak Bisa', 'Tidak Boleh'], note: ''}, //6
			{kanji: '', spell: 'いろいろ「な」', mean: ['Berbagai', 'Bermacam-macam'], note: ''}, //7
			{kanji: '', spell: 'パンダ', mean: ['Panda'], note: ''}, //7
			{kanji: '', spell: 'スイッチ', mean: ['Tombol', 'Saklar'], note: ''}, //7
			{kanji: '', spell: 'テーブル', mean: ['Meja Makan', 'Meja'], note: ''}, //7
			{kanji: '', spell: 'ベッド', mean: ['Tempat Tidur'], note: ''}, //7
			{kanji: '', spell: 'ドア', mean: ['Pintu'], note: ''}, //7
			{kanji: '', spell: 'ポスト', mean: ['Kotak Surat', 'Kotak Pos'], note: ''}, //7
			{kanji: '', spell: 'ビル', mean: ['Gedung'], note: ''}, //7
			{kanji: '', spell: 'カレンダー', mean: ['Kalender'], note: ''}, //7
			{kanji: '', spell: 'ナンプラー', mean: ['Kecap Ikan'], note: ''}, //7
			{kanji: '', spell: 'コーナー', mean: ['Bagian Penjualan', 'Corner'], note: ''}, //7
			/*{kanji: '', spell: 'リンゴ', mean: ['Apel'], note: '', new: true}, //8
			{kanji: '', spell: 'いくつ', mean: ['Berapa Banyak', 'Berapa'], note: 'Jumlah', new: true}, //8
			{kanji: '', spell: 'みかん', mean: ['Jeruk'], note: '', new: true}, //8
			{kanji: '', spell: 'サンドウィッチ', mean: ['Sandwitch'], note: '', new: true}, //8
			{kanji: '', spell: 'カレー「ライス」', mean: ['Kare', 'Nasi Kare'], note: '', new: true}, //8
			{kanji: '', spell: 'アイスクリーム', mean: ['Es Krim', 'Ice Cream'], note: '', new: true}, //8
			{kanji: '', spell: 'はがき', mean: ['Kartu Pos'], note: '', new: true}, //8
			{kanji: '', spell: 'クラス', mean: 	['Kelas'], note: '', new: true}, //8
			{kanji: '', spell: '～ぐらい', mean: ['Kira-kira', 'Kurang Lebih'], note: 'Waktu', new: true}, //8
			{kanji: '', spell: 'どのぐらい', mean: ['Berapa Lama'], note: '', new: true}, //8
			{kanji: '', spell: 'みんな', mean: ['Semuanya'], note: '', new: true}, //8
			{kanji: '', spell: '～だけ', mean: ['Hanya', 'Saja'], note: '', new: true}, //8
			{kanji: '', spell: 'かしこまりました', mean: ['Baik', 'Mengerti'], note: '', new: true}, //8
			{kanji: '', spell: 'エアメール', mean: ['Pos Udara'], note: '', new: true}, //8 */
			/*{kanji: '', spell: '～より', mean: ['Daripada', 'Dari pada'], note: '', new: true}, //9
			{kanji: '', spell: 'ホテル', mean: ['Hotel'], note: '', new: true}, //9
			{kanji: '', spell: 'パーティー', mean: ['Party', 'Pesta'], note: '', new: true}, //9
			{kanji: '', spell: '「お」すし', mean: ['Sushi'], note: '', new: true}, //9
			{kanji: '', spell: 'てんぷら', mean: ['Tempura'], note: '', new: true}, //9
			{kanji: '', spell: 'ずっと', mean: ['Selalu', 'Jauh Lebih'], note: '', new: true}, //9
			{kanji: '', spell: 'レモン', mean: ['Lemon'], note: '', new: true}, //9
			{kanji: '', spell: 'ほう「が」～', mean: ['Lebih ~', 'Lebih'], note: 'Dilanjuti Kata Sifat', new: true}, //9
			{kanji: '', spell: 'すごい', mean: ['Hebat', 'Banyak'], note: 'Benda', new: true}, //9 */
			/*{kanji: '', spell: 'プール', mean: ['Kolam Renang'], note: '', new: true}, //10
			{kanji: '', spell: 'スキー', mean: ['Ski'], note: '', new: true}, //10
			{kanji: '', spell: '～ごろ', mean: ['Sekitar ~', 'Sekitar'], note: '', new: true}, //10
			{kanji: '', spell: 'どこか', mean: ['Suatu Tempat'], note: '', new: true}, //10
			{kanji: '', spell: 'おなかがすきます', mean: ['Lapar'], note: '', new: true}, //10
			{kanji: '', spell: 'そうしましょう', mean: ['Iya mari', 'Ayo'], note: '', new: true}, //10*/
			{kanji: '', spell: 'つけます', mean: ['Menyalakan', 'Memasang', 'Menghidupkan'], note: '', new: true}, //11
			{kanji: '', spell: 'います', mean: ['Ada'], note: 'Benda Hidup, KK-2', new: true}, //11
			{kanji: '', spell: 'ゆっくり', mean: ['Pelan-pelan', 'Perlahan'], note: '', new: true}, //11
			{kanji: '', spell: 'コピーします', mean: ['Memfotokopi'], note: '', new: true}, //11
			{kanji: '', spell: 'エアコン', mean: ['Air Conditioner', 'AC'], note: '', new: true}, //11
			{kanji: '', spell: 'パスポート', mean: ['Paspor'], note: '', new: true}, //11
			{kanji: '', spell: 'まっすぐ', mean: ['Lurus'], note: '', new: true}, //11
			{kanji: '', spell: 'すぐ', mean: ['Segera', 'Langsung'], note: '', new: true}, //11
			{kanji: '', spell: 'また', mean: ['Lagi'], note: '', new: true}, //11
			{kanji: '', spell: 'あとで', mean: ['Nanti'], note: '', new: true}, //11
			{kanji: '', spell: 'もう少し', mean: ['Sedikit Lagi'], note: '', new: true}, //11*/
			{kanji: '', spell: 'カタログ', mean: ['Katalog'], note: '', new: true}, //12
			{kanji: '', spell: 'ソフト', mean: ['Perangkat Lunak', 'Software'], note: '', new: true}, //12
			{kanji: '', spell: 'いらっしゃいます', mean: ['Ada'], note: '', new: true}, //12*/
			//=== END WITHOUT KANJI ================================================================================
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
