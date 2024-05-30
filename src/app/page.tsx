import FeaturedCourses from '@/components/FeaturedCourses'
import HeroSection from '@/components/HeroSection'
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
    </main>
  )
}

export default MainPage
