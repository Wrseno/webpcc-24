import {SectionTitle} from "../../../..";

export default function AboutSection() {
  return (
    <div
      className='md:absolute md:w-[65%] lg:w-[55%] p-4 md:p-8 right-[4rem] lg:right-[8rem] bg-secondary rounded-2xl shadow-three'
      data-aos='fade-up-left'
    >
      <SectionTitle
        firstTitle='US'
        spanTitle='ABOUT'
        textColor='text-quinary'
        spanColor='text-senary'
        useBr={false}
        useHr
      />
      <div className='p-2 text-senary text-center text-xs lg:text-sm'>
        <p>
          UKM Polytechnic Computer Club yang disingkat UKM PCC merupakan salah
          satu Unit Kegiatan Mahasiswa di Politeknik Negeri Semarang yang sudah
          cukup berumur. Dalam kiprahnya UKM PCC memberikan banyak kontribusi
          kepada institusi POLINES sendiri lewat prestasi-prestasi yang telah
          diraih oleh UKM PCC.
        </p>
        <br />
        <p>
          PCC disahkan sebagai UKM di Politeknik Negeri Semarang pada tanggal 14
          Agustus 1992, yang mempunyai tujuan untuk mewadahi, meningkatkan,
          mengembangkan pengetahuan dan keterampilan dalam bidang IT khususnya
          bagi para anggota dan umumnya bagi sivitas akademika, serta masyarakat
          umum dalam rangka mencerdaskan kehidupan bangsa.
        </p>
      </div>
    </div>
  );
}
