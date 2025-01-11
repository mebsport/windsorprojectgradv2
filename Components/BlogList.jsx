import { blog_data } from "@/Assets/assets";
import React, { useState } from "react";
import BlogItem from "./BlogItem";

const BlogList = () => {
  const [menu, setMenu] = useState("All");

  return (
    <div>
      <div className='mb-2 flex justify-center gap-6 my-10 text-black'>
        <button className='bg-black text-white py-1 px-4 rounded-sm'>
          All
        </button>
        <button className='py-1 px-4'>Event</button>
        <button className='py-1 px-4'>Meeting</button>
        <button className='py-1 px-4'>Volunteer</button>
      </div>
      <div className='flex flex-wrap justify-center items-center gap-6 mb-16 xl:mx-24'>
        {blog_data.map((item, index) => {
          return (
            <BlogItem
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              category={item.category}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BlogList;
