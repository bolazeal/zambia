import React from 'react';

const SideBySideVideos: React.FC = () => {
  const videoIds = [
    "eGBEmm3VvS4",
    "l4VLtdZccow",
    "80HclhBb0Xg"
  ];

  return (
    <section className="py-12 bg-slate-800">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Featured Videos</h2>
        <div className="flex justify-center gap-6">
          {videoIds.map((videoId, index) => (
            <div key={index} className="w-1/3">
              <iframe
                width="315"
                height="560"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video"
                className="border-4 border-yellow-500 rounded-lg shadow-xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SideBySideVideos;