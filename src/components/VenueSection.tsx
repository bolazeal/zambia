import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';

interface VenueProps {
  registrationLink: string;
}

const VenueSection: React.FC<VenueProps> = ({ registrationLink }) => {
  return (
    <section id="venue" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Event Venues</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">Oct 24th & 25th</h3>
                <p className="text-slate-300 text-lg mb-2">Woodlands Stadium, Lusaka</p>
                <p className="text-slate-400">A prime, central venue ready to host this monumental gathering for a divine encounter.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">Oct 26th</h3>
                <p className="text-slate-300 text-lg mb-2">Champions Royal Assembly, Lusaka, Zambia</p>
                <p className="text-slate-400">Join us for a special anointing service at our home church.</p>
              </div>
            </div>
          </div>
          <div>
            <iframe 
              src="https://www.openstreetmap.org/export/embed.html?bbox=28.31,-15.44,28.33,-15.42&layer=mapnik&marker=-15.4325,28.3211"
              className="rounded-2xl w-full h-96 shadow-lg"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map to Woodlands Stadium"
            ></iframe>
             <p className="text-center text-slate-400 mt-2">Map to Woodlands Stadium (Venue for Oct 24 & 25)</p>
          </div>
        </div>
        <div className="text-center mt-12">
          <a href={registrationLink} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-slate-900 font-bold px-8 py-6 text-lg">
              Confirm Your Attendance
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;