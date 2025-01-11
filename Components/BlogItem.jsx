import React from "react";
import Image from "next/image";
import { blog_data } from "@/Assets/assets";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const BlogItem = ({ title, description, category, image, date }) => {
  return (
    <div className='mb-2 mt-2 ml-2 mr-2 p-3 max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000]'>
      <Image
        src={image}
        alt=''
        width={400}
        height={400}
        className='border-b border-black'
      />
      <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm'>
        {category} | {date}
      </p>
      <div className='p-5'>
        <h5 className='mb-2 text-lg font-medium tracking-tight text-black'>
          {title}
        </h5>
        <p className='mb-3 text-sm tracking-tight text-black'>{description}</p>
        <div className='text-black inline-flex items-center py-2 font-semibold text-center'>
          <h5>Read More</h5> <ArrowRightIcon width={16} className='ml-2' />
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
