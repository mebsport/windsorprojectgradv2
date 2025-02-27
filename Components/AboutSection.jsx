import React from "react";
import { useMediaQuery } from "react-responsive";
import ImageCarousel from "./ImageCarousel";
import { image_urls } from "@/Assets/assets";

const AboutSection = () => {
  // Check if screen width is larger than 830px
  const isLargeScreen = useMediaQuery({ minWidth: 1021 });

  return (
    <div id='about' className='mt-4'>
      <span className='text-center mt-4 font-bold text-2xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#8c2724] via-black to-[#8c2724]'>
        What is Project Graduation?{" "}
      </span>
      <div
        className={`mt-6 ${
          isLargeScreen ? "flex flex-row gap-6" : "flex flex-col"
        }`}
      >
        {/* Text Section */}
        <div className={`${isLargeScreen ? "lg:flex-2" : ""}`}>
          <p className='mt-6 text-black font-semibold text-base sm:text-lg lg:text-xl mb-6'>
            <span className='font-bold'>Project Graduation</span> is an annual
            event that is exclusively organized for the graduating seniors of
            Windsor High School. The event is aimed at providing a safe,
            drug-free, and fun-filled environment for the seniors to celebrate
            their graduation with their friends. The event is entirely managed
            and organized by parent volunteers, who put in a year-long effort to
            raise funds and plan for the event.
          </p>
          <p className='text-black font-semibold text-base sm:text-lg lg:text-xl mb-6'>
            The night is full of entertaining activities, including music and
            dancing with a live DJ, delicious food, fun games, and exciting
            prizes. The main objective of Project Graduation is to offer the
            seniors a chance to celebrate their graduation in a secure and
            comfortable environment, away from the potential dangers of drugs
            and alcohol.
          </p>
          <p className='text-black font-semibold text-base sm:text-lg lg:text-xl mb-6'>
            This event is made possible through the generous donations of the
            community members who believe in the importance of providing a safe
            and memorable graduation experience for the seniors. The party
            starts at 11 PM and ends at 3 AM, and all the seniors are guaranteed
            to have a great time, create everlasting memories, and stay safe
            throughout the night.
          </p>
        </div>

        {/* Carousel Section */}
        <div className='lg:flex-1 flex justify-center items-center mt-6 lg:mt-0'>
          <ImageCarousel images={image_urls} interval={5000} />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
