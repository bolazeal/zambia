import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';

const images = [
  { src: 'https://i.imgur.com/fHAPMev.jpg', alt: 'Congregation with hands raised in worship' },
  { src: 'https://i.imgur.com/gbSHo51.jpg', alt: 'Worshippers singing with passion' },
  { src: 'https://i.imgur.com/0WqbZPO.jpg', alt: 'People praying together in a large crowd' },
  { src: 'https://i.imgur.com/EqgjCQp.jpg', alt: 'Prophet Joshua Iginla preaching on stage' },
  { src: 'https://i.imgur.com/7GdU5n7.jpg', alt: 'Large audience at a religious event' },
  { src: 'https://i.imgur.com/ocUZHa7.jpg', alt: 'Close-up of hands raised in worship' },
];

const Gallery = ({ registrationLink }: { registrationLink: string }) => {
  return (
    <section id="gallery" className="py-20 px-4 bg-slate-800/50">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Moments of Glory</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-lg border-2 border-yellow-500/50 transform hover:scale-105 transition-transform duration-300">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover aspect-square" 
              />
            </div>
          ))}
        </div>
        <div className="mt-12">
          <a href={registrationLink} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-slate-900 font-bold px-8 py-6 text-lg">
              Experience It Live - Reserve Seat
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;