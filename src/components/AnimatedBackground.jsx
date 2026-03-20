import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#030303]">
      {/* Huge subtle moving abstract gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-600/20 mix-blend-screen blur-[100px] sm:blur-[140px] animate-[blob_7s_infinite]" />
      <div className="absolute top-[10%] right-[-20%] w-[60vw] h-[60vw] rounded-full bg-purple-600/20 mix-blend-screen blur-[100px] sm:blur-[180px] animate-[blob_9s_infinite_2s]" />
      <div className="absolute bottom-[-20%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-pink-600/20 mix-blend-screen blur-[100px] sm:blur-[140px] animate-[blob_11s_infinite_4s]" />
      
      {/* Texture Layer */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
    </div>
  );
};

export default AnimatedBackground;
