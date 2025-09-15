import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';

interface PosterProps {
  registrationLink: string;
}

const PosterSection: React.FC<PosterProps> = ({ registrationLink }) => {
  return (
    <section id="poster" className="py-20 px-4">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Official Event Poster</h2>
        <div className="flex justify-center">
          <img 
            src="https://i.imgur.com/c27MNqn.jpg" 
            alt="Zambia: Unstoppable Greatness 2025 Event Poster" 
            className="rounded-xl shadow-2xl border-4 border-yellow-500/80"
          />
        </div>
        <div className="mt-10">
          <a href={registrationLink} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold">
              Reserve Your Seat Now
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PosterSection;