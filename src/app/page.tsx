"use client";

import Image from "next/image";
import { QRCodeSVG } from 'qrcode.react';
import PropertyCards from './components/PropertyCards';
import ContactForm from './components/ContactForm';
import { useEffect, useState } from "react";

export default function Home() {
  const [showTitle, setShowTitle] = useState(false);
  useEffect(() => {
    setShowTitle(true);
  }, []);
  const typewriterText = "Specializing in Charlotte, NC and surrounding areas. Let me help you find your perfect home.";
  const [displayedText, setDisplayedText] = useState("");
  useEffect(() => {
    let i = 0;
    setDisplayedText("");
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + typewriterText[i]);
      i++;
      if (i >= typewriterText.length) clearInterval(interval);
    }, 35);
    return () => clearInterval(interval);
  }, []);
  const [showSubtitle, setShowSubtitle] = useState(false);
  useEffect(() => {
    setShowTitle(true);
    setTimeout(() => setShowSubtitle(true), 600); // Fade subtitle after heading
  }, []);
  return (
    <div className="min-h-screen bg-navy">
      {/* Top Banner with Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-blue-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <span className="text-4xl md:text-5xl font-extrabold text-white tracking-tight font-montserrat">Dana Jenkins</span>
              <span className="text-white/80 text-sm">Broker • Realtor®</span>
            </div>
            <nav className="hidden md:flex space-x-8 text-white font-medium text-base">
              <a href="#" className="hover:text-blue-200 transition">Home</a>
              <a href="#about" className="hover:text-blue-200 transition">About</a>
              <a href="#listings" className="hover:text-blue-200 transition">Listings</a>
              <a href="#contact" className="hover:text-blue-200 transition">Contact</a>
            </nav>
            <div className="hidden md:block ml-8">
              <a href="#contact" className="flex items-center border border-white rounded px-5 py-2 text-white font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-200 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2m2-4h4m-4 0a2 2 0 1 0 4 0m-4 0a2 2 0 1 1 4 0" />
                </svg>
                LET'S TALK
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative w-full h-[600px]">
        <Image
          src="/house.jpg"
          alt="Luxury Real Estate"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30">
          <div className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
            <h1
              className={`mb-2 cb-title h1 transition-opacity duration-2000 ease-out ${showTitle ? 'opacity-100' : 'opacity-0'}`}
            >
              Explore Charlotte
            </h1>
            <p className={`text-xl text-white/90 mb-8 max-w-2xl mx-auto text-center transition-opacity duration-2000 ease-out ${showSubtitle ? 'opacity-100' : 'opacity-0'}`}>
              Specializing in Charlotte, NC and surrounding areas. Let me help you find your perfect home.
            </p>
            
          </div>
        </div>
      </div>

      {/* Add padding to account for fixed header */}
      <div className="pt-20">
        {/* About Me Section */}
        <section id="about" className="py-20 bg-blue-950">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="relative h-[400px] w-[300px] mx-auto rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/dana2.jpg"
                    alt="Dana Jenkins - Real Estate Professional"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-900">2+</div>
                      <div className="text-sm text-gray-600">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-900">10+</div>
                      <div className="text-sm text-gray-600">Homes Sold</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-white font-playfair">A little bit about me...</h2>
                <p className="text-lg text-white leading-relaxed">
                I’m a Charlotte-based Realtor® with Trade & Tryon Realty, driven by a genuine passion for helping people find a place to call home. With over 15 years of experience in customer service and interior design, I bring both empathy and vision to every client relationship.

After living in Charlotte for over a decade, I know and love this community and I’m proud to guide others as they put down roots here. Whether you’re buying your first home or searching for your next investment, I’m here to help make the process smooth and rewarding.

When I’m not working, you’ll likely find me outdoors with my husband and our energetic 8-year old daughter, enjoying everything Charlotte has to offer.


                </p>
                <p className="text-lg text-white leading-relaxed">
                  With a decade of living in the vibrant community of Charlotte, I bring a unique blend of expertise to the table. With over 15 years immersed in customer service and interior design, I&apos;ve honed my skills in understanding clients&apos; needs and crafting spaces that resonate with them on a personal level.
                </p>
                <p className="text-lg text-white leading-relaxed">
                  Beyond the confines of the real estate world, I find solace and inspiration in the great outdoors. From exploring the scenic beauty of Charlotte&apos;s parks to embarking on outdoor adventures with my husband and our spirited 8-year-old daughter, I cherish the moments spent surrounded by nature and loved ones.
                </p>
                <div className="pt-4">
                  <a
                    href="#contact"
                    className="inline-block bg-blue-900 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-800 transition font-semibold text-lg"
                  >
                    Let&apos;s Work Together
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Previously Sold Properties Section */}
        <section id="listings" className="py-16 bg-gray-300">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-semibold text-blue-900 mb-8 font-playfair">RECENT HOME SOLD</h2>
            
            {/* Sales Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-2xl font-bold text-blue-900">5</div>
                <div className="text-gray-600">Closed Sales</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-2xl font-bold text-blue-900">$912.8K</div>
                <div className="text-gray-600">Total Value</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-2xl font-bold text-blue-900">$2.8K - $579K</div>
                <div className="text-gray-600">Price Range</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-2xl font-bold text-blue-900">$182.6K</div>
                <div className="text-gray-600">Average Price</div>
              </div>
            </div>

            <PropertyCards />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-navy text-white">
  <div className="max-w-2xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-semibold mb-6 font-playfair">Let&apos;s Connect</h2>
    <p className="mb-8 text-lg">Ready to start your journey? Fill out the form below and I&apos;ll get back to you shortly.</p>
    
    <ContactForm />

    <div className="mt-12 text-white/80">
      {/* Logo Image */}
      <div className="mb-6 flex justify-center">
        <Image
          src="/logo.png"
          alt="Trade & Tryon Realty Logo"
          width={120} // You can adjust size here
          height={120}
          className="rounded-md"
        />
      </div>

      {/* Address Info */}
      <p>Trade & Tryon Realty</p>
      <p>1213 W Morehead St, Fl 5</p>
      <p>Charlotte, NC 28208</p>

      {/* QR Code */}
      <div className="mt-8 flex flex-col items-center">
        <p className="mb-4 text-white">Want to learn more? Scan the QR code to connect.</p>
        <div className="bg-white p-4 rounded-lg">
          <QRCodeSVG
            value="https://tradetryonrealty.com/dana-jenkins/"
            size={128}
            level="H"
            includeMargin={true}
          />
        </div>
      </div>
    </div>
  </div>
</section>

      </div>
    </div>
  );
}
