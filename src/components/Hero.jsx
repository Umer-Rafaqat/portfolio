import React, { useState } from "react";
import { ChevronRight, Play, Star, Rocket, Code, X } from "lucide-react";

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openVideo = () => {
    setIsVideoOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
    document.body.style.overflow = "unset"; // Re-enable scrolling
  };

  return (
    <>
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0">
          <div className="absolute top-40 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
          <div
            className="absolute top-60 right-40 w-2 h-2 bg-blue-400 rounded-full animate-ping"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-40 left-1/3 w-2 h-2 bg-cyan-500 rounded-full animate-ping"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block animate-fade-in">
                <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-sm backdrop-blur-sm flex items-center space-x-2 w-fit">
                  <span className="w-4 h-4 text-cyan-400 animate-pulse">
                    ⚡
                  </span>
                  <span>#1 Digital Marketing Agency</span>
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-slide-up">
                Transform Your
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 bg-clip-text text-transparent animate-gradient">
                  Digital Presence
                </span>
              </h1>

              <p
                className="text-xl text-slate-300 animate-slide-up"
                style={{ animationDelay: "200ms" }}
              >
                We craft data-driven digital strategies that elevate brands and
                drive measurable results in the modern marketplace.
              </p>

              <div
                className="flex flex-wrap gap-4 animate-slide-up"
                style={{ animationDelay: "400ms" }}
              >
                <button className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-lg font-semibold overflow-hidden">
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>Start Your Project</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button
                  onClick={openVideo}
                  className="group border border-cyan-500/30 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300 backdrop-blur-sm flex items-center space-x-2"
                >
                  <div className="relative">
                    <Play className="w-5 h-5" />
                    <div className="absolute inset-0 bg-cyan-400 blur-lg opacity-0 group-hover:opacity-50 transition-opacity"></div>
                  </div>
                  <span>Watch Video</span>
                </button>
              </div>

              <div
                className="flex items-center space-x-8 pt-4 animate-slide-up"
                style={{ animationDelay: "600ms" }}
              >
                <div className="flex -space-x-3">
                  {[
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
                    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80",
                    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80",
                  ].map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`Client ${i + 1}`}
                      className="w-10 h-10 rounded-full border-2 border-slate-950 transform hover:scale-110 hover:z-10 transition-transform duration-300 object-cover"
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-cyan-400 text-cyan-400 animate-pulse"
                        style={{ animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-slate-400 mt-1">
                    Trusted by 250+ clients
                  </p>
                </div>
              </div>
            </div>

            <div className="relative animate-float">
              <div className="relative z-10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 hover:border-cyan-500/40 transition-all duration-500">
                <div
                  className="aspect-video bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-lg flex items-center justify-center relative overflow-hidden group cursor-pointer"
                  onClick={openVideo}
                >
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                    alt="Digital Marketing Dashboard"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/40 to-blue-600/40 mix-blend-multiply"></div>
                  <Play className="w-20 h-20 text-white relative z-10 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 border-2 border-white/30 rounded-full animate-ping"></div>
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Campaign ROI</span>
                    <span className="text-cyan-400 font-semibold animate-pulse">
                      +245%
                    </span>
                  </div>
                  <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full animate-progress"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl opacity-10 blur-2xl animate-pulse"></div>

              {/* Floating icons */}
              <div
                className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center animate-float"
                style={{ animationDelay: "0s" }}
              >
                <Rocket className="w-6 h-6" />
              </div>
              <div
                className="absolute top-1/2 -right-6 w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center animate-float"
                style={{ animationDelay: "1s" }}
              >
                <Code className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-5xl mx-4">
            {/* Close Button */}
            <button
              onClick={closeVideo}
              className="absolute -top-12 right-0 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 group"
            >
              <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Video Container */}
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl border-2 border-cyan-500/30">
              <div className="aspect-video">
                {/* YouTube Video Embed - Replace VIDEO_ID with your actual YouTube video ID */}
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"
                  title="SMJ Solutions - Company Overview"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>

                {/* Alternative: Use HTML5 Video */}
                {/* Uncomment below and comment out iframe to use HTML5 video instead */}
                {/* <video 
                  className="w-full h-full"
                  controls
                  autoPlay
                  poster="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                >
                  <source src="YOUR_VIDEO_URL.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video> */}
              </div>
            </div>

            {/* Video Title */}
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-white">
                SMJ Solutions - Transforming Digital Experiences
              </h3>
              <p className="text-slate-400 mt-2">
                Discover how we help businesses grow through innovative digital
                solutions
              </p>
            </div>
          </div>

          {/* Click outside to close */}
          <div className="absolute inset-0 -z-10" onClick={closeVideo}></div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
}
