import {
  AboutSection,
  BlogSection,
  EventSection,
  GallerySection,
  HeroSection,
  StructureSection,
} from "@/components";

export default function Home() {
  return (
    <main className='container max-w-screen-2xl mx-auto flex flex-col gap-y-32'>
      <HeroSection />
      <AboutSection />
      <EventSection />
      <GallerySection />
      <StructureSection />
      <BlogSection />
    </main>
  );
}
