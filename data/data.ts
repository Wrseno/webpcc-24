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
    text: "Menambahkan jiwa loyalitas dan integritas dalam tiap anggota",
  },
];

const navLinks = [
  {
    title: "Home",
    path: "#home",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Event",
    path: "#event",
  },
  {
    title: "Gallery",
    path: "#gallery",
  },
  {
    title: "Kepengurusan",
    path: "#kepengurusan",
  },
  {
    title: "Blog",
    path: "#blog",
  },
];

const events = [
  {
    id: 1,
    title: "Training basic",
    image: "tb.jpg",
    date: "2024-01-15",
    location: "POLINES",
    description:
      "Training Basic merupakan salah satu program kerja UKM PCC yang bertujuan untuk memberikan pelatihan dan mengenalkan tiga bidang departemen dibawah Workshop UKM PCC, kepada calon anggota baru UKM PCC",
  },
  {
    id: 2,
    title: "Pcc class",
    image: "pcc-class.JPG",
    date: "2024-02-20",
    location: "POLINES",
    description:
      "PCC Class merupakan salah satu program kerja UKM PCC yang bertujuan untuk berbagi ilmu pengetahuan tentang IT kepada mahasiswa Politeknik Negeri Semarang. PCC Class ini merupakan lanjutan dari kegiatan UKM PCC sebelumnya yaitu Training Basic, dimana materi yang diberikan lebih advance.",
  },
  {
    id: 3,
    title: "Techcomfest",
    image: "techcomfest.JPG",
    date: "2024-02-20",
    location: "POLINES",
    description:
      "Techcomfest adalah salah satu wujud misi dan peran aktif UKM Polytechnic Computer Club dalam mengikuti perkembangan teknologi dalam bidang IT. Dengan diadakannya kegiatan Techcomfest, diharapkan siswa/i SMA/SMK sederajat dan Mahasiswa/i tingkat nasional dapat menyalurkan inovasi dan kreativitas mereka khususnya dalam bidang teknologi dan informasi.",
  },
];

const galleries = [
  {
    title: "cakra",
    image: "/images/IMG_8872.jpg",
    description:
      "Acara untuk memperkenalkan UKM PCC kepada Mahasiswa Baru dan bidang IT yang digeluti.",
  },
  {
    title: "open house",
    image: "/images/IMG_8872.jpg",
    description:
      "Memperkenalkan lebih dalam UKM PCC dan kegiatan-kegiatannya kepada calon anggota.",
  },
  {
    title: "hut pcc",
    image: "/images/IMG_8872.jpg",
    description:
      "Acara kekeluargaan untuk menjalin kerukunan dan saling mengenal antar pengurus UKM PCC.",
  },
  {
    title: "pendas & pab",
    image: "/images/IMG_8872.jpg",
    description:
      "Memberikan pendidikan dasar dan pembekalan kepada calon anggota aktif UKM PCC.",
  },
  {
    title: "regenerasi",
    image: "/images/IMG_8872.jpg",
    description:
      "Peresmian dan pergantian anggota kepengurusan UKM PCC setelah Pengambilan Keputusan Bersama.",
  },
  {
    title: "makrab",
    image: "/images/IMG_8872.jpg",
    description:
      "Acara kekeluargaan untuk menjalin kerukunan dan saling mengenal antar pengurus UKM PCC.",
  },
  {
    title: "sertijab",
    image: "/images/IMG_8872.jpg",
    description:
      "Pelantikan pengurus baru yang sebelumnya Anggota Aktif dan pelepasan jabatan pengurus lama sesuai AD/ART.",
  },
  {
    title: "sidum & raker",
    image: "/images/IMG_8872.jpg",
    description:
      "Sidum untuk menetapkan AD/ART, Raker untuk menetapkan kegiatan dan tujuan setahun UKM PCC.",
  },
  {
    title: "techcomfest",
    image: "/images/IMG_8872.jpg",
    description:
      "Acara tahunan UKM PCC untuk menyalurkan inovasi dan kreativitas dalam bidang teknologi dan informasi.",
  },
];

const blogs = [
  {
    id: 1,
    image: "/images/pcc.png",
    title: "Sukses Bangun Sistem Reseller?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quisquam voluptatem assumenda facilis harum dolore repudiandae accusamus alias, quidem nihil.",
    category: "Bisnis",
    url: "",
  },
  {
    id: 2,
    image: "/images/pcc.png",
    title: "Kembangkan Bisnis Dengan Teknologi Informasi",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quisquam voluptatem assumenda facilis harum dolore repudiandae accusamus alias, quidem nihil.",
    category: "Bisnis",
    url: "",
  },
  {
    id: 3,
    image: "/images/pcc.png",
    title: "Cara Mengatasi Laptop Hang",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quisquam voluptatem assumenda facilis harum dolore repudiandae accusamus alias, quidem nihil.",
    category: "Elektronik",
    url: "",
  },
];

// Struktur organisasi - data kepengurusan

const litbang = [
  {
    name: "Hussain Tamam Gucci Al Fauzan",
    position: "Koordinator Litbang",
    photo: "/images/sto/litbang/koor-litbang.webp",
  },
  {
    name: "Alfian Bagus Satriya",
    position: "Litbang Humas",
    photo: "/images/sto/litbang/litbang-humas.webp",
  },
  {
    name: "Moch. Anda Fadholli",
    position: "Litbang HRD",
    photo: "/images/sto/litbang/litbang-hrd.webp",
  },
  {
    name: "Krisna Desta Pradana",
    position: "Litbang Redaksi",
    photo: "/images/sto/litbang/litbang-redaksi.webp",
  },
  {
    name: "Annisa Salma Agustina",
    position: "Litbang KRT",
    photo: "/images/sto/litbang/litbang-krt.webp",
  },
  {
    name: "Tamara Silviana Hanan Zhafira",
    position: "Litbang KRT",
    photo: "/images/sto/litbang/litbang-krt2.webp",
  },
  {
    name: "Neli Fauziyah",
    position: "Litbang Workshop",
    photo: "/images/sto/litbang/litbang-workshop.webp",
  },
];

const sekretaris = [
  {
    name: "Syifa Nur Hamida",
    position: "Sekretaris 1",
    photo: "/images/sto",
  },
  {
    name: "Atina Nur Fahmi",
    position: "Sekretaris 2",
    photo: "/images/sto",
  },
  {
    name: "Khalisa Dian R.",
    position: "Sekretaris 3",
    photo: "/images/sto",
  },
];

const bendahara = [
  {
    name: "Naila Karimatul Ulya",
    position: "Bendahara 1",
    photo: "/images/sto/bendahara/bendahara.webp",
  },
  {
    name: "Aina Azzahra",
    position: "Bendahara 2",
    photo: "/images/sto/bendahara/bendahara2.webp",
  },
  {
    name: "Syakura Wijdan L.",
    position: "Bendahara 3",
    photo: "/images/sto/bendahara/bendahara3.webp",
  },
];

const divisiHumas = [
  {
    name: "Ahmad Farkhani",
    position: "Kepala Divisi",
    photo: "/images/sto/humas/humas.webp",
  },
  {
    name: "Belsan Khanifa Millati",
    position: "Staff Divisi",
    photo: "/images/sto/humas/humas2.webp",
  },
  {
    name: "Erine Cindy Ramrosy",
    position: "Staff Divisi",
    photo: "/images/sto/humas/humas3.webp",
  },
  {
    name: "Nisrina Izdihar",
    position: "Staff Divisi",
    photo: "/images/sto/humas/humas4.webp",
  },
  {
    name: "Saedatul Al Fitria",
    position: "Staff Divisi",
    photo: "/images/sto/humas/humas5.webp",
  },
];

const divisiHrd = [
  {
    name: "Fathia Salvatera",
    position: "Kepala Divisi",
    photo: "/images/sto/hrd/hrd.webp",
  },
  {
    name: "Amelya Dian Putri Indriaswari",
    position: "Staff Divisi",
    photo: "/images/sto/hrd/hrd2.webp",
  },
  {
    name: "Danu Alamsyah Putra",
    position: "Staff Divisi",
    photo: "/images/sto/hrd/hrd3.webp",
  },
  {
    name: "Dina Anggreyani P.",
    position: "Staff Divisi",
    photo: "/images/sto/hrd/hrd4.webp",
  },
  {
    name: "Frea Aline Aurellia",
    position: "Staff Divisi",
    photo: "/images/sto/hrd/hrd5.webp",
  },
  {
    name: "Ilham Vallian Wardoyo P.",
    position: "Staff Divisi",
    photo: "/images/sto/hrd/hrd6.webp",
  },
  {
    name: "Naela Syifa",
    position: "Staff Divisi",
    photo: "/images/sto/hrd/hrd7.webp",
  },
];

const divisiRedaksi = [
  {
    name: "Gilang Maulanata P.",
    position: "Kepala Divisi",
    photo: "/images/sto/redaksi/redaksi.webp",
  },
  {
    name: "Anindha Cahya Mulia S.",
    position: "Staff Divisi",
    photo: "/images/sto/redaksi/redaksi2.webp",
  },
  {
    name: "Maulana Fajar Rohmani",
    position: "Staff Divisi",
    photo: "/images/sto/redaksi/redaksi3.webp",
  },
  {
    name: "Muhammad Zakiy F. A.",
    position: "Staff Divisi",
    photo: "/images/sto/redaksi/redaksi4.webp",
  },
  {
    name: "Prima Nova Mahendra",
    position: "Staff Divisi",
    photo: "/images/sto/redaksi/redaksi5.webp",
  },
  {
    name: "Tiara Yoga Pratiwi",
    position: "Staff Divisi",
    photo: "/images/sto/redaksi/redaksi6.webp",
  },
];

const divisiKrt = [
  {
    name: "Natasha Yoviana",
    position: "Kepala Divisi",
    photo: "/images/sto/krt/krt.webp",
  },
  {
    name: "Affan Rizkinaya",
    position: "Staff Divisi",
    photo: "/images/sto/krt/krt2.webp",
  },
  {
    name: "Davin Alifianda Adytia",
    position: "Staff Divisi",
    photo: "/images/sto/krt/krt3.webp",
  },
  {
    name: "Hany Diah Ramadhani",
    position: "Staff Divisi",
    photo: "/images/sto/krt/krt4.webp",
  },
  {
    name: "Siti Nur Alfina",
    position: "Staff Divisi",
    photo: "/images/sto/krt/krt5.webp",
  },
];

const departemenDanus = [
  {
    name: "Irma Innayah",
    position: "Kepala Departemen",
    photo: "/images/sto",
  },
  {
    name: "Caesa Aurelia Putri",
    position: "Staff Departemen",
    photo: "/images/sto",
  },
  {
    name: "Merlina Setyaningrum",
    position: "Staff Departemen",
    photo: "/images/sto",
  },
  {
    name: "Nurul Hidayah Fitriana",
    position: "Staff Departemen",
    photo: "/images/sto",
  },
  {
    name: "Hadiatun Nurfadilah",
    position: "Staff Departemen",
    photo: "/images/sto",
  },
];

const departemenMaintenance = [
  {
    name: "Miftachussurur",
    position: "Kepala Departemen",
    photo: "/images/sto/maintenance/maintenance.webp",
  },
  {
    name: "Bunga Putri Ema A.",
    position: "Staff Departemen",
    photo: "/images/sto/maintenance/maintenance2.webp",
  },
  {
    name: "Raditya Hazza D.",
    position: "Staff Departemen",
    photo: "/images/sto/maintenance/maintenance3.webp",
  },
  {
    name: "Tubagus Pratama J.",
    position: "Staff Departemen",
    photo: "/images/sto/maintenance/maintenance4.webp",
  },
];

const divisiWorkshop = [
  {
    name: "Aufaa Hamiidah A.",
    position: "Kepala Divisi",
    photo: "/images/sto/workshop/workshop.webp",
  },
  {
    name: "Ibrahim Aryan Faridzi",
    position: "Wakil Kepala Divisi",
    photo: "/images/sto/workshop/workshop2.webp",
  },
  {
    name: "Dimas Irsyad Maulana",
    position: "Staff Divisi",
    photo: "/images/sto/workshop/workshop3.webp",
  },
  {
    name: "Hanif Abdusy Syakur",
    position: "Staff Divisi",
    photo: "/images/sto/workshop/workshop4.webp",
  },
  {
    name: "Sabrina Shofia Anggi",
    position: "Staff Divisi",
    photo: "/images/sto/workshop/workshop5.webp",
  },
  {
    name: "Nabila Khairunnisa D. P.",
    position: "Staff Divisi",
    photo: "/images/sto/workshop/workshop6.webp",
  },
];

const departemenMultimedia = [
  {
    name: "Khilda Salsabila Azka",
    position: "Kepala Departemen",
    photo: "/images/sto/multimedia/mulmed.webp",
  },
  {
    name: "Agung Hadi Astanto",
    position: "Staff Departemen",
    photo: "/images/sto/multimedia/mulmed2.webp",
  },
  {
    name: "Atsiila Arya Nabiih",
    position: "Staff Departemen",
    photo: "/images/sto/multimedia/mulmed3.webp",
  },
  {
    name: "Ni Made Ayu R. A.",
    position: "Staff Departemen",
    photo: "/images/sto/multimedia/mulmed4.webp",
  },
  {
    name: "Risqi Tia Sari",
    position: "Staff Departemen",
    photo: "/images/sto/multimedia/mulmed5.webp",
  },
];

const departemenSoftware = [
  {
    name: "Muhamad Haydar A. A.",
    position: "Kepala Departemen",
    photo: "/images/sto/software/software.webp",
  },
  {
    name: "Dena Windiarpuspa",
    position: "Staff Departemen",
    photo: "/images/sto/software/software2.webp",
  },
  {
    name: "Elang Argawana",
    position: "Staff Departemen",
    photo: "/images/sto/software/software3.webp",
  },
  {
    name: "Gilang Raka R.",
    position: "Staff Departemen",
    photo: "/images/sto/software/software4.webp",
  },
  {
    name: "Warseno Bambang S.",
    position: "Staff Departemen",
    photo: "/images/sto/software/software5.webp",
  },
];

const departemenNetwork = [
  {
    name: "Aldo Ramadhana",
    position: "Kepala Departemen",
    photo: "/images/sto/network/network.webp",
  },
  {
    name: "Alvin Putra Nurtan",
    position: "Staff Departemen",
    photo: "/images/sto/network/network2.webp",
  },
  {
    name: "Alwy Ma'shum",
    position: "Staff Departemen",
    photo: "/images/sto/network/network3.webp",
  },
  {
    name: "Muhamad Ariel G.",
    position: "Staff Departemen",
    photo: "/images/sto/network/network4.webp",
  },
  {
    name: "Mila Dewi Nurhidayah",
    position: "Staff Departemen",
    photo: "/images/sto/network/network5.webp",
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
