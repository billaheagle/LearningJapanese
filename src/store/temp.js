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
			{kanji: '学生', spell: 'がくせい', mean: ['Murid', 'Siswa', 'Mahasiswa'], note: ''},
			{kanji: '会社員', spell: 'かいしゃいｎ', mean: ['Pegawai', 'Karyawan'], note: ''},
			{kanji: '練習', spell: 'れんしゅう', mean: ['Latihan'], note: ''},
			{kanji: '宿題', spell: 'しゅくだい', mean: ['PR', 'Pekerjaan Rumah'], note: ''},
			{kanji: '大学', spell: 'だいがっこう', mean: ['Kampus', 'Universitas'], note: ''},
			{kanji: '病院', spell: 'びょういん', mean: ['Rumah Sakit'], note: ''},
			{kanji: '医者', spell: 'いしゃ', mean: ['Dokter'], note: ''},
			{kanji: '研究者', spell: 'けんきゅうしゃ', mean: ['Peneliti'], note: ''},
			{kanji: '学校', spell: 'がっこう', mean: ['Sekolah'], note: ''},
			{kanji: '銀行', spell: 'ぎんこう', mean: ['Bank'], note: ''},
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
			{kanji: '起きます', spell: 'おきます', mean: ['Bangun'], note: ''},
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
			{kanji: '大変', spell: 'たいへん', mean: ['Sulit', 'Sukar', 'Susah', 'Berat'], note: ''},{kanji: '郵便局', spell: 'ゆうびんきょく', mean: ['Kantor Pos'], note: ''},
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
			{kanji: '中', spell: 'なか', mean: ['Didalam', 'Di Dalam', 'Dalam'], note: ''},
			{kanji: '食べます', spell: 'たべます', mean: ['Makan'], note: ''},
			{kanji: '飲みます', spell: 'のみます', mean: ['Minum'], note: ''},
			{kanji: '吸います', spell: 'すいます', mean: ['Menghisap'], note: ''},
			{kanji: '見ます', spell: 'みます', mean: ['Melihat'], note: ''},
			{kanji: '聞きます', spell: 'ききます', mean: ['Mendengar'], note: ''},
			{kanji: '読みます', spell: 'よみます', mean: ['Membaca'], note: ''},
			{kanji: '描きます', spell: 'かきます', mean: ['Menggambar'], note: ''},
			{kanji: '買います', spell: 'かいます', mean: ['Membeli'], note: ''},
			{kanji: '取ります', spell: 'とります', mean: ['Mengambil'], note: ''},
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
			{kanji: '公園', spell: 'こうえん', mean: ['Taman'], note: ''},
			{kanji: '切ります', spell: 'きります', mean: ['Memotong', 'Menggunting'], note: '', new: true}, //4
			{kanji: '送ります', spell: 'おくります', mean: ['Mengirim'], note: '', new: true}, //4
			{kanji: '貰います', spell: 'もらいます', mean: ['Mendapatkan', 'Menerima'], note: '', new: true}, //4
			{kanji: '貸します', spell: 'かします', mean: ['Meminjamkan', 'Menyewakan'], note: '', new: true}, //4
			{kanji: '借ります', spell: 'かります', mean: ['Meminjam', 'Menyewa'], note: '', new: true}, //4
			{kanji: '教えます', spell: 'おしえます', mean: ['Mengajar', 'Mengajarkan'], note: '', new: true}, //4
			{kanji: '電話をかけます', spell: 'でんわをかけます', mean: ['Menelpon'], note: '', new: true}, //4
			{kanji: '手', spell: 'て', mean: ['Tangan'], note: '', new: true}, //4
			{kanji: '年賀状', spell: 'ねんがじょう', mean: ['Kartu Tahun Baru'], note: '', new: true}, //4
			{kanji: '消しゴム', spell: 'けしごむ', mean: ['Penghapus', 'Penghapus Karet'], note: '', new: true}, //4
			{kanji: '紙', spell: 'かみ', mean: ['Kertas'], note: '', new: true}, //4
			{kanji: '花', spell: 'はな', mean: ['Bunga'], note: '', new: true}, //4
			{kanji: '荷物', spell: 'にもつ', mean: ['Barang'], note: '', new: true}, //4
			{kanji: 'お金', spell: 'おかね', mean: ['Uang', 'Duit'], note: '', new: true}, //4
			{kanji: 'お父さん', spell: 'おとうさん', mean: ['Bapak', 'Bapak Orang Lain'], note: '', new: true}, //4
			{kanji: 'お母さん', spell: 'おかあさん', mean: ['Ibu', 'Ibu Orang Lain'], note: '', new: true}, //4
			{kanji: '切符', spell: 'きっぷ', mean: ['Tiket', 'Karcis'], note: '', new: true}, //4
			{kanji: '恋人', spell: 'こいびと', mean: ['Pacar', 'Kekasih'], note: '', new: true}, //4
			{kanji: '出します', spell: 'だします', mean: ['Mengeluarkan'], note: '', new: true}, //4
			{kanji: '家', spell: 'いえ', mean: ['Rumah'], note: '', new: true}, //4
			{kanji: '綺麗「な」', spell: 'きれい', mean: ['Cantik', 'Bersih'], note: '', new: true}, //5
			{kanji: '静か「な」', spell: 'しずか', mean: ['Sunyi', 'Tenang'], note: '', new: true}, //5
			{kanji: '有名「な」', spell: 'ゆうめい', mean: ['Terkenal'], note: '', new: true}, //5
			{kanji: '親切「な」', spell: 'しんせつ', mean: ['Baik Hati'], note: 'Untuk Orang Lain', new: true}, //5
			{kanji: '元気「な」', spell: 'げんき', mean: ['Sehat', 'Sehat Wal Afiyat'], note: '', new: true}, //5
			{kanji: '暇「な」', spell: 'ひま', mean: ['Senggang', 'Luang'], note: '', new: true}, //5
			{kanji: '便利「な」', spell: 'べんり', mean: ['Praktis', 'Simpel'], note: '', new: true}, //5
			{kanji: '素敵「な」', spell: 'すてき', mean: ['Bagus'], note: '', new: true}, //5
			{kanji: '大き「い」', spell: 'おおきい', mean: ['Besar'], note: '', new: true}, //5
			{kanji: '小さ「い」', spell: 'ちいさい', mean: ['Kecil'], note: '', new: true}, //5
			{kanji: '新し「い」', spell: 'あたらし', mean: ['Baru'], note: ''}, //5
			{kanji: '古「い」', spell: 'ふるい', mean: ['Lama', 'Tua'], note: '', new: true}, //5
			{kanji: '悪「い」', spell: 'わるい', mean: ['Buruk', 'Jelek'], note: '', new: true}, //5
			{kanji: '暑「い」', spell: 'あつい', mean: ['Panas'], note: 'Cuaca', new: true}, //5
			{kanji: '熱「い」', spell: 'あつい', mean: ['Panas'], note: 'Benda', new: true}, //5
			{kanji: '寒「い」', spell: 'さむい', mean: ['Dingin'], note: 'Cuaca', new: true}, //5
			{kanji: '冷たし', spell: 'つめたい', mean: ['Dingin'], note: 'Benda', new: true}, //5
			{kanji: '難し「い」', spell: 'むずかしい', mean: ['Sulit', 'Susah'], note: '', new: true}, //5
			{kanji: '易し「い」', spell: 'やさしい', mean: ['Mudah', 'Gampang'], note: '', new: true}, //5
			{kanji: '高「い」', spell: 'たかい', mean: ['Tinggi', 'Mahal'], note: '', new: true}, //5
			{kanji: '安「い」', spell: 'やすい', mean: ['Murah'], note: '', new: true}, //5
			{kanji: '低「い」', spell: 'ひくい', mean: ['Rendah'], note: '', new: true}, //5
			{kanji: '忙し「い」', spell: 'いそがしい', mean: ['Sibuk'], note: '', new: true}, //5
			{kanji: '楽し「い」', spell: 'たのしい', mean: ['Senang', 'Gembira'], note: '', new: true}, //5
			{kanji: '白「い」', spell: 'しろい', mean: ['Putih'], note: 'Sifat', new: true}, //5
			{kanji: '黒「い」', spell: 'くろい', mean: ['Hitam'], note: 'Sifat', new: true}, //5
			{kanji: '赤「い」', spell: 'あかい', mean: ['Merah'], note: 'Sifat', new: true}, //5
			{kanji: '青「い」', spell: 'あおい', mean: ['Biru'], note: 'Sifat', new: true}, //5
			{kanji: '桜', spell: 'さくら', mean: ['Bunga Sakura', 'Sakura'], note: '', new: true}, //5
			{kanji: '山', spell: 'やま', mean: ['Gunung'], note: '', new: true}, //5
			{kanji: '町', spell: 'まち', mean: ['Kota'], note: '', new: true}, //5
			{kanji: '食べ物', spell: 'たべもの', mean: ['Makanan'], note: '', new: true}, //5
			{kanji: '寮', spell: 'りょう', mean: ['Asrama'], note: '', new: true}, //5
			{kanji: '生活', spell: 'せいかつ', mean: ['Kehidupan'], note: '', new: true}, //5
			{kanji: 'お仕事', spell: 'おしごと', mean: ['Pekerjaan'], note: '', new: true}, //5
			{kanji: '金閣寺', spell: 'きんかくじ', mean: ['Kuil Kinkakuji'], note: '', new: true}, //5
			{kanji: '旅行', spell: 'りょこう', mean: ['Perjalanan', 'Pariwisata'], note: '', new: true}, //5
			{kanji: '咲きます', spell: 'さきます', mean: ['Berkembang', 'Merkar'], note: '', new: true}, //5
			//--- HAS KANJI AND HAS NOTE ---------------------------------------------------------------------------
			{kanji: '教師', spell: 'きょうし', mean: ['Guru', 'Dosen'], note: 'Profesi Sendiri'},
			{kanji: 'あの方', spell: 'あのかた', mean: ['Orang Itu'], note: 'Sopan'},
			{kanji: '失礼ですが', spell: 'しつれいですが', mean: ['Permisi', 'Maaf'], note: 'Sopan'},
			{kanji: 'お手洗い', spell: 'おてあらい', mean: ['Toilet', 'WC', 'Kamar Kecil'], note: 'Sopan'},
			{kanji: '遊園地', spell: 'ゆえんち', mean: ['Taman Hiburan'], note: 'Ragu di Spell'},
			{kanji: '彼', spell: 'かれ', mean: ['Dia', 'Dia Laki-laki'], note: 'Laki-laki'},
			{kanji: '彼女', spell: 'かのじょ', mean: ['Dia', 'Dia Perempuan'], note: 'Perempuan'},
			{kanji: '～番線', spell: '～ばんせん', mean: ['Peron Nomor ~', 'Peron Nomor'], note: ''},
			{kanji: '撮ります', spell: 'とります', mean: ['Mengambil Foto'], note: 'Foto'},
			{kanji: '習います', spell: 'ならいます', mean: ['Belajar'], note: 'Ada Mentor', new: true}, //4
			{kanji: '父', spell: 'ちち', mean: ['Bapak', 'Ayah'], note: 'Ayah Kandung', new: true}, //4
			{kanji: '母', spell: 'はは', mean: ['Ibu', 'Bunda'], note: 'Ibu Kandung', new: true}, //4
			//=== END HAS KANJI ====================================================================================
			//=== START WITHOUT KANJI ==============================================================================
			{kanji: '', spell: 'あなた', mean: ['Anda', 'Kamu'], note: ''},
			{kanji: '', spell: 'もんだい', mean: ['Soal'], note: ''},
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
			{kanji: '', spell: 'おみやげ', mean: ['Oleh-oleh'], note: ''},
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
			{kanji: '', spell: 'いらっしゃいませ', mean: ['Selamat Datang'], note: ''},
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
			{kanji: '', spell: 'はさみ', mean: ['Gunting'], note: '', new: true}, //4
			{kanji: '', spell: 'あげます', mean: ['Memberikan', 'Memberi'], note: '', new: true}, //4
			{kanji: '', spell: 'はし', mean: ['Sumpit'], note: '', new: true}, //4
			{kanji: '', spell: 'スプーン', mean: ['Sendok'], note: '', new: true}, //4
			{kanji: '', spell: 'ナイフ', mean: ['Pisau'], note: '', new: true}, //4
			{kanji: '', spell: 'フォーク', mean: ['Garpu'], note: '', new: true}, //4
			{kanji: '', spell: 'ケータイ', mean: ['HP', 'Handphone'], note: '', new: true}, //4
			{kanji: '', spell: 'メール', mean: ['Mail', 'Email', 'E-Mail'], note: '', new: true}, //4
			{kanji: '', spell: 'パンチ', mean: ['Pelubang Kertas'], note: '', new: true}, //4
			{kanji: '', spell: 'ホッチキス', mean: ['Stapler', 'Staples'], note: '', new: true}, //4
			{kanji: '', spell: 'セロテープ', mean: ['Selotip'], note: '', new: true}, //4
			{kanji: '', spell: 'プレゼント', mean: ['Hadiah', 'Kado'], note: '', new: true}, //4
			{kanji: '', spell: 'シャツ', mean: ['Kemeja'], note: '', new: true}, //4
			{kanji: '', spell: 'もう', mean: ['Sudah', 'Lagi'], note: '', new: true}, //4
			{kanji: '', spell: 'まだ', mean: ['Masih'], note: '', new: true}, //4
			{kanji: '', spell: 'これから', mean: ['Mulai Sekarang'], note: '', new: true}, //4
			{kanji: '', spell: '～すてきですね', mean: ['~ Bagus Ya', 'Bagus Ya'], note: '', new: true}, //4
			{kanji: '', spell: '～いがかですか', mean: ['Bagaimana dengan', 'Bagaimana'], note: '', new: true}, //4
			{kanji: '', spell: 'ハンサム「な」', mean: ['Tampan', 'Gagah', 'Ganteng'], note: '', new: true}, //5
			{kanji: '', spell: 'にぎやか「な」', mean: ['Ramai'], note: '', new: true}, //5
			{kanji: '', spell: 'いい/よい', mean: ['Baik', 'Bagus'], note: '', new: true}, //5
			{kanji: '', spell: 'おもしろ「い」', mean: ['Menarik'], note: '', new: true}, //5
			{kanji: '', spell: 'おいし「い」', mean: ['Enak', 'Lezat'], note: '', new: true}, //5
			{kanji: '', spell: 'あまり～', mean: ['Tidak Begitu ~', 'Tidak Begitu'], note: '', new: true}, //5
			{kanji: '', spell: 'とても～', mean: ['Sangat ~', 'Sangat'], note: ''}, //5
			{kanji: '', spell: 'ところ', mean: ['Tempat'], note: '', new: true}, //5
			{kanji: '', spell: 'どう', mean: ['Bagaimana'], note: '', new: true}, //5
			{kanji: '', spell: 'どんな～', mean: ['~ Yang Bagaimana', 'Yang Bagaimana'], note: '', new: true}, //5
			{kanji: '', spell: 'そして', mean: ['Kemudian', 'Dan'], note: '', new: true}, //5
			{kanji: '', spell: 'またいらっしゃってください', mean: ['Silahkan Datang Lagi'], note: '', new: true}, //5
			//--- WITHOUT KANJI HAS NOTE ---------------------------------------------------------------------------
			{kanji: '', spell: 'どなた', mean: ['Siapa'], note: 'Sopan'},
			{kanji: '', spell: 'おいくつ', mean: ['Umur Berapa'], note: 'Sopan'},
			{kanji: '', spell: 'ノート', mean: ['Buku Catatan', 'Note'], note: 'Lebih Kecil'},
			{kanji: '', spell: 'デパート', mean: ['Toserba', 'Mall'], note: ''},
			{kanji: '', spell: '～ぐらい', mean: ['Kira-kira', 'Kurang Lebih'], note: 'Waktu'},
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
