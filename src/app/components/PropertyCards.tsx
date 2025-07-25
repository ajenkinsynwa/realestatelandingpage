'use client';

import Image from "next/image";

export default function PropertyCards() {
  const scrollLeft = () => {
    const container = document.querySelector('.scroll-container');
    if (container) {
      container.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = document.querySelector('.scroll-container');
    if (container) {
      container.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <div className="overflow-x-auto pb-6 scrollbar-hide scroll-container">
        <div className="flex space-x-6 min-w-max">
          {/* Property Cards */}
          <div className="w-80 flex-shrink-0 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/house1.jpg"
                alt="8527 Foxbridge Drive"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-2">14724 Colonial Park Drive</h3>
              <p className="text-gray-600 mb-2">Huntersville, NC • 5 Beds • 4 Baths</p>
              <div className="text-blue-900 font-semibold text-xl">$570,000</div>
              <p className="text-sm text-gray-500 mt-2">1.17 acre wooded lot with pool</p>
            </div>
          </div>

          <div className="w-80 flex-shrink-0 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/house2.jpg"
                alt="1234 Park Road"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-2">1234 Park Road</h3>
              <p className="text-gray-600 mb-2">Charlotte, NC • 3 Beds • 2.5 Baths</p>
              <div className="text-blue-900 font-semibold text-xl">$575,000</div>
              <p className="text-sm text-gray-500 mt-2">Updated kitchen, fenced backyard</p>
            </div>
          </div>

          <div className="w-80 flex-shrink-0 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/house3.jpg"
                alt="5678 South Boulevard"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-2">5678 South Boulevard</h3>
              <p className="text-gray-600 mb-2">Charlotte, NC • 5 Beds • 4 Baths</p>
              <div className="text-blue-900 font-semibold text-xl">$1,250,000</div>
              <p className="text-sm text-gray-500 mt-2">Luxury home with smart features</p>
            </div>
          </div>

          <div className="w-80 flex-shrink-0 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/house4.jpg"
                alt="9012 Providence Road"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-2">9012 Providence Road</h3>
              <p className="text-gray-600 mb-2">Charlotte, NC • 4 Beds • 3.5 Baths</p>
              <div className="text-blue-900 font-semibold text-xl">$925,000</div>
              <p className="text-sm text-gray-500 mt-2">Spacious home with office space</p>
            </div>
          </div>

          <div className="w-80 flex-shrink-0 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/house5.jpg"
                alt="3456 Carmel Road"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-2">3456 Carmel Road</h3>
              <p className="text-gray-600 mb-2">Charlotte, NC • 3 Beds • 2 Baths</p>
              <div className="text-blue-900 font-semibold text-xl">$425,000</div>
              <p className="text-sm text-gray-500 mt-2">Charming home in great location</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <button 
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-blue-900 p-3 rounded-full shadow-lg z-10 transition-all"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      
      <button 
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-blue-900 p-3 rounded-full shadow-lg z-10 transition-all"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
} 