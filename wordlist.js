const wordList = [
    // Buah-buahan
    "apel", "alpukat", "anggur", "asam", "belimbing", "buah", "ceri", "durian", "delima", "duku",
    "enau", "frambos", "fruit", "gedang", "gandaria", "guava", "halia", "hijau", "jambu", "jeruk",
    "kelapa", "kedondong", "kesemek", "kiwi", "kurma", "leci", "lemon", "lengkeng", "limau", "mangga",
    "manggis", "melon", "mentimun", "markisa", "nanas", "nangka", "orange", "pepaya", "pir", "pisang",
    "rambutan", "raspberi", "salak", "sawo", "semangka", "sirsak", "srikaya", "strawberi", "sukun", "tomat",
    "terong", "ubi", "vanila", "waluh", "wortel", "zaitun",

    // Hewan
    "ayam", "anjing", "babi", "bebek", "burung", "cicak", "cacing", "domba", "elang", "gajah",
    "harimau", "hamster", "ikan", "itik", "jangkrik", "kucing", "kambing", "kuda", "kelinci", "kupu",
    "kura", "kancil", "kijang", "koala", "lalat", "lumba", "landak", "macan", "monyet", "nyamuk",
    "orangutan", "paus", "panda", "rusa", "rubah", "sapi", "serigala", "singa", "tikus", "tupai",
    "ular", "unta", "ubur", "walet", "wader", "yuyu", "zebra",

    // Alam
    "air", "angin", "awan", "batu", "bumi", "bulan", "bintang", "cabang", "daun", "embun",
    "es", "flora", "fauna", "gunung", "gurun", "hujan", "hutan", "iklim", "jagung", "kabut",
    "karang", "laut", "langit", "lumpur", "matahari", "mendung", "nuklir", "ombak", "pasir", "pohon",
    "ranting", "sawah", "sungai", "salju", "taman", "tanah", "tumbuhan", "udara", "vulkanik", "waduk",

    // Makanan
    "ayam", "bakso", "bubur", "cokelat", "daging", "es", "french", "goreng", "gulai", "hamburger",
    "ikan", "jagung", "kacang", "kue", "lauk", "mie", "nasi", "opor", "pizza", "rendang",
    "sate", "soto", "sup", "tahu", "tempe", "ubi", "wafel", "yogurt",

    // Profesi
    "aktor", "arsitek", "atlet", "bos", "dokter", "direktur", "editor", "fotografer", "guru", "hakim",
    "insinyur", "jaksa", "koki", "karyawan", "lurah", "manager", "nakhoda", "opas", "polisi", "pilot",
    "qari", "ratu", "satpam", "tentara", "ustad", "vokalis", "wartawan", "youtuber",

    // Transportasi
    "ambulans", "bus", "becak", "delman", "eskalator", "feri", "gerobak", "helikopter", "kapal", "kereta",
    "lift", "mobil", "motor", "odong", "pesawat", "sepeda", "taksi", "truk", "underground", "vespa",

    // Teknologi
    "aplikasi", "baterai", "charger", "data", "email", "file", "gadget", "hardware", "internet", "jaringan",
    "komputer", "laptop", "monitor", "notifikasi", "online", "printer", "query", "router", "software", "tablet",
    "upload", "virus", "website", "xml", "youtube", "zoom",

    // Olahraga
    "atletik", "badminton", "basket", "catur", "dayung", "futsal", "golf", "hoki", "judo", "karate",
    "lari", "minton", "narik", "olahraga", "pencak", "renang", "sepak", "tenis", "voli", "wushu",

    // Sekolah
    "akuntansi", "bahasa", "buku", "cerdas", "dosen", "ekonomi", "fisika", "geografi", "guru", "huruf",
    "ilmu", "jurnal", "kampus", "kelas", "laboratorium", "mahasiswa", "nilai", "olahraga", "pelajaran", "sekolah",
    "tugas", "ujian", "universitas", "vokasi", "wisuda",

    // Keluarga
    "ayah", "bapak", "ibu", "mama", "papa", "kakek", "nenek", "paman", "bibi", "adik",
    "kakak", "saudara", "sepupu", "keponakan", "menantu", "cucu", "buyut", "keluarga", "rumah", "tangga",

    // Kota & Negara
    "aceh", "bali", "bandung", "bogor", "bekasi", "denpasar", "england", "flores", "garut", "indonesia",
    "jakarta", "jepang", "korea", "lombok", "malang", "medan", "newyork", "osaka", "palembang", "riau",
    "surabaya", "semarang", "tangerang", "ubud", "yogyakarta",

    // Kata sifat
    "aman", "bahagia", "cantik", "dingin", "enak", "gembira", "hangat", "indah", "jernih", "kaya",
    "lembut", "muda", "nikmat", "oke", "panas", "ramah", "sederhana", "tua", "unik", "wangi",

    // Kata kerja
    "ajak", "baca", "cari", "dengar", "engkol", "foto", "gambar", "hitung", "isi", "jalan",
    "kunjung", "lari", "main", "nonton", "olah", "pikir", "renang", "simpan", "tulis", "usap",

    // Lain-lain
    "abjad", "benda", "cinta", "dunia", "emas", "fantasi", "gajah", "hutan", "ilmu", "jendela",
    "kunci", "lampu", "malam", "negara", "obat", "pintu", "rahasia", "sakit", "tangan", "uang",
    "warna", "xenon", "yakin", "zaman"
];