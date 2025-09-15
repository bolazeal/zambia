import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, Phone } from 'lucide-react';

interface FooterProps {
  registrationLink: string;
}

const Footer: React.FC<FooterProps> = ({ registrationLink }) => {
  return (
    <footer className="py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl font-bold mb-4">Zambia: Unstoppable Greatness 2025</h3>
        <div className="mb-8">
          <a href={registrationLink} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold">
              Reserve Your Seat Now
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
          <div className="flex items-center gap-2 text-slate-400">
            <Phone className="h-4 w-4"/> For Enquiries:
          </div>
          <a href="tel:+27732678862" className="text-slate-300 hover:text-yellow-400">+27 73 267 8862</a>
          <a href="tel:+27760620050" className="text-slate-300 hover:text-yellow-400">+27 76 062 0050</a>
        </div>
        <p className="text-slate-500">&copy; 2024 Unstoppable Greatness. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;