import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PosterSection from './components/PosterSection';
import HostSection from './components/HostSection';
import SideBySideVideos from './components/SideBySideVideos';
import Gallery from './components/Gallery';
import ScheduleSection from './components/ScheduleSection';
import VenueSection from './components/VenueSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    console.log("App component rendered");
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navLinks = ['Home', 'About', 'Poster', 'Host', 'Highlights', 'Gallery', 'Schedule', 'Venue'];
  const registrationLink = "https://docs.google.com/forms/d/e/1FAIpQLSdpjcxqteips8WGg4V0rqZYYGY9edSHEoT323_cTK-o5UYVqg/viewform?usp=header";

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation 
        navLinks={navLinks}
        registrationLink={registrationLink}
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <HeroSection registrationLink={registrationLink} scrollToSection={scrollToSection} />
      <AboutSection registrationLink={registrationLink} />
      <PosterSection registrationLink={registrationLink} />
      <HostSection registrationLink={registrationLink} />
      <SideBySideVideos />
      <Gallery registrationLink={registrationLink} />
      <ScheduleSection registrationLink={registrationLink} />
      <VenueSection registrationLink={registrationLink} />
      <CTASection registrationLink={registrationLink} />
      <Footer registrationLink={registrationLink} />
    </div>
  );
}

export default App;