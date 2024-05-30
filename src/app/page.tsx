import FeaturedCourses from '@/components/FeaturedCourses'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import InstructorsSection from '@/components/InstructorsSection'
import TestimonialCards from '@/components/TestimonialCards'
import UpcomingEvents from '@/components/UpcomingEvents'
import WhyChooseUs from '@/components/WhyChooseUs'
import React from 'react'

function MainPage() {
  return (
    <main className='min-h-screen bg-black antialiased'>
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <TestimonialCards />
      <UpcomingEvents />
      <InstructorsSection />
      <Footer />
    </main>
  )
}

export default MainPage
