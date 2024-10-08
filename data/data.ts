const missions = [
  {
    id: 1,
    text: "Menerapkan 7-Layers PCC dalam diri tiap anggota dalam setiap langkah.",
  },
  {
    id: 2,
    text: "Membentuk SDM yang kritis dan inovatif, serta dapat menyelesaikan masalah secara efektif.",
  },
  {
    id: 3,
    text: "Mengembangkan pengetahuan dan portofolio dalam bidang teknologi informasi dan komputer.",
  },
  {
    id: 4,
    text: "Menanamkan jiwa loyalitas dan integritas dalam tiap anggota",
  },
];

const navLinks = [
  {
    title: "About",
    path: "/",
    targetId: "#about",
  },
  {
    title: "Event",
    path: "/",
    targetId: "#event",
  },
  {
    title: "Gallery",
    path: "/",
    targetId: "#gallery",
  },
  {
    title: "Kepengurusan",
    path: "/",
    targetId: "#kepengurusan",
  },
  {
    title: "Blog",
    path: "/",
    targetId: "#blog",
  },
];

const events = [
  {
    id: 1,
    title: "Training basic",
    image: "training-basic.webp",
    date: "2024-01-15",
    location: "POLINES",
    description: "Training Basic merupakan salah satu program kerja UKM PCC yang bertujuan untuk memberikan pelatihan dan mengenalkan tiga bidang departemen dibawah Workshop UKM PCC, kepada calon anggota baru UKM PCC",
  },
  {
    id: 2,
    title: "Pcc class",
    image: "pcc-class.webp",
    date: "2024-02-20",
    location: "POLINES",
    description:
      "PCC Class merupakan salah satu program kerja UKM PCC yang bertujuan untuk berbagi ilmu pengetahuan tentang IT kepada mahasiswa Politeknik Negeri Semarang. PCC Class ini merupakan lanjutan dari kegiatan UKM PCC sebelumnya yaitu Training Basic, dimana materi yang diberikan lebih advance.",
  },
  {
    id: 3,
    title: "Techcomfest",
    image: "techcomfest.webp",
    date: "2024-02-20",
    location: "POLINES",
    description:
      "Techcomfest adalah salah satu wujud misi dan peran aktif UKM Polytechnic Computer Club dalam mengikuti perkembangan teknologi dalam bidang IT. Dengan diadakannya kegiatan Techcomfest, diharapkan siswa/i SMA/SMK sederajat dan Mahasiswa/i tingkat nasional dapat menyalurkan inovasi dan kreativitas mereka khususnya dalam bidang teknologi dan informasi.",
  },
];

const galleries = [
  {
    title: "temu awal",
    image: "/images/gath-sto.webp",
    description: "Acara yang diadakan Pertama kali untuk mempertemukan anggota Pengurus UKM PCC lama dengan Anggota Pengurus baru.",
  },
  {
    title: "sidum & raker",
    image: "/images/sidum-raker.webp",
    description: "Sidum untuk menetapkan AD/ART, Raker untuk menetapkan kegiatan dan tujuan setahun UKM PCC.",
  },
  {
    title: "cakra & ppm",
    image: "/images/cakra-ppm.webp",
    description: "Acara untuk memperkenalkan UKM PCC kepada Mahasiswa Baru dan bidang IT yang digeluti.",
  },
  {
    title: "makrab awal",
    image: "/images/Makrab.webp",
    description: "Acara kekeluargaan untuk menjalin kerukunan dan saling mengenal antar pengurus UKM PCC.",
  },
  {
    title: "open house",
    image: "/images/Open House.webp",
    description: "Memperkenalkan lebih dalam UKM PCC dan kegiatan-kegiatannya kepada calon anggota.",
  },
  {
    title: "pendas & pab",
    image: "/images/pendas-pab.webp",
    description: "Memberikan pendidikan dasar dan pembekalan kepada calon anggota aktif UKM PCC.",
  },
  {
    title: "hut pcc",
    image: "/images/HUT.webp",
    description: "Acara kekeluargaan untuk menjalin kerukunan dan saling mengenal antar pengurus UKM PCC.",
  },
  {
    title: "Goes to Public",
    image: "/images/goestopublic.webp",
    description: "Melakukan bakti sosial pada masyarakat agar dapat menerapkan tri dharma perguruan tinggi.",
  },
  {
    title: "techcomfest",
    image: "/images/techcomfest-semnas.webp",
    description: "Acara tahunan UKM PCC untuk menyalurkan inovasi dan kreativitas dalam bidang teknologi dan informasi.",
  },
  {
    title: "regenerasi",
    image: "/images/regenerasi-camin.webp",
    description: "Peresmian dan pergantian anggota kepengurusan UKM PCC setelah Pengambilan Keputusan Bersama.",
  },
  {
    title: "sertijab",
    image: "/images/Sertijab.webp",
    description: "Pelantikan pengurus baru yang sebelumnya Anggota Aktif dan pelepasan jabatan pengurus lama sesuai AD/ART.",
  },
];

const blogs = [
  {
    id: 1,
    image: "/images/artikel-1.webp",
    title: "ALUR BELAJAR: FRONT END DAN BACK END DEVELOPER",
    date: "15/08/2024",
    description:
      "Jadi sebelumnya apakah kamu tahu apa itu front end dan back end developer itu? jadi front end developer adalah Front-end developer adalah orang yang bertanggung jawab atas tampilan dan interaksi yang langsung dilihat dan digunakan oleh pengguna di sebuah website...",
    category: "Software",
    url: "",
  },
  {
    id: 2,
    image: "/images/comingsoon.webp",
    title: "Coming Soon",
    date: "15/09/2024",
    description: "Coming soon, nantikanlah artikel menarik dari UKM PCC seputar dunia teknologi.",
    category: "Network",
    url: "",
  },
  {
    id: 3,
    image: "/images/comingsoon.webp",
    title: "Coming Soon",
    date: "15/10/2024",
    description: "Coming soon, nantikanlah artikel menarik dari UKM PCC seputar dunia teknologi.",
    category: "Multimedia",
    url: "",
  },
];

// Struktur organisasi - data kepengurusan

const litbang = [
  {
    name: "Hussain Tamam Gucci Al Fauzan",
    position: "Koordinator Litbang",
    photo: "/images/sto/litbang/Husen.webp",
  },
  {
    name: "Alfian Bagus Satriya",
    position: "Litbang Humas",
    photo: "/images/sto/litbang/Alpian.webp",
  },
  {
    name: "Moch. Anda Fadholli",
    position: "Litbang HRD",
    photo: "/images/sto/litbang/Anda.webp",
  },
  {
    name: "Krisna Desta Pradana",
    position: "Litbang Redaksi",
    photo: "/images/sto/litbang/Krisna.webp",
  },
  {
    name: "Annisa Salma Agustina",
    position: "Litbang KRT",
    photo: "/images/sto/litbang/Umi.webp",
  },
  {
    name: "Tamara Silviana Hanan Zhafira",
    position: "Litbang KRT",
    photo: "/images/sto/litbang/Rara.webp",
  },
  {
    name: "Neli Fauziyah",
    position: "Litbang Workshop",
    photo: "/images/sto/litbang/Neli.webp",
  },
];

const sekretaris = [
  {
    name: "Syifa Nur Hamida",
    position: "Sekretaris 1",
    photo: "/images/sto/sekretaris/Syifa.webp",
  },
  {
    name: "Atina Nur Fahmi",
    position: "Sekretaris 2",
    photo: "/images/sto/sekretaris/Atina.webp",
  },
  {
    name: "Khalisa Dian R.",
    position: "Sekretaris 3",
    photo: "/images/sto/sekretaris/Khalisa.webp",
  },
];

const bendahara = [
  {
    name: "Naila Karimatul Ulya",
    position: "Bendahara 1",
    photo: "/images/sto/bendahara/Naila.webp",
  },
  {
    name: "Aina Azzahra",
    position: "Bendahara 2",
    photo: "/images/sto/bendahara/Aina Azz.webp",
  },
  {
    name: "Syakura Wijdan L.",
    position: "Bendahara 3",
    photo: "/images/sto/bendahara/Syakura.webp",
  },
];

const divisiHumas = [
  {
    name: "Ahmad Farkhani",
    position: "Kepala Divisi",
    photo: "/images/sto/humas/Ahmad.webp",
  },
  {
    name: "Belsan Khanifa Millati",
    position: "Staff Divisi",
    photo: "/images/sto/humas/Belsan.webp",
  },
  {
    name: "Erine Cindy Ramrosy",
    position: "Staff Divisi",
    photo: "/images/sto/humas/Erine.webp",
  },
  {
    name: "Nisrina Izdihar",
    position: "Staff Divisi",
    photo: "/images/sto/humas/Nisrina.webp",
  },
  {
    name: "Saedatul Al Fitria",
    position: "Staff Divisi",
    photo: "/images/sto/humas/Saedatul.webp",
  },
];

const divisiHrd = [
  {
    name: "Fathia Salvatera",
    position: "Kepala Divisi",
    photo: "/images/sto/hrd/Fatia.webp",
  },
  {
    name: "Danu Alamsyah Putra",
    position: "Staff Divisi",
    photo: "/images/sto/hrd/Danu.webp",
  },
  {
    name: "Dinaa Anggreyani P.",
    position: "Staff Divisi",
    photo: "/images/sto/hrd/Diana.webp",
  },
  {
    name: "Frea Aline Aurellia",
    position: "Staff Divisi",
    photo: "/images/sto/hrd/Frea.webp",
  },
  {
    name: "Ilham Vallian W. P.",
    position: "Staff Divisi",
    photo: "/images/sto/hrd/ilham.webp",
  },
  {
    name: "Naela Syifa",
    position: "Staff Divisi",
    photo: "/images/sto/hrd/Naela.webp",
  },
  {
    name: "Amelya Dian Putri I.",
    position: "Staff Divisi",
    photo: "/images/sto/hrd/amel.webp",
  },
];

const divisiRedaksi = [
  {
    name: "Gilang Maulanata P.",
    position: "Kepala Divisi",
    photo: "/images/sto/redaksi/Gilang.webp",
  },
  {
    name: "Anindha Cahya Mulia S.",
    position: "Staff Divisi",
    photo: "/images/sto/redaksi/Anindha.webp",
  },
  {
    name: "Maulana Fajar Rohmani",
    position: "Staff Divisi",
    photo: "/images/sto/redaksi/Fajar.webp",
  },
  {
    name: "Muhammad Zakiy F. A.",
    position: "Staff Divisi",
    photo: "/images/sto/redaksi/Zakiy.webp",
  },
  {
    name: "Prima Nova Mahendra",
    position: "Staff Divisi",
    photo: "/images/sto/redaksi/Prima.webp",
  },
  {
    name: "Tiara Yoga Pratiwi",
    position: "Staff Divisi",
    photo: "/images/sto/redaksi/tiara.webp",
  },
];

const divisiKrt = [
  {
    name: "Natasha Yoviana",
    position: "Kepala Divisi",
    photo: "/images/sto/krt/Natasha.webp",
  },
  {
    name: "Affan Rizkinaya",
    position: "Staff Divisi",
    photo: "/images/sto/krt/Affan.webp",
  },
  {
    name: "Davin Alifianda Adytia",
    position: "Staff Divisi",
    photo: "/images/sto/krt/Davin.webp",
  },
  {
    name: "Hany Diah Ramadhani",
    position: "Staff Divisi",
    photo: "/images/sto/krt/Hany.webp",
  },
  {
    name: "Siti Nur Alfina",
    position: "Staff Divisi",
    photo: "/images/sto/krt/Siti.webp",
  },
];

const departemenDanus = [
  {
    name: "Irma Innayah",
    position: "Kepala Departemen",
    photo: "/images/sto/danus/Irma.webp",
  },
  {
    name: "Caesa Aurelia Putri",
    position: "Staff Departemen",
    photo: "/images/sto/danus/Caesa.webp",
  },
  {
    name: "Merlina Setyaningrum",
    position: "Staff Departemen",
    photo: "/images/sto/danus/Merlina.webp",
  },
  {
    name: "Nurul Hidayah Fitriana",
    position: "Staff Departemen",
    photo: "/images/sto/danus/Nurul.webp",
  },
  {
    name: "Hadiatun Nurfadilah",
    position: "Staff Departemen",
    photo: "/images/sto/danus/hadiatun.webp",
  },
];

const departemenMaintenance = [
  {
    name: "Miftachussurur",
    position: "Kepala Departemen",
    photo: "/images/sto/maintenance/surur.webp",
  },
  {
    name: "Bunga Putri Ema A.",
    position: "Staff Departemen",
    photo: "/images/sto/maintenance/bunga.webp",
  },
  {
    name: "Raditya Hazza D.",
    position: "Staff Departemen",
    photo: "/images/sto/maintenance/Hazza.webp",
  },
  {
    name: "Tubagus Pratama J.",
    position: "Staff Departemen",
    photo: "/images/sto/maintenance/tubagus.webp",
  },
];

const divisiWorkshop = [
  {
    name: "Aufaa Hamiidah A.",
    position: "Kepala Divisi",
    photo: "/images/sto/workshop/Aufa.webp",
  },
  {
    name: "Ibrahim Aryan Faridzi",
    position: "Wakil Kepala Divisi",
    photo: "/images/sto/workshop/ibrahim.webp",
  },
  {
    name: "Dimas Irsyad Maulana",
    position: "Staff Divisi",
    photo: "/images/sto/workshop/Dimas.webp",
  },
  {
    name: "Sabrina Shofia Anggi",
    position: "Staff Divisi",
    photo: "/images/sto/workshop/Sabrina.webp",
  },
  {
    name: "Hanif Abdusy Syakur",
    position: "Staff Divisi",
    photo: "/images/sto/workshop/Hanif.webp",
  },
  {
    name: "Nabila Khairunnisa D. P.",
    position: "Staff Divisi",
    photo: "/images/sto/workshop/nabila.webp",
  },
];

const departemenMultimedia = [
  {
    name: "Khilda Salsabila Azka",
    position: "Kepala Departemen",
    photo: "/images/sto/multimedia/Khilda.webp",
  },
  {
    name: "Agung Hadi Astanto",
    position: "Staff Departemen",
    photo: "/images/sto/multimedia/Agung.webp",
  },
  {
    name: "Atsiila Arya Nabiih",
    position: "Staff Departemen",
    photo: "/images/sto/multimedia/Arya.webp",
  },
  {
    name: "Ni Made Ayu R. A.",
    position: "Staff Departemen",
    photo: "/images/sto/multimedia/Ni made.webp",
  },
  {
    name: "Risqi Tia Sari",
    position: "Staff Departemen",
    photo: "/images/sto/multimedia/tia sari.webp",
  },
];

const departemenSoftware = [
  {
    name: "Muhamad Haydar A. A.",
    position: "Kepala Departemen",
    photo: "/images/sto/software/Haydar.webp",
  },
  {
    name: "Dena Windiarpuspa",
    position: "Staff Departemen",
    photo: "/images/sto/software/Dena.webp",
  },
  {
    name: "Elang Argawana",
    position: "Staff Departemen",
    photo: "/images/sto/software/Elang.webp",
  },
  {
    name: "Gilang Raka R.",
    position: "Staff Departemen",
    photo: "/images/sto/software/Gilang.webp",
  },
  {
    name: "Warseno Bambang S.",
    position: "Staff Departemen",
    photo: "/images/sto/software/Warseno.webp",
  },
];

const departemenNetwork = [
  {
    name: "Aldo Ramadhana",
    position: "Kepala Departemen",
    photo: "/images/sto/network/Aldo.webp",
  },
  {
    name: "Alvin Putra Nurtan",
    position: "Staff Departemen",
    photo: "/images/sto/network/Alvin.webp",
  },
  {
    name: "Alwy Ma'shum",
    position: "Staff Departemen",
    photo: "/images/sto/network/alwi.webp",
  },
  {
    name: "Muhamad Ariel G.",
    position: "Staff Departemen",
    photo: "/images/sto/network/Ariel.webp",
  },
  {
    name: "Mila Dewi Nurhidayah",
    position: "Staff Departemen",
    photo: "/images/sto/network/Mila.webp",
  },
];

export {
  missions,
  navLinks,
  events,
  galleries,
  blogs,
  litbang,
  sekretaris,
  bendahara,
  divisiHumas,
  divisiHrd,
  divisiRedaksi,
  divisiKrt,
  departemenDanus,
  departemenMaintenance,
  divisiWorkshop,
  departemenMultimedia,
  departemenSoftware,
  departemenNetwork,
};
