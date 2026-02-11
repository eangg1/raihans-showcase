// src/data/films.ts
export interface Film {
  id: string;
  title: string;
  genre: string[];
  year: number;
  director: string;
  duration: string;
  description: string;
  rating: number;
  cover: string;
}

export const films: Film[] = [
  {
    id: "a-man-called-otto",
    title: "A Man Called Otto",
    genre: ["Drama", "Comedy"],
    year: 2022,
    director: "Marc Forster",
    duration: "126 minutes",
    description:
      "Otto Anderson, seorang duda pemarah yang kehilangan semangat hidup, mulai menemukan makna baru ketika keluarga muda pindah ke sebelah rumahnya dan membangun hubungan yang tak terduga.",
    rating: 7.5,
    cover: "https://image.tmdb.org/t/p/w500/130H1gap9lFfiTF9iDrqNIkFvC9.jpg",
  },
  {
    id: "nobody1",
    title: "Nobody",
    genre: ["Action", "Thriller", "Crime"],
    year: 2021,
    director: "Ilya Naishuller",
    duration: "92 minutes",
    description:
      "Seorang pria biasa bernama Hutch Mansell kembali ke masa lalunya yang penuh kekerasan setelah rumahnya dirampok, mengungkap bahwa dia bukan orang biasa.",
    rating: 7.4,
    cover: "https://image.tmdb.org/t/p/w500/oBgWY00bEFeZ9N25wWVyuQddbAo.jpg",
  },
  {
    id: "nobody2",
    title: "Nobody 2",
    genre: ["Action", "Thriller"],
    year: 2025,
    director: "Ilya Naishuller",
    duration: "77",
    description:
      "Sekuel dari *Nobody (2021)*, Hutch Mansell kembali menghadapi dunia kriminal ketika masa lalunya kembali menghantui keluarganya. Film ini akan melanjutkan kisah penuh aksi dan misteri dari karakter antihero tersebut.",
    rating: 6.3, // belum rilis
    cover: "https://m.media-amazon.com/images/M/MV5BZDUyMDQwZjEtYmYwYS00N2Q5LWE4NDQtMjZhZjU0Mzg5YjY3XkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: "1",
    title: "Stranger Things (S1)",
    genre: ["Sci-Fi", "Thriller", "Mystery"],
    year: 2016,
    director: "The Duffer Brothers",
    duration: "8 Episodes",
    description:
      "Ketika seorang anak laki-laki menghilang di kota kecil Hawkins, teman-temannya menemukan seorang gadis misterius dengan kekuatan telekinetik yang membawa mereka ke dunia rahasia bernama Upside Down.",
    rating: 8.8,
    cover: "https://images-cdn.ubuy.co.id/6360cd939963074268417953-stranger-things-1-4-tv-show-poster.jpg",
  },
  {
    id: "2",
    title: "Stranger Things (S2)",
    genre: ["Sci-Fi", "Thriller", "Drama"],
    year: 2017,
    director: "The Duffer Brothers",
    duration: "9 Episodes",
    description:
      "Setahun setelah kembalinya Will Byers, gang Hawkins harus menghadapi ancaman baru dari dimensi Upside Down yang semakin berbahaya, termasuk makhluk raksasa yang dikenal sebagai Mind Flayer.",
    rating: 8.7,
    cover: "https://resizing.flixster.com/cs-44B-LN4TMp-5wnSXitM99U7M=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vYTM4ZDFlYzctZmUxMS00ZGY1LTg1NGItMGNmNGNjOGNkZDJhLmpwZw==",
  },
  {
    id: "3",
    title: "Stranger Things (S3)",
    genre: ["Sci-Fi", "Adventure", "Horror"],
    year: 2019,
    director: "The Duffer Brothers",
    duration: "8 Episodes",
    description:
      "Musim panas tahun 1985 membawa petualangan baru ketika mall Hawkins menjadi pusat konspirasi rahasia Soviet yang membuka kembali gerbang ke Upside Down, memaksa kelompok sahabat ini bersatu kembali.",
    rating: 8.6,
    cover: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg",
  },
  {
    id: "4",
    title: "Stranger Things (S4)",
    genre: ["Sci-Fi", "Horror", "Drama"],
    year: 2022,
    director: "The Duffer Brothers",
    duration: "9 Episodes",
    description:
      "Setelah peristiwa brutal di Starcourt, geng Hawkins terpisah. Namun ketika ancaman baru bernama Vecna muncul dari Upside Down, mereka kembali berjuang melawan teror yang lebih gelap dari sebelumnya.",
    rating: 8.9,
    cover: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
  },
  {
    id: "insidious1",
    title: "Insidious (2010)",
    genre: ["Horror", "Thriller", "Supernatural"],
    year: 2010,
    director: "James Wan",
    duration: "103 minutes",
    description:
      "Keluarga Lambert berjuang menyelamatkan putra mereka yang koma setelah arwah jahat mencoba mengambil alih tubuhnya dari dimensi gelap bernama The Further.",
    rating: 6.8,
    cover: "https://m.media-amazon.com/images/M/MV5BMTYyOTAxMDA0OF5BMl5BanBnXkFtZTcwNzgwNTc1NA@@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: "insidious2",
    title: "Insidious: Chapter 2 (2013)",
    genre: ["Horror", "Thriller", "Mystery"],
    year: 2013,
    director: "James Wan",
    duration: "106 minutes",
    description:
      "Setelah berhasil membawa Josh dan Dalton kembali, keluarga Lambert menyadari bahwa roh jahat belum sepenuhnya pergi dan masa lalu Josh menyimpan rahasia mengerikan.",
    rating: 6.6,
    cover: "https://upload.wikimedia.org/wikipedia/id/b/bd/Insidious_-_Chapter_2_Poster.jpg",
  },
  {
    id: "insidious3",
    title: "Insidious: Chapter 3 (2015)",
    genre: ["Horror", "Thriller", "Mystery"],
    year: 2015,
    director: "Leigh Whannell",
    duration: "97 minutes",
    description:
      "Prekuel dari dua film pertama, menceritakan Elise Rainier yang membantu seorang gadis remaja berhadapan dengan entitas jahat yang mencoba mencuri jiwanya.",
    rating: 6.1,
    cover: "https://upload.wikimedia.org/wikipedia/id/thumb/0/06/Insidious_%E2%80%93_Chapter_3_%28film_poster%29.png/250px-Insidious_%E2%80%93_Chapter_3_%28film_poster%29.png",
  },
  {
    id: "insidious4",
    title: "Insidious: The Last Key (2018)",
    genre: ["Horror", "Thriller", "Supernatural"],
    year: 2018,
    director: "Adam Robitel",
    duration: "103 minutes",
    description:
      "Elise Rainier menghadapi masa lalunya yang kelam ketika kasus barunya membawanya kembali ke rumah masa kecilnya — tempat asal semua ketakutannya.",
    rating: 5.7,
    cover: "https://images.moviesanywhere.com/fafa1f8029f97117dbc42cb231f1ffa6/408b9b34-9c9e-49ef-aed0-4671fab12e9d.jpg",
  },
  {
    id: "insidious5",
    title: "Insidious: The Red Door (2023)",
    genre: ["Horror", "Thriller", "Mystery"],
    year: 2023,
    director: "Patrick Wilson",
    duration: "107 minutes",
    description:
      "Sepuluh tahun setelah peristiwa sebelumnya, Dalton Lambert masuk kuliah dan mulai dihantui kembali oleh bayangan masa lalu yang berakar pada The Further.",
    rating: 6.0,
    cover: "https://m.media-amazon.com/images/M/MV5BMGExMzQ2NWYtMjk2My00YzczLTk0MGQtYzliNDU3ZjU1NDU1XkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: "vagabond",
    title: "Vagabond",
    genre: ["Action", "Thriller", "Mystery"],
    year: 2019,
    director: "Yoo In-sik",
    duration: "16 Episodes",
    description:
      "Seorang stuntman bernama Cha Dal-gun berjuang mengungkap kebenaran di balik kecelakaan pesawat misterius yang menewaskan keponakannya, terjerat dalam konspirasi besar yang melibatkan pemerintah.",
    rating: 8.3,
    cover: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhSljWvIn4CDGR5-sPkSlq9RpcjRxXVzxmUMs2J4U49ajtOuOqqPPMh3IssYU5GJXqt29I2TvGd0z8e6pNgbxWqVrEPFlnyMCRQuFCIGzY6hhtD3kv9SzDhrP6sd9AMwMOzO-dQTtAliSQ/s1600/Vagabond.jpg",
  },
  {
    id: "taxi-driver1",
    title: "Taxi Driver (Season 1)",
    genre: ["Action", "Crime", "Thriller"],
    year: 2021,
    director: "Park Joon-woo",
    duration: "16 Episodes",
    description:
      "Kim Do-gi, mantan perwira pasukan khusus, bekerja di perusahaan taksi misterius Rainbow Taxi yang diam-diam membalas dendam bagi korban ketidakadilan.",
    rating: 8.6,
    cover: "https://i.pinimg.com/736x/2e/ca/78/2eca78b0c531f8106539171277d237ba.jpg",
  },
  {
    id: "taxi-driver2",
    title: "Taxi Driver (Season 2)",
    genre: ["Action", "Crime", "Drama"],
    year: 2023,
    director: "Lee Dan",
    duration: "16 Episodes",
    description:
      "Rainbow Taxi kembali beroperasi, menghadapi kasus-kasus baru dan musuh yang lebih berbahaya, sementara Do-gi terus berjuang dengan masa lalunya yang kelam.",
    rating: 8.8,
    cover: "https://asianwiki.com/images/b/b8/Taxi_Driver_2-p1.jpg",
  },
  {
    id: "taxi-driver3",
    title: "Taxi Driver (Season 3)",
    genre: ["Action", "Crime", "Drama", "Thriller"],
    year: 2025,
    director: "Kang Bo Seung",
    duration: "16 Episodes",
    description:
      "Musim ketiga Taxi Driver mengikuti tim Rainbow Taxi yang kembali menjalankan misi balas dendam bagi korban ketidakadilan. Di season ini, mereka menghadapi kasus lebih gelap dan kompleks dari korupsi industri hingga jaringan kejahatan internasional, sambil memperlihatkan dinamika karakter yang makin dalam dan aksi yang lebih intens.",  
    rating: 8.9,
    cover: "https://asianwiki.com/images/0/0d/Taxi_Driver_3-tp1.jpg"
  },
  {
    id: "study-group",
    title: "Study Group",
    genre: ["Action", "Drama", "School"],
    year: 2024,
    director: "Lee Jang-woo",
    duration: "10 Episodes",
    description:
      "Yoon Ga-min, siswa tekun di sekolah penuh kekerasan, membentuk kelompok belajar untuk masuk universitas top sambil bertahan dari kekacauan dan intimidasi di sekitarnya.",
    rating: 7.8,
    cover: "https://asianwiki.com/images/d/dd/Study_Group-p2.jpg",
  },
  {
    id: "weak-hero-class1",
    title: "Weak Hero Class 1",
    genre: ["Action", "Drama", "School"],
    year: 2022,
    director: "Yoo Soo-min",
    duration: "8 Episodes",
    description:
      "Yeon Si-eun, siswa jenius dengan tubuh lemah, melawan para pengganggu menggunakan kecerdasan dan strategi yang tajam dalam perjuangan mempertahankan harga diri di sekolahnya.",
    rating: 8.9,
    cover: "https://awsimages.detik.net.id/community/media/visual/2022/11/19/weak-hero-class-1-6.jpeg?w=700&q=90",
  },
  {
    id: "weak-hero-class2",
    title: "Weak Hero Class 2",
    genre: ["Action", "Drama"],
    year: 2025,
    director: "Han Jun-hee",
    duration: "8 episode",
    description:
      "Kisah Yeon Si-eun berlanjut setelah peristiwa tragis di sekolah lamanya. Kini, ia harus menghadapi lingkungan baru dan konflik batin yang semakin berat sambil mencari arti kekuatan sejati.",
    rating: 8.4,
    cover: "https://asianwiki.com/images/0/08/Weak_Hero_Class_2-p1.jpg",
  },
  {
    id: "soul",
    title: "Soul",
    genre: ["Animation", "Fantasy", "Adventure"],
    year: 2020,
    director: "Pete Docter",
    duration: "100 minutes",
    description:
      "Joe Gardner, seorang guru musik yang kehilangan semangat hidup, secara tak sengaja terjebak di dunia jiwa dan menemukan arti kehidupan yang sebenarnya.",
    rating: 8.1,
    cover: "https://image.tmdb.org/t/p/w500/hm58Jw4Lw8OIeECIq5qyPYhAeRJ.jpg",
  },
  {
    id: "gravity-falls1",
    title: "Gravity Falls (Season 1)",
    genre: ["Animation", "Mystery", "Comedy", "Adventure"],
    year: 2012,
    director: "Alex Hirsch",
    duration: "20 Episodes",
    description:
      "Dipper dan Mabel Pines menghabiskan liburan musim panas mereka di kota kecil Gravity Falls bersama paman mereka, Stan. Mereka segera menyadari bahwa kota itu penuh dengan misteri dan makhluk aneh.",
    rating: 8.9,
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzhqRhlfedyB5M838PgNeO5FxcxbTgUZ0_pw&s",
  },
  {
    id: "gravity-falls2",
    title: "Gravity Falls (Season 2)",
    genre: ["Animation", "Mystery", "Fantasy", "Adventure"],
    year: 2014,
    director: "Alex Hirsch",
    duration: "20 Episodes",
    description:
      "Petualangan Dipper dan Mabel berlanjut ketika rahasia besar tentang jurnal misterius, Portal, dan identitas sebenarnya dari penulisnya mulai terungkap di kota Gravity Falls.",
    rating: 9.2,
    cover: "https://upload.wikimedia.org/wikipedia/en/d/d0/Gravity_Falls_season_2_poster.png",
  },
];

