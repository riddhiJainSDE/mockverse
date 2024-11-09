"use client"
import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-customBlue min-h-screen font-sans text-gray-800">
      {/* Navbar */}
      <div className="flex p-4 items-center justify-between bg-secondary shadow-md">
      <Image src={'/logo1.jpg'} width={220} height={100} alt='logo' />
        <ul className="hidden md:flex gap-6">
          <li className="hover:text-primary hover:font-bold transition-all cursor-pointer">
          <Link href="/dashboard">Dashboard</Link>
          </li>
          <li className="hover:text-primary hover:font-bold transition-all cursor-pointer">
            Questions
          </li>
          <li className="hover:text-primary hover:font-bold transition-all cursor-pointer">
            AI Resume Builder
          </li>
          <li className="hover:text-primary hover:font-bold transition-all cursor-pointer">
            How it works?
          </li>
        </ul>
        <UserButton />
      </div>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center max-w-7xl mx-auto px-6 py-16">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl text-white md:text-5xl font-bold leading-tight">
            Your roadmap to a perfect interview
          </h1>
          <p className="text-white">
            Get Interview Ready! Train yourself with the help of AI.
          </p>
          <button className="bg-white px-6 py-3 rounded-full mt-4 hover:bg-blue-200">
          <Link href="/dashboard">Start your session now</Link>
          </button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
  <img 
    src="landing1.gif" 
    alt="Illustration" 
    className="w-full" // Use full width
    style={{ maxWidth: '800px', height: 'auto' }} // Set custom size if needed
  />
</div>
      </section>

      {/* Offer Section */}
      <section className="text-center py-12 bg-white">
        <h2 className="text-xl text-blue-500 font-semibold">OUR OFFER</h2>
        <h3 className="text-3xl font-bold mt-2">Our goal</h3>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
        Our goal is to help aspiring AI professionals prepare for interviews by offering realistic mock interview experiences that improve their technical skills and boost their confidence.
        </p>
        <div className="flex flex-col md:flex-row justify-center mt-8 space-y-8 md:space-y-0 md:space-x-12">
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 p-4 rounded-full">
            
              <Image src={'/grow.png'} width={100} height={100} alt='logo' />
              
            </div>
            <h4 className="font-bold mt-4">Learn</h4>
            <p className="text-gray-600 text-center">Develop knowledge for your feild.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 p-4 rounded-full">
            <Image src={'/practice.png'} width={100} height={100} alt='logo' />
            </div>
            <h4 className="font-bold mt-4">Practice</h4>
            <p className="text-gray-600 text-center">Engage in hands-on exercises to refine skills.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 p-4 rounded-full">
            <Image src={'/learn.png'} width={100} height={100} alt='logo' />
            </div>
            <h4 className="font-bold mt-4">Grow</h4>
            <p className="text-gray-600 text-center">Gain confidence through real-time interview.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="font-bold">Take Mock Interviews</h4>
              <p className="text-gray-600">Practce your interviews and improve through feedback.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="font-bold">Free to set up</h4>
              <p className="text-gray-600">Get started without any upfront costs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="font-bold">Question Bank</h4>
              <p className="text-gray-600">Stay on track with 100+ questions</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="font-bold">Plan your growth</h4>
              <p className="text-gray-600">Identify areas to improve and grow.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
