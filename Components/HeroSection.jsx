'use client'
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

const HeroSection = () => {
  return (
    <section className='text-black'>
      <div className='grid grid-cols-3 lg:grid-cols-12 '>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className='text-black mb-4 text-xl lg:text-2xl font-extrabold'>
            <span className='text-3xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#8c2724] via-black to-[#8c2724]'>
              Windsor Project Graduation {''}
            </span>
            <br></br>
            <TypeAnimation
              style={{
                display: 'inline-block',
                minHeight: '3lh',
              }}
              sequence={[
                'We emphasize making the choice not to drink alcohol or consume drugs when celebrating a special milestone',
                2500,
                'We eliminate teen decisions about drinking or drugs on graduation night, and the entire community is assured that graduates are in a safe environment',
                2500,
                'We ensure that every graduate has a party to attend; no one is excluded or left out for social or financial reasons',
                2500,
                'We allow all graduates to celebrate together in one location',
                2500,
              ]}
              wrapper='span'
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className='text-black text-base sm:text-lg lg:text-xl mb-6'>
            Windsor High School&apos;s Project Graduation gives our graduates a
            safe, sober and memorable night of Graduation. The mission of
            PROJECT GRADUATION is to protect our new Graduates at the time
            they&apos;re most at risk. Since Project Graduation was instituted,
            not a single Windsor graduate has died from alcohol, drug or traffic
            accidents on graduation night.
          </p>
          <div className='place-self-center'>
            <button
              onClick={() =>
                window.open('https://cash.app/$ProjectGraduationWHS', '_blank')
              }
              className=' font-mono font-bold px-6 py-3 rounded-full ml-4 mr-4 bg-[#131313] hover:bg-slate-200 text-white border border-white hover:text-black mt-3'
            >
              DONATE
            </button>
            <button
              onClick={() => window.open('/volunteer', '_self')}
              className=' font-mono font-bold px-6 py-3 rounded-full ml-4 mr-4 bg-[#131313] hover:bg-slate-200 text-white border border-white hover:text-black mt-3'
            >
              VOLUNTEER
            </button>
            <button
              onClick={() => window.open('#about', '_self')}
              className=' font-mono font-bold px-6 py-3 rounded-full ml-4 mr-4 bg-[#131313] hover:bg-slate-200 text-white border border-white hover:text-black mt-3'
            >
              LEARN MORE
            </button>
          </div>
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
          <Image
            src='/Images/WHS_Project_Graduation_Logo.png'
            alt='WHS Project Graduation Logo'
            className='transform-translate-x-1/2 transform-translate-y-1/2 top-1/2 left-1/2'
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className='mt-4 text-center items-center'>
        <h1 className='mt-4 text-3xl lg:text-5xl font-extrabold '>
         What's New?
        </h1>
        <p className='mt-10 max-w-[740px]  text-xs sm:text-base'>Hi, this is just placeholder text for now replace with a small blurb about how this is where yyou can find upcoming events or whatever u wantt o add fr lol. and don't add pselling mistakes when you fix it</p>
      <form className='flex justify-between max-w-[500px] scale-100 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]'action="">
        <input type='email' placeholder='Enter Your Email' className='pl-4 outline-none'></input>
        <button className='border-1 border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'>Subscribe</button>
      </form>
      </div>

    </section>
  )
}

export default HeroSection
