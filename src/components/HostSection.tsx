import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';

interface HostProps {
  registrationLink: string;
}

const HostSection: React.FC<HostProps> = ({ registrationLink }) => {
  return (
    <section id="host" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet The Host</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 text-center">
            <img src="https://i.imgur.com/ocUZHa7.jpg" alt="Prophet Joshua Iginla" className="w-80 h-96 rounded-2xl object-cover object-top mx-auto mb-6 border-4 border-yellow-500 shadow-lg"/>
          </div>
          <div className="md:w-2/3">
            <h3 className="text-3xl font-bold mb-2">Prophet Joshua Iginla</h3>
            <p className="text-yellow-400 mb-4 text-lg">Lead Pastor, Champions Royal Assembly</p>
            <p className="text-slate-300 mb-4 leading-relaxed">
              An internationally renowned minister of the Gospel, prophetic voice, bestselling author, mentor, and philanthropist. He is the Lead Pastor of Champions Royal Assembly — an 80,000-capacity mega church in Abuja, Nigeria, with branches worldwide.
            </p>
            <p className="text-slate-300 mb-4 leading-relaxed">
              Celebrated for prophetic accuracy and supernatural healing, his ministry is rooted in compassion. He is the founder of a humanitarian foundation that empowers widows, orphans, and the less privileged. He is the author of over 100 transformational books and is married to Prophetess Stella Iginla Zimasa, blessed with five children.
            </p>
            <div className="mt-6">
              <a href={registrationLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold">
                  Join the Encounter
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-6xl mt-12">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 text-center">
            <img src="https://imgur.com/wjzZCRB.jpg" alt="Prophetess Stella Zimasa Iginla" className="w-80 h-96 rounded-2xl object-cover object-top mx-auto mb-6 border-4 border-yellow-500 shadow-lg"/>
          </div>
          <div className="md:w-2/3">
            <h3 className="text-3xl font-bold mb-2">Prophetess Stella Zimasa Iginla</h3>
            <p className="text-yellow-400 mb-4 text-lg">Vice President, Champions Royal Assembly</p>
            <p className="text-slate-300 mb-4 leading-relaxed">
              Prophetess Stella Zimasa Iginla is a respected and well-educated prophetess, entrepreneur, author, and HR specialist known for her anointing in healing and prophetic grace. Originally from South Africa, she holds multiple professional certifications in addition to a degree in Human Resources Management. As the Vice President of Champions Royal Assembly, she is passionate about empowering women through faith and community initiatives, inspiring them to overcome life's challenges. Her ministry includes hosting public speaking engagements, leadership programs, wellness outreaches, and professional coaching sessions. She is the author of the bestselling book, "The Unstoppable Woman," and is the devoted wife of Prophet Joshua Iginla.
            </p>
            <div className="mt-6">
              <a href={registrationLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold">
                  Join the Encounter
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostSection;