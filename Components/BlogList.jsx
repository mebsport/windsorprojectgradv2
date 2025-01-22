import { blog_data } from "@/Assets/assets";
import React, { useState } from "react";
import BlogItem from "./BlogItem";

const BlogList = () => {
  const [menu, setMenu] = useState("All");

  return (
    <div>
      <div className='mb-2 flex justify-center gap-6 my-10 text-black'>
        <button
          onClick={() => setMenu("All")}
          className={
            menu === "All" ? "bg-black text-white py-1 px-4 rounded-sm" : ""
          }
        >
          All
        </button>
        <button
          onClick={() => setMenu("Shop")}
          className={
            menu === "Shop" ? "bg-black text-white py-1 px-4 rounded-sm" : ""
          }
        >
          Shop
        </button>
        <button
          onClick={() => setMenu("Event")}
          className={
            menu === "Event" ? "bg-black text-white py-1 px-4 rounded-sm" : ""
          }
        >
          Events
        </button>
        <button
          onClick={() => setMenu("Opportunities")}
          className={
            menu === "Opportunities"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : ""
          }
        >
          Opportunities
        </button>
      </div>
      <div className='flex flex-wrap justify-center items-center gap-6 mb-16 xl:mx-24'>
        {blog_data
          .filter((item) => (menu === "All" ? true : item.category === menu))
          .map((item, index) => {
            return (
              <BlogItem
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
                category={item.subcategory}
                date={item.date}
              />
            );
          })}
      </div>
    </div>
  );
};

export default BlogList;
