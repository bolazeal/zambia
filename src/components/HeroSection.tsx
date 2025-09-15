import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

interface HeroProps {
  registrationLink: string;
  scrollToSection: (id: string) => void;
}

const HeroSection: React.FC<HeroProps> = ({ registrationLink, scrollToSection }) => {
  React.useEffect(() => {
    const section = document.getElementById('home');
    if (section) {
      console.log('HeroSection dimensions:', section.offsetWidth, section.offsetHeight);
      const img = new Image();
      img.src = "https://i.imgur.com/HkS7Fcq.jpg";
      img.onload = () => {
        console.log('Image dimensions:', img.width, img.height);
      };
    }
  }, []);

  return (
    <section
      id="home" 
      className="relative pt-40 pb-4 px-4"
      style={{ backgroundImage: "url('https://i.imgur.com/HkS7Fcq.jpg')", objectFit: 'cover', objectPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="container mx-auto max-w-6xl relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Zambia: Unstoppable Greatness 2025
        </h1>
        <p className="text-2xl md:text-3xl font-semibold text-yellow-400 mb-6">
          Healing, Deliverance, and Prophetic Encounter
        </p>
        <div className="flex justify-center items-center gap-4 md:gap-8 mb-8 text-slate-200">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-yellow-400" />
            <span>October 24-26, 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-yellow-400" />
            <span>Lusaka, Zambia</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a href={registrationLink} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-slate-900 font-bold px-8 py-6 text-lg">
              Reserve My Seat
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
          <Button onClick={() => scrollToSection('about')} size="lg" variant="outline" className="border-yellow-500 text-yellow-400 hover:bg-yellow-500/10 px-8 py-6 text-lg">
            Join the Greatness Encounter
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;