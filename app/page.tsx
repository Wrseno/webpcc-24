import {
  About,
  Blog,
  Event,
  Element,
  Gallery,
  Hero,
  Structure,
} from "@/components";

export default function Home() {
  return (
    <main className='container max-w-screen-2xl mx-auto '>
      <Hero />
      <About />
      <Event />
      <div className='relative -my-40 md:my-56'>
        <Element
          src='icon-target.png'
          alt='Icon target'
          imgClassName='-left-1/2 md:w-[50%] md:-left-1/4 absolute'
          isLeft
        />
      </div>
      <Gallery />
      <Structure />
      <Blog />
    </main>
  );
}
