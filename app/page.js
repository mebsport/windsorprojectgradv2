"use client";
import HeroSection from "@/Components/HeroSection";
import NavBar from "@/Components/NavBar";
import BlogItem from "@/Components/BlogItem";
import BlogHeaderSection from "@/Components/BlogHeaderSection";
import AboutSection from "@/Components/AboutSection";

export default function Home() {
  return (
    <main className='overflow-x-hidden flex min-h-screen flex-col bg-white'>
      <NavBar />
      <div className='container mt-24 mx-auto py-4 px-12'>
        <HeroSection />
        <BlogHeaderSection />
        <BlogItem />
        <AboutSection />
      </div>
    </main>
  );
}
