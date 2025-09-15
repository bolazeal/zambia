import React from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronRight } from 'lucide-react';

interface AboutProps {
  registrationLink: string;
}

const AboutSection: React.FC<AboutProps> = ({ registrationLink }) => {
  return (
    <section id="about" className="py-20 px-4 bg-slate-800/50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Breakthrough Awaits in Lusaka!</h2>
                        <iframe
                          src="https://streamable.com/o/la1f2p"
                          width="640"
                          height="360"
                          frameBorder="0"
                          allowFullScreen
                        ></iframe>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Prepare for three days of prophetic impartation, healing, deliverance, and undeniable demonstrations of God’s glory. This is a destiny-shaping moment you cannot afford to miss.
            </p>
            <div className="space-y-4">
              <div className="flex items-start"><CheckCircle className="h-5 w-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" /><p>Miracles that break limitations</p></div>
              <div className="flex items-start"><CheckCircle className="h-5 w-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" /><p>Deliverance that destroys barriers</p></div>
              <div className="flex items-start"><CheckCircle className="h-5 w-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" /><p>Anointing that propels you into unstoppable greatness</p></div>
            </div>
            <div className="mt-8">
              <a href={registrationLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold">
                  Reserve Your Free Seat
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl border-4 border-yellow-500/80">
            <img 
              src="https://i.imgur.com/zUFXAPs.jpg" 
              alt="Worshippers at the event" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;