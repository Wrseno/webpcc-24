import {BlogCard, SectionTitle} from "../../..";

import {blogs} from "@/data/data";

export default function Blog() {
  return (
    <section id='blog'>
      <div className='mt-20'>
        <SectionTitle useLeftHr hrWidth='w-9/12'>
          <h2
            className='text-2xl md:text-4xl font-bold mb-3 text-primary'
            data-aos='fade-left'
          >
            <span className='font-bold text-quinary'>BLOG</span>
            PCC
          </h2>
        </SectionTitle>

        <div className='w-full px-4 md:px-16 lg:px-32 text-senary'>
          <ul className='grid gap-y-12 mt-6'>
            {blogs.map((blog, index) =>
              index % 2 === 0 ? (
                <BlogCard
                  key={index}
                  title={blog.title}
                  description={blog.description}
                  image={blog.image}
                  url={blog.url}
                  category={blog.category}
                  isEven
                />
              ) : (
                <BlogCard
                  key={index}
                  title={blog.title}
                  description={blog.description}
                  image={blog.image}
                  url={blog.url}
                  category={blog.category}
                  isEven={false}
                />
              )
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
