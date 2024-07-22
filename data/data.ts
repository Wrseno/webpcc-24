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
    description:
      "Training Basic merupakan salah satu program kerja UKM PCC yang bertujuan untuk memberikan pelatihan dan mengenalkan tiga bidang departemen dibawah Workshop UKM PCC, kepada calon anggota baru UKM PCC",
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
    description:
      "Merupakan acara yang diadakan Pertama kali untuk mempertemukan seluruh anggota Pengurus UKM PCC lama dengan Anggota Pengurus yang baru",
  },
  {
    title: "sidum & raker",
    image: "/images/sidum-raker.webp",
    description:
      "Sidum untuk menetapkan AD/ART, Raker untuk menetapkan kegiatan dan tujuan setahun UKM PCC.",
  },
  {
    title: "cakra & ppm",
    image: "/images/cakra-ppm.webp",
    description:
      "Acara untuk memperkenalkan UKM PCC kepada Mahasiswa Baru dan bidang IT yang digeluti.",
  },
  {
    title: "makrab awal",
    image: "/images/gath-sto.webp",
    description:
      "Acara kekeluargaan untuk menjalin kerukunan dan saling mengenal antar pengurus UKM PCC.",
  },
  {
    title: "open house",
    image: "/images/open-house.webp",
    description:
      "Memperkenalkan lebih dalam UKM PCC dan kegiatan-kegiatannya kepada calon anggota.",
  },
  {
    title: "pendas & pab",
    image: "/images/pendas-pab.webp",
    description:
      "Memberikan pendidikan dasar dan pembekalan kepada calon anggota aktif UKM PCC.",
  },
  {
    title: "hut pcc",
    image: "/images/hut-pcc.webp",
    description:
      "Acara kekeluargaan untuk menjalin kerukunan dan saling mengenal antar pengurus UKM PCC.",
  },
  {
    title: "Goes to Public",
    image: "/images/goestopublic.webp",
    description:
      "Melakukan bakti sosial pada masyarakat agar dapat menerapkan tri dharma perguruan tinggi.",
  },
  {
    title: "techcomfest",
    image: "/images/techcomfest-semnas.webp",
    description:
      "Acara tahunan UKM PCC untuk menyalurkan inovasi dan kreativitas dalam bidang teknologi dan informasi.",
  },
  {
    title: "regenerasi",
    image: "/images/regenerasi-camin.webp",
    description:
      "Peresmian dan pergantian anggota kepengurusan UKM PCC setelah Pengambilan Keputusan Bersama.",
  },
  {
    title: "sertijab",
    image: "/images/gath-sto.webp",
    description:
      "Pelantikan pengurus baru yang sebelumnya Anggota Aktif dan pelepasan jabatan pengurus lama sesuai AD/ART.",
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
    photo: "/images/sto/sekretaris/Syifa Nur Hamida.webp",
  },
  {
    name: "Atina Nur Fahmi",
    position: "Sekretaris 2",
    photo: "/images/sto/sekretaris/Atina Nur Fahmi.webp",
  },
  {
    name: "Khalisa Dian R.",
    position: "Sekretaris 3",
    photo: "/images/sto/sekretaris/Khalisa Dian Ramadhani.webp",
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
    photo: "/images/sto/humas/Ahmad Farkhani.webp",
  },
  {
    name: "Belsan Khanifa Millati",
    position: "Staff Divisi",
    photo: "/images/sto/humas/Belsan Khanifa Millati.webp",
  },
  {
    name: "Erine Cindy Ramrosy",
    position: "Staff Divisi",
    photo: "/images/sto/humas/Erine Cindy Ramrosy.webp",
  },
  {
    name: "Nisrina Izdihar",
    position: "Staff Divisi",
    photo: "/images/sto/humas/Nisrina Izdihar.webp",
  },
  {
    name: "Saedatul Al Fitria",
    position: "Staff Divisi",
    photo: "/images/sto/humas/Saedatul Al Fitria.webp",
  },
];

const divisiHrd = [
  {
    name: "Fathia Salvatera",
    position: "Kepala Divisi",
    photo: "/images/sto/hrd/Fatia Salvatera.webp",
  },
  {
    name: "Danu Alamsyah Putra",
    position: "Staff Divisi",
    photo: "/images/sto/hrd/Danu Alamsyah Putra.webp",
  },
  {
    name: "Dina Anggreyani P.",
    position: "Staff Divisi",
    photo: "/images/sto/hrd/Diana Anggreyani Pramesti.webp",
  },
  {
    name: "Frea Aline Aurellia",
    position: "Staff Divisi",
    photo: "/images/sto/hrd/Frea Aline Aurellia.webp",
  },
  {
    name: "Ilham Vallian W. P.",
    position: "Staff Divisi",
    photo: "/images/sto/hrd/Ilham Vallian Wardoyo Putra.webp",
  },
  {
    name: "Naela Syifa",
    position: "Staff Divisi",
    photo: "/images/sto/hrd/Naela Syifa.webp",
  },
  {
    name: "Amelya Dian Putri I.",
    position: "Staff Divisi",
    photo: "/images/sto/hrd/Amelya Dian Putri Indriaswari.webp",
  },
];

const divisiRedaksi = [
  {
    name: "Gilang Maulanata P.",
    position: "Kepala Divisi",
    photo: "/images/sto/redaksi/Gilang Maulanata Pramudya.webp",
  },
  {
    name: "Anindha Cahya Mulia S.",
    position: "Staff Divisi",
    photo: "/images/sto/redaksi/Anindha Cahya Mulia Salim.webp",
  },
  {
    name: "Maulana Fajar Rohmani",
    position: "Staff Divisi",
    photo: "/images/sto/redaksi/Maulana Fajar Rohmani.webp",
  },
  {
    name: "Muhammad Zakiy F. A.",
    position: "Staff Divisi",
    photo: "/images/sto/redaksi/Muhammad Zakiy Fadhlullah Azhar.webp",
  },
  {
    name: "Prima Nova Mahendra",
    position: "Staff Divisi",
    photo: "/images/sto/redaksi/Prima Nova Mahendra.webp",
  },
  {
    name: "Tiara Yoga Pratiwi",
    position: "Staff Divisi",
    photo: "/images/sto/redaksi/Tiara Yoga Pratiwi.webp",
  },
];

const divisiKrt = [
  {
    name: "Natasha Yoviana",
    position: "Kepala Divisi",
    photo: "/images/sto/krt/Natasha Yoviana.webp",
  },
  {
    name: "Affan Rizkinaya",
    position: "Staff Divisi",
    photo: "/images/sto/krt/Affan Rizkinaya.webp",
  },
  {
    name: "Davin Alifianda Adytia",
    position: "Staff Divisi",
    photo: "/images/sto/krt/Davin Alifianda Adytia.webp",
  },
  {
    name: "Hany Diah Ramadhani",
    position: "Staff Divisi",
    photo: "/images/sto/krt/Hany Diah Ramadhani.webp",
  },
  {
    name: "Siti Nur Alfina",
    position: "Staff Divisi",
    photo: "/images/sto/krt/Siti Nur Alfina.webp",
  },
];

const departemenDanus = [
  {
    name: "Irma Innayah",
    position: "Kepala Departemen",
    photo: "/images/sto/danus/Irma Innayah.webp",
  },
  {
    name: "Caesa Aurelia Putri",
    position: "Staff Departemen",
    photo: "/images/sto/danus/Caesa Aurelia Putri.webp",
  },
  {
    name: "Merlina Setyaningrum",
    position: "Staff Departemen",
    photo: "/images/sto/danus/Merlina Setiyaningrum.webp",
  },
  {
    name: "Nurul Hidayah Fitriana",
    position: "Staff Departemen",
    photo: "/images/sto/danus/Nurul Hidayah Fitriana.webp",
  },
  {
    name: "Hadiatun Nurfadilah",
    position: "Staff Departemen",
    photo: "/images/sto/danus/Hadiatun Nurfadilah.webp",
  },
];

const departemenMaintenance = [
  {
    name: "Miftachussurur",
    position: "Kepala Departemen",
    photo: "/images/sto/maintenance/Miftachussurur.png",
  },
  {
    name: "Bunga Putri Ema A.",
    position: "Staff Departemen",
    photo: "/images/sto/maintenance/Bunga Putri Ema Aryani.webp",
  },
  {
    name: "Raditya Hazza D.",
    position: "Staff Departemen",
    photo: "/images/sto/maintenance/Raditya Hazza Dzulfiqar.webp",
  },
  {
    name: "Tubagus Pratama J.",
    position: "Staff Departemen",
    photo: "/images/sto/maintenance/Tubagus Pratama Julianto.webp",
  },
];

const divisiWorkshop = [
  {
    name: "Aufaa Hamiidah A.",
    position: "Kepala Divisi",
    photo: "/images/sto/workshop/Aufaa Hamiidah Aryana.webp",
  },
  {
    name: "Ibrahim Aryan Faridzi",
    position: "Wakil Kepala Divisi",
    photo: "/images/sto/workshop/Ibrahim Aryan Faridzi.webp",
  },
  {
    name: "Dimas Irsyad Maulana",
    position: "Staff Divisi",
    photo: "/images/sto/workshop/Dimas Irsyad Maulana.webp",
  },
  {
    name: "Sabrina Shofia Anggi",
    position: "Staff Divisi",
    photo: "/images/sto/workshop/Sabrina Shofia Anggi.webp",
  },
  {
    name: "Hanif Abdusy Syakur",
    position: "Staff Divisi",
    photo: "/images/sto/workshop/Hanif Abdusy Syakur.webp",
  },
  {
    name: "Nabila Khairunnisa D. P.",
    position: "Staff Divisi",
    photo: "/images/sto/workshop/Nabila Khairunnisa Dian Pranata.webp",
  },
];

const departemenMultimedia = [
  {
    name: "Khilda Salsabila Azka",
    position: "Kepala Departemen",
    photo: "/images/sto/multimedia/Khilda Salsabila Azka.webp",
  },
  {
    name: "Agung Hadi Astanto",
    position: "Staff Departemen",
    photo: "/images/sto/multimedia/Agung Hadi Astanto.webp",
  },
  {
    name: "Ni Made Ayu R. A.",
    position: "Staff Departemen",
    photo: "/images/sto/multimedia/Ni Made Ayu Ratna Anjalie.webp",
  },
  {
    name: "Risqi Tia Sari",
    position: "Staff Departemen",
    photo: "/images/sto/multimedia/Risqi Tia Sari.webp",
  },
  {
    name: "Atsiila Arya Nabiih",
    position: "Staff Departemen",
    photo: "/images/sto/multimedia/Atsiila Arya Nabiih.webp",
  },
];

const departemenSoftware = [
  {
    name: "Muhamad Haydar A. A.",
    position: "Kepala Departemen",
    photo: "/images/sto/software/Muhamad Haydar Aydin Alhamdani.webp",
  },
  {
    name: "Dena Windiarpuspa",
    position: "Staff Departemen",
    photo: "/images/sto/software/Dena Windiarpuspa.webp",
  },
  {
    name: "Elang Argawana",
    position: "Staff Departemen",
    photo: "/images/sto/software/Elang Argawana.webp",
  },
  {
    name: "Gilang Raka R.",
    position: "Staff Departemen",
    photo: "/images/sto/software/Gilang Raka Ramadhan.webp",
  },
  {
    name: "Warseno Bambang S.",
    position: "Staff Departemen",
    photo: "/images/sto/software/Warseno Bambang Setyono.webp",
  },
];

const departemenNetwork = [
  {
    name: "Aldo Ramadhana",
    position: "Kepala Departemen",
    photo: "/images/sto/network/Aldo Ramadhana.webp",
  },
  {
    name: "Alvin Putra Nurtan",
    position: "Staff Departemen",
    photo: "/images/sto/network/Alvin Putra Nurtan.webp",
  },
  {
    name: "Alwy Ma'shum",
    position: "Staff Departemen",
    photo: "/images/sto/network/'Alwy Ma'shum.webp",
  },
  {
    name: "Muhamad Ariel G.",
    position: "Staff Departemen",
    photo: "/images/sto/network/Muhamad Ariel Gunawan.webp",
  },
  {
    name: "Mila Dewi Nurhidayah",
    position: "Staff Departemen",
    photo: "/images/sto/network/Mila Dewi Nurhidayah.webp",
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
