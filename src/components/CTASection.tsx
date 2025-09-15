import React from 'react';
import { Button } from "@/components/ui/button";

interface CTAProps {
  registrationLink: string;
}

const CTASection: React.FC<CTAProps> = ({ registrationLink }) => {
  return (
    <section id="register" className="py-20 px-4 bg-slate-800/50">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Reserve Your Moment – Step Into Greatness</h2>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          This is your divine moment of greatness. Come expecting breakthrough, healing, and deliverance like never before. Don’t come alone — invite your family, friends, and anyone who needs to step into God’s greatness.
        </p>
        <a href={registrationLink} target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-slate-900 font-bold px-10 py-6 text-lg">
            Reserve My Seat (It's Free!)
          </Button>
        </a>
      </div>
    </section>
  );
};

export default CTASection;