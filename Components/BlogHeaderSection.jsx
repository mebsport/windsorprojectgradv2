import React from "react";

const BlogHeaderSection = () => {
  return (
    <div className='mt-4 text-center items-center text-black'>
      <h1 className='mt-4 text-3xl lg:text-5xl font-extrabold '>What's New?</h1>
      <p className='mt-10 max-w-[740px]  text-xs sm:text-base'>
        Hi, this is just placeholder text for now replace with a small blurb
        about how this is where yyou can find upcoming events or whatever u
        wantt o add fr lol. and don't add pselling mistakes when you fix it
      </p>
      <form
        className='flex justify-between max-w-[500px] scale-100 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]'
        action=''
      >
        <input
          type='email'
          placeholder='Enter Your Email'
          className='pl-4 outline-none'
        ></input>
        <button
          type='submit'
          className='border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default BlogHeaderSection;
