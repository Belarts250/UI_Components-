"use client";

import Image from "next/image";
import { Search, Box, Command, Zap, Play, Cloud, User, Gamepad2, ChevronLeft, ChevronRight, Globe, Monitor, Map, Glasses } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


if(typeof window !== "undefined"){
  gsap.registerPlugin(ScrollToPlugin)
}

export default function Home() {
  // Scroll animation state
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      word: "Innovation",
      image: "/mask.avif",
      title: "How VR is Transforming Our Digital World",
      desc: "Virtual Reality (VR) is no longer a concept of the future - it's a reality reshaping how we interact, work, and entertain ourselves."
    },
    {
      word: "Technology",
      image: "/helmet.avif",
      title: "Next-Gen Hardware at Your Fingertips",
      desc: "Experience the cutting-edge technology that brings virtual worlds to life with unprecedented clarity and responsiveness."
    },
    {
      word: "Experience",
      image: "/vr-user.png",
      title: "Immersive Experiences Like Never Before",
      desc: "Dive into fully realized digital environments that feel as real as the physical world around you."
    },
    {
      word: "Vision",
      image: "/vr.png",
      title: "Shaping the Metaverse",
      desc: "Architecting interconnected digital spaces where people can socialize, learn, and collaborate without boundaries."
    },
    {
      word: "Immersion",
      image: "/helmet.png",
      title: "Deep Sensory Integration",
      desc: "Pushing the limits of sensory feedback to create experiences that blur the line between the physical and digital."
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollableHeight = rect.height - window.innerHeight;
      const progress = Math.max(0, Math.min(1, -rect.top / scrollableHeight));
      
      const index = Math.min(Math.floor(progress * features.length), features.length - 1);
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize
    return () => window.removeEventListener("scroll", handleScroll);
  }, [features.length]);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    gsap.to(window, {
      duration: 1.5,
      scrollTo: { y: targetId, autoKill: true },
      ease: "power3.inOut",
    });
  };

  return (
    <div className="font-sans">
      {/* --- Section 0: The existing light mode hero --- */}
      <div className="relative min-h-screen bg-[#F5F5F7] overflow-hidden text-zinc-900 selection:bg-zinc-200">
        
        {/* Grey clip-path shape in the middle given by the user */}
        <div 
          className="absolute top-0 left-0 w-full h-full bg-[#E8E8EB] z-0 pointer-events-none"
          style={{
            clipPath: "polygon(43% 65%, 55% 41%, 100% 40%, 100% 46%, 56% 47%, 44% 71%, 0 71%, 0 66%)"
          }}
        />

        {/* Black bottom shape */}
        <div 
          className="absolute bottom-[-1px] left-0 w-[55%] h-24 bg-[#0F0F0F] z-10"
          style={{
            clipPath: "polygon(0 0, 85% 0, 100% 100%, 0 100%)"
          }}
        />
        
        <div className="relative z-20 max-w-[1400px] mx-auto px-10 pt-8 flex flex-col min-h-screen">
          {/* Navigation */}
          <header className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Box className="w-8 h-8 text-black" strokeWidth={2} />
              <span className="font-bold text-xl tracking-tight">NeoVision</span>
            </div>
            
            <nav className="hidden md:flex items-center gap-12 text-[13px] font-medium text-zinc-500">
            <a 
                  href="#home" 
                  onClick={(e) => handleNavClick(e, "#home")} 
                  className="hover:text-black transition-colors"
                >
                  Home
                </a>
                <a 
                  href="#about" 
                  onClick={(e) => handleNavClick(e, "#about")} 
                  className="hover:text-black transition-colors"
                >
                  About
                </a>
                <a 
                  href="#services" 
                  onClick={(e) => handleNavClick(e, "#services")} 
                  className="hover:text-black transition-colors"
                >
                  Services
                </a>
                <a 
                  href="#contact" 
                  onClick={(e) => handleNavClick(e, "#contact")} 
                  className="hover:text-black transition-colors"
                >
                  Contact
                </a>
            </nav>
            
            <div className="relative">
              <input 
                type="text" 
                placeholder="I am looking for..." 
                className="pl-6 pr-12 py-2.5 rounded-full border border-zinc-300 bg-transparent text-sm w-72 focus:outline-none focus:border-zinc-400 placeholder:text-zinc-400 italic font-light"
              />
              <Search className="w-4 h-4 text-zinc-400 absolute right-5 top-1/2 -translate-y-1/2" strokeWidth={2} />
            </div>
          </header>

          {/* Main Content Area */}
          <main className="flex-1 flex flex-col md:flex-row mt-28 relative">
            {/* Left Column */}
            <div className="w-full mt-32 md:w-[55%] flex flex-col">
              <div className="flex gap-4">
                <span className="text-zinc-800 text-sm font-medium mt-2">05</span>
                <div className="flex-1">
                  <p className="text-zinc-500 text-xs tracking-[0.3em] font-semibold uppercase mb-6">Futuristic</p>
                  <div className="relative inline-block mb-10 w-full">
                    <h1 className="text-[5.5rem] leading-[1.1] tracking-[-0.03em] font-medium text-zinc-900">
                      NEW DIGITAL<br />
                      UNIVERSE
                    </h1>
                    {/* Decorative curved line over DIGITAL */}
                    <svg className="absolute top-[8%] left-[26%] w-[60%] h-[50%] pointer-events-none stroke-zinc-400 fill-none" viewBox="0 0 300 100" preserveAspectRatio="none">
                      <path d="M 0,80 Q 150,-50 300,50" strokeWidth="1.5" />
                    </svg>
                  </div>
                  
                  <div className="flex items-center gap-8 mb-24">
                    <button className="bg-[#1C1C1C] text-white px-8 py-3.5 rounded-xl text-[13px] font-medium hover:bg-black transition-colors shadow-lg shadow-black/10">
                      Get Started
                    </button>
                    <a href="#" className="text-[13px] font-semibold text-zinc-800 hover:text-black transition-colors">
                      Contact Us
                    </a>
                  </div>

                  <div className="flex items-start gap-20 max-w-2xl pt-36">
                    <div>
                      <p className="text-xs text-zinc-500 mb-3 font-medium">Trusted by Clients</p>
                      <div className="flex items-center gap-4">
                        <div className="flex -space-x-3">
                          <img src="https://i.pravatar.cc/100?img=1" alt="Client 1" className="w-10 h-10 rounded-full border-2 border-[#F5F5F7] z-30 object-cover" />
                          <img src="https://i.pravatar.cc/100?img=2" alt="Client 2" className="w-10 h-10 rounded-full border-2 border-[#F5F5F7] z-20 object-cover" />
                          <img src="https://i.pravatar.cc/100?img=3" alt="Client 3" className="w-10 h-10 rounded-full border-2 border-[#F5F5F7] z-10 object-cover" />
                          <img src="https://i.pravatar.cc/100?img=4" alt="Client 4" className="w-10 h-10 rounded-full border-2 border-[#F5F5F7] z-0 object-cover" />
                        </div>
                        <span className="font-semibold text-lg text-zinc-800">20+</span>
                      </div>
                    </div>
                    
                    <div className="w-12 h-12 rounded-full border border-zinc-300 flex items-center justify-center flex-shrink-0 mt-5">
                      <Command className="w-5 h-5 text-zinc-800" strokeWidth={1.5} />
                    </div>

                    <p className="text-[13px] text-zinc-500 leading-relaxed max-w-[280px] mt-4 font-medium">
                      In this futuristic realm, users can explore hyper-realistic virtual environments, interact with AI-driven avatars.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div  className="w-full md:w-[45%] relative">
              {/* The VR User Image */}
              <div className="absolute bottom-[-2%] right-[-60%] w-[250%] h-[290%] z-0 pointer-events-none">
                <Image 
                  src="/vr.png" 
                  alt="VR User" 
                  fill 
                  className="object-contain object-right-bottom mix-blend-darken"
                  priority
                />
              </div>

              {/* Reality Percentage */}
              <div className="absolute top-[65%] left-0 z-20">
                <p className="text-3xl font-medium text-zinc-900 tracking-tight">47.2%</p>
                <p className="text-zinc-500 text-sm mt-1 font-medium">Reality</p>
              </div>
            </div>
          </main>

          {/* Bottom Bar Content (over black shape) */}
          <footer className="mt-auto h-24 flex items-center gap-12 text-zinc-400 z-20 absolute bottom-0 left-10 w-full pointer-events-none">
            <div className="w-12 h-[1px] bg-zinc-600" />
            <div className="flex items-center gap-2 pointer-events-auto">
              <Command className="w-5 h-5 text-zinc-500" />
              <span className="font-semibold tracking-wide text-lg text-zinc-500">Logoipsum</span>
            </div>
            <div className="flex items-center gap-2 pointer-events-auto">
              <Zap className="w-5 h-5 text-zinc-500" />
              <span className="font-semibold tracking-wide text-lg text-zinc-500">Logoipsum</span>
            </div>
          </footer>
        </div>
      </div>

      {/* --- New Dark Sections --- */}
      <div className="bg-[#0F0F0F] text-white selection:bg-zinc-800 min-h-screen border-t border-[#0F0F0F]">
        
        {/* Section 1: ABOUT US */}
        <section id="about" className="max-w-[1400px] mx-auto px-10 py-32 flex flex-col md:flex-row items-center gap-20">
          <div className="w-[120px] h-[400px] md:w-1/2 relative aspect-square md:aspect-[4/5] rounded-[2.5rem] overflow-hidden">
            <Image 
              src="/vr.png" 
              alt="Digital Frontier Helmet" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <p className="text-zinc-500 text-xs tracking-[0.3em] font-semibold uppercase mb-6">About Us</p>
            <h2 className="text-5xl md:text-6xl font-medium tracking-tight mb-8 leading-tight">
              THE DIGITAL<br />FRONTIER
            </h2>
            <div className="flex gap-3 mb-10">
              <span className="px-5 py-2 rounded-full border border-zinc-800 text-xs text-zinc-400">Digital</span>
              <span className="px-5 py-2 rounded-full border border-zinc-800 text-xs text-zinc-400">Reality</span>
              <span className="px-5 py-2 rounded-full border border-zinc-800 text-xs text-zinc-400">Next</span>
            </div>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-md mb-12">
              Step into The Digital Frontier, where the boundaries between reality and virtual innovation disappear. This is the next era of immersive technology.
            </p>
            <div className="flex items-center gap-8">
              <button className="bg-[#222] text-white px-8 py-3.5 rounded-xl text-[13px] font-medium hover:bg-zinc-800 transition-colors">
                Learn More
              </button>
              <button className="flex items-center gap-3 text-[13px] font-semibold text-zinc-300 hover:text-white transition-colors group">
                <span className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center group-hover:border-zinc-500 transition-colors">
                  <Play className="w-3.5 h-3.5 fill-current" />
                </span>
                Watch a Video
              </button>
            </div>
          </div>
        </section>

        {/* Section 2: OUR SERVICE */}
        <section id="services" className="max-w-[1400px] mx-auto px-10 py-32 flex flex-col items-center">
          
          {/* Centered Title Area */}
          <div className="flex flex-col items-center justify-center text-center mb-24 w-full">
            <h2 className="text-5xl md:text-[4rem] font-bold tracking-tight leading-[1.15] text-white mb-6 uppercase">
              Our Services.
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl font-light tracking-wide">
              Unmatched Services. Unmatched Excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 w-full">
            
            {/* Card 1 - Active */}
            <div className="relative border-2 border-white p-10 pt-14">
              <div className="absolute top-0 left-8 -translate-y-1/2 bg-[#0F0F0F] px-4">
                <Cloud className="w-12 h-12 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-widest mb-6 text-white">Reality Development</h3>
              <p className="text-zinc-300 text-lg leading-relaxed font-light">
                Step into the future with our custom VR development services, designed to create immersive digital experiences.
              </p>
            </div>

            {/* Card 2 - Inactive */}
            <div className="relative border border-zinc-700 p-10 pt-14 hover:border-zinc-500 transition-colors group">
              <div className="absolute top-0 left-8 -translate-y-1/2 bg-[#0F0F0F] px-4">
                <User className="w-12 h-12 text-zinc-500 group-hover:text-zinc-300 transition-colors" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-widest mb-6 text-zinc-400 group-hover:text-zinc-200 transition-colors">Digital Assistants</h3>
              <p className="text-zinc-500 text-lg leading-relaxed font-light group-hover:text-zinc-400 transition-colors">
                Enhance customer engagement and operational efficiency with our AI-driven virtual assistants. These intelligent avatars.
              </p>
            </div>

            {/* Card 3 - Inactive */}
            <div className="relative border border-zinc-700 p-10 pt-14 hover:border-zinc-500 transition-colors group">
              <div className="absolute top-0 left-8 -translate-y-1/2 bg-[#0F0F0F] px-4">
                <Gamepad2 className="w-12 h-12 text-zinc-500 group-hover:text-zinc-300 transition-colors" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-widest mb-6 text-zinc-400 group-hover:text-zinc-200 transition-colors">Gaming Solutions</h3>
              <p className="text-zinc-500 text-lg leading-relaxed font-light group-hover:text-zinc-400 transition-colors">
                Revolutionize the gaming industry with our next-generation VR game development services.
              </p>
            </div>

            {/* Card 4 - Inactive */}
            <div className="relative border border-zinc-700 p-10 pt-14 hover:border-zinc-500 transition-colors group">
              <div className="absolute top-0 left-8 -translate-y-1/2 bg-[#0F0F0F] px-4">
                <Globe className="w-12 h-12 text-zinc-500 group-hover:text-zinc-300 transition-colors" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-widest mb-6 text-zinc-400 group-hover:text-zinc-200 transition-colors">Virtual Tours</h3>
              <p className="text-zinc-500 text-lg leading-relaxed font-light group-hover:text-zinc-400 transition-colors">
                Explore real estate and tourism destinations from anywhere with our photorealistic virtual tours.
              </p>
            </div>

            {/* Card 5 - Inactive */}
            <div className="relative border border-zinc-700 p-10 pt-14 hover:border-zinc-500 transition-colors group">
              <div className="absolute top-0 left-8 -translate-y-1/2 bg-[#0F0F0F] px-4">
                <Monitor className="w-12 h-12 text-zinc-500 group-hover:text-zinc-300 transition-colors" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-widest mb-6 text-zinc-400 group-hover:text-zinc-200 transition-colors">Training Sims</h3>
              <p className="text-zinc-500 text-lg leading-relaxed font-light group-hover:text-zinc-400 transition-colors">
                Safe, cost-effective, and highly realistic VR training environments for corporate and industrial applications.
              </p>
            </div>

            {/* Card 6 - Inactive */}
            <div className="relative border border-zinc-700 p-10 pt-14 hover:border-zinc-500 transition-colors group">
              <div className="absolute top-0 left-8 -translate-y-1/2 bg-[#0F0F0F] px-4">
                <Box className="w-12 h-12 text-zinc-500 group-hover:text-zinc-300 transition-colors" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-widest mb-6 text-zinc-400 group-hover:text-zinc-200 transition-colors">3D Modeling</h3>
              <p className="text-zinc-500 text-lg leading-relaxed font-light group-hover:text-zinc-400 transition-colors">
                High-fidelity 3D assets and environments optimized for real-time rendering and virtual reality.
              </p>
            </div>

            {/* Card 7 - Inactive */}
            <div className="relative border border-zinc-700 p-10 pt-14 hover:border-zinc-500 transition-colors group">
              <div className="absolute top-0 left-8 -translate-y-1/2 bg-[#0F0F0F] px-4">
                <Zap className="w-12 h-12 text-zinc-500 group-hover:text-zinc-300 transition-colors" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-widest mb-6 text-zinc-400 group-hover:text-zinc-200 transition-colors">Metaverse Integration</h3>
              <p className="text-zinc-500 text-lg leading-relaxed font-light group-hover:text-zinc-400 transition-colors">
                Seamlessly connect your brand into emerging metaverse platforms and digital ecosystems.
              </p>
            </div>

            {/* Card 8 - Inactive */}
            <div className="relative border border-zinc-700 p-10 pt-14 hover:border-zinc-500 transition-colors group">
              <div className="absolute top-0 left-8 -translate-y-1/2 bg-[#0F0F0F] px-4">
                <Command className="w-12 h-12 text-zinc-500 group-hover:text-zinc-300 transition-colors" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-widest mb-6 text-zinc-400 group-hover:text-zinc-200 transition-colors">Spatial Computing</h3>
              <p className="text-zinc-500 text-lg leading-relaxed font-light group-hover:text-zinc-400 transition-colors">
                Augment reality with spatial applications designed for next-generation hardware.
              </p>
            </div>

          </div>
        </section>

        {/* Section 3: LIMITLESS POSSIBILITIES (Sticky Scroll) */}
        <section id="#services" className="relative mt-20" ref={containerRef} style={{ height: "500vh" }}>
          <div className="sticky top-0 h-screen flex flex-col justify-center max-w-[1400px] mx-auto px-10 overflow-hidden">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-16 max-w-xl leading-tight">
              LIMITLESS POSSIBILITIES<br />WITH NEOVISION
            </h2>

            <div className="flex flex-col md:flex-row gap-12 lg:gap-20 h-[50vh]">
              {/* Words List */}
              <div className="w-full md:w-[15%] flex flex-col gap-6 justify-center">
                {features.map((feature, idx) => (
                  <button 
                    key={idx}
                    onClick={() => {
                      const y = containerRef.current!.offsetTop + (idx * (window.innerHeight * 0.9));
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }}
                    className={`text-left text-4xl font- transition-all duration-300 origin-left ${
                      activeIndex === idx ? "text-white scale-110" : "text-zinc-600 hover:text-zinc-400"
                    }`}
                  >
                    {feature.word}
                  </button>
                ))}
              </div>

              {/* Image Display */}
              <div className="w-full md:w-[50%] relative h-full rounded-3xl overflow-hidden bg-[#161616]">
                {features.map((feature, idx) => (
                  <div 
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      activeIndex === idx ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                  >
                    <Image 
                      src={feature.image}
                      alt={feature.word}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Text Description */}
              <div className="w-full md:w-[35%] flex flex-col justify-center relative h-full">
                {features.map((feature, idx) => (
                  <div 
                    key={idx}
                    className={`absolute inset-0 flex flex-col justify-center transition-all duration-700 ease-in-out ${
                      activeIndex === idx ? "opacity-100 translate-y-0 pointer-events-auto z-10" : "opacity-0 translate-y-8 pointer-events-none z-0"
                    }`}
                  >
                    <h3 className="text-xl font-medium mb-4 pr-10">{feature.title}</h3>
                    <p className="text-zinc-500 text-lg leading-relaxed mb-8 max-w-sm">
                      {feature.desc}
                    </p>
                    <a href="#" className="text-xs font-semibold text-zinc-300 hover:text-white transition-colors uppercase tracking-wider mb-auto">
                      Learn More
                    </a>
                    
                    <div className="flex items-center justify-between mt-auto pt-8 border-t border-zinc-800 text-xs text-zinc-500 font-medium w-full max-w-sm">
                      <span>08 February 2025</span>
                      <span>Henry Leonards</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: VOICES OF THE FUTURE */}
        <section className="relative max-w-[1400px] mx-auto px-10 py-32 flex flex-col lg:flex-row gap-20 items-center">
          {/* subtle background wave */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-20">
            <svg width="100%" height="100%" viewBox="0 0 1000 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M-200 120 C 200 50, 400 300, 1100 200" stroke="#ffffff" strokeWidth="18" fill="none" />
            </svg>
          </div>
          
          <div className="w-full lg:w-1/2 relative z-10">
            <h2 className="text-5xl md:text-6xl font-medium tracking-tight mb-8 leading-tight uppercase">
              VOICES OF THE<br />FUTURE
            </h2>
            <div className="w-full max-w-sm h-[1px] bg-zinc-800 mb-8" />
            <p className="text-zinc-500 text-lg leading-relaxed max-w-md">
              Here, you'll hear firsthand from users, pioneers, and tech enthusiasts who are shaping this next generation of virtual reality and futuristic technology. Explore their stories and discover how we is transforming the way we interact with the digital world.
            </p>
          </div>
          
          <div className="w-full lg:w-1/2 flex flex-col gap-6 relative z-10">
            {/* Testimonial 1 */}
            <div className="bg-[#161616] rounded-3xl p-8 flex items-center justify-between gap-6 hover:bg-[#1a1a1a] transition-colors border border-transparent hover:border-zinc-800">
              <div className="flex-1">
                <p className="text-zinc-400 text-base leading-relaxed mb-6">
                  NeoVision completely transformed the way I interact with virtual reality.
                </p>
                <h4 className="text-white font-medium">James Rizaki</h4>
              </div>
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-zinc-800">
                <img src="https://i.pravatar.cc/150?img=11" alt="James Rizaki" width={64} height={64} className="object-cover" />
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-[#161616] rounded-3xl p-8 flex items-center justify-between gap-6 hover:bg-[#1a1a1a] transition-colors border border-transparent hover:border-zinc-800">
              <div className="flex-1">
                <p className="text-zinc-400 text-base leading-relaxed mb-6">
                  Our team has adopted NeoVision's VR collaboration tools.
                </p>
                <h4 className="text-white font-medium">Samantha Leonardo</h4>
              </div>
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-zinc-800">
                <img src="https://i.pravatar.cc/150?img=5" alt="Samantha Leonardo" width={64} height={64} className="object-cover" />
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-[#161616] rounded-3xl p-8 flex items-center justify-between gap-6 hover:bg-[#1a1a1a] transition-colors border border-transparent hover:border-zinc-800">
              <div className="flex-1">
                <p className="text-zinc-400 text-base leading-relaxed mb-6">
                  I've been gaming in VR for years, but NeoVision's technology...
                </p>
                <h4 className="text-white font-medium">Mark Trevor</h4>
              </div>
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-zinc-800">
                <img src="https://i.pravatar.cc/150?img=12" alt="Mark Trevor" width={64} height={64} className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: DIVE INTO THE FUTURE */}
        <section className="max-w-[1400px] mx-auto px-10 py-20 pb-32">
          <div className="relative w-full aspect-[21/9] rounded-[2.5rem] overflow-hidden group">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-60 transition-opacity duration-700 group-hover:opacity-80 mix-blend-screen"
            >
              <source src="/girl_using_vrmp_.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
            <div className="absolute inset-0 z-20 flex flex-col md:flex-row items-center justify-between p-12 md:p-24">
              <h2 className="text-5xl md:text-7xl font-medium tracking-tight text-white max-w-lg leading-[1.1] uppercase">
                DIVE INTO THE<br />FUTURE
              </h2>
              <div className="flex flex-col items-center md:items-end gap-6 max-w-xs text-center md:text-right mt-10 md:mt-0">
                <button className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 border border-white/20">
                  <Play className="w-6 h-6 text-white ml-1 fill-current" />
                </button>
                <p className="text-zinc-300 text-base leading-relaxed">
                  Immerse yourself in the groundbreaking world of NeoVision. Explore the limitless possibilities of futuristic technology and virtual reality.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* --- Footer using foot.jpg --- */}
      <footer id="contact" className="relative bg-[#0F0F0F] pt-32 pb-10 border-t border-zinc-800/50 overflow-hidden text-white font-sans selection:bg-zinc-800">
        <div 
          className="absolute inset-0 z-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: "url('/foot.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/80 to-[#0F0F0F]/40 z-0 pointer-events-none" />
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-10">
          
          <div className="flex flex-col md:flex-row gap-16 justify-between mb-24">
            
            <div className="w-full md:w-[30%]">
              <div className="flex items-center gap-2 mb-12">
                <Box className="w-8 h-8 text-white" strokeWidth={4} />
                <span className="font-bold text-5xl tracking-tight">NeoVision</span>
              </div>
              
              <div className="flex flex-col gap-8">
                <div>
                  <p className="text-white font-medium mb-2">Email</p>
                  <p className="text-zinc-500 text-base">contact@neovision.com</p>
                </div>
                <div>
                  <p className="text-white font-medium mb-2">Address</p>
                  <p className="text-zinc-500 text-base leading-relaxed max-w-[200px]">
                    NeoVision Technologies Ltd.<br />FutureTech Blvd.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-[70%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
              <div className="flex flex-col gap-4">
                <p className="text-white font-medium mb-2">Phone Number</p>
                <p className="text-zinc-500 text-base">+1 (800) 123-4567</p>
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-white font-medium mb-2">Quick Links</p>
                <a href="#" className="text-zinc-500 text-base hover:text-white transition-colors">Home</a>
                <a href="#" className="text-zinc-500 text-base hover:text-white transition-colors">About Us</a>
                <a href="#" className="text-zinc-500 text-base hover:text-white transition-colors">Services</a>
                <a href="#" className="text-zinc-500 text-base hover:text-white transition-colors">Blog</a>
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-white font-medium mb-2">Explore</p>
                <a href="#" className="text-zinc-500 text-base hover:text-white transition-colors">Product Demos</a>
                <a href="#" className="text-zinc-500 text-base hover:text-white transition-colors">Case Studies</a>
                <a href="#" className="text-zinc-500 text-base hover:text-white transition-colors">Testimonials</a>
                <a href="#" className="text-zinc-500 text-base hover:text-white transition-colors">Media & Press</a>
                <a href="#" className="text-zinc-500 text-base hover:text-white transition-colors">Events & Webinars</a>
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-white font-medium mb-2 leading-snug uppercase">
                  FUTURISTIC TECH &<br />VR WEBSITE
                </p>
                <p className="text-zinc-500 text-base leading-relaxed mt-2">
                  Dive into a world where technology and virtual reality converge to create mind-blowing experiences.
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <a href="#" className="w-8 h-8 rounded-full bg-[#161616] border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 transition-colors group">
                    <span className="text-zinc-400 group-hover:text-white text-xs font-semibold">Dr</span>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-[#161616] border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 transition-colors group">
                    <span className="text-zinc-400 group-hover:text-white text-xs font-semibold">in</span>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-[#161616] border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 transition-colors group">
                    <span className="text-zinc-400 group-hover:text-white text-xs font-semibold">Ig</span>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-[#161616] border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 transition-colors group">
                    <span className="text-zinc-400 group-hover:text-white text-xs font-semibold">X</span>
                  </a>
                </div>
              </div>
            </div>
            
          </div>

          <div id="contacts" className="text-center w-full h-[7vw] overflow-hidden relative mb-8">
            <h1 className="text-[12vw] font-bold tracking-tighter leading-none select-none whitespace-nowrap absolute top-0 left-1/2 -translate-x-1/2 flex">
              {"NEOVISION".split('').map((letter, i) => (
                <span key={i} className="text-white opacity-[0.04] hover:opacity-20 transition-opacity duration-300 cursor-default">
                  {letter}
                </span>
              ))}
            </h1>
          </div>

          <div className="w-full overflow-hidden border-t border-zinc-800/80 pt-8 relative">
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#0F0F0F] to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#0F0F0F] to-transparent z-10 pointer-events-none" />
            
            <div className="flex w-max animate-scroll">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center gap-16 px-8 shrink-0">
                  <div className="flex items-center gap-2">
                    <Command className="w-5 h-5 text-zinc-600" />
                    <span className="font-semibold text-sm text-zinc-600">Logoi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Command className="w-5 h-5 text-zinc-600" />
                    <span className="font-semibold text-sm text-zinc-600">Logo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Command className="w-5 h-5 text-zinc-600" />
                    <span className="font-semibold text-sm text-zinc-600">ipsum</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Command className="w-5 h-5 text-zinc-600" />
                    <span className="font-semibold text-sm text-zinc-600">Logsum</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Command className="w-5 h-5 text-zinc-600" />
                    <span className="font-semibold text-sm text-zinc-600">Lsum</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Command className="w-5 h-5 text-zinc-600" />
                    <span className="font-semibold text-sm text-zinc-600">Logoipsum</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </footer>
    </div>
  );
}

