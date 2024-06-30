import React from 'react'
import Hello from "./HelloSection";
import WhoWeAre from "./WhoWeAreSection";
import ServicesSection from "./ServicesSection";
import Testimonials from "./TestimonialsSection";
import ContactSection from "./ContactSection";
import Header from '../components/header';
import Footer from '../components/Footer';
import TeamMembers from './TeamMembers';
export default function Home() {
  return (
    <div>
    <Header/>
    <Hello/>
    <WhoWeAre/>
    <ServicesSection/>
    <TeamMembers/> 
    <Testimonials/>
    <ContactSection/>
    
    <Footer/>
    </div>
  )
}
