import {BlogCard, SectionTitle} from "..";

import {blogs} from "@/data/data";

export default function Blog() {
  return (
    <section className='md:py-16' id='blog'>
      <div className=''>
        <SectionTitle
          firstTitle='PCC'
          spanTitle='BLOG'
          textColor='text-primary'
          spanColor='text-quinary'
          useBr={false}
          useLeftHr
          hrWidth='w-9/12'
        />
        <div className='w-full px-4 md:px-16 lg:px-32 text-senary'>
          <ul>
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
