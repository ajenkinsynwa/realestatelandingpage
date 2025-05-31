import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner with Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <span className="text-4xl md:text-5xl font-bold text-white tracking-tight font-playfair">Dana Jenkins</span>
              <span className="text-white/80 text-sm">Broker • Realtor®</span>
            </div>
            <nav className="hidden md:flex space-x-8 text-white font-medium text-base">
              <a href="#" className="hover:text-blue-200 transition">Home</a>
              <a href="#listings" className="hover:text-blue-200 transition">Listings</a>
              <a href="#about" className="hover:text-blue-200 transition">About</a>
              <a href="#contact" className="hover:text-blue-200 transition">Contact</a>
            </nav>
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-playfair">Find Your Dream Home</h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Specializing in Charlotte, NC and surrounding areas. Let me help you find your perfect home.
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-blue-900 px-6 py-2 rounded-full shadow-lg hover:bg-blue-50 transition font-semibold text-base w-fit"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Add padding to account for fixed header */}
      <div className="pt-20">
        {/* About Me Section */}
        <section id="about" className="py-20 bg-white">
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
                      <div className="text-3xl font-bold text-blue-900">15+</div>
                      <div className="text-sm text-gray-600">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-900">100+</div>
                      <div className="text-sm text-gray-600">Homes Sold</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-blue-900 font-playfair">A little bit about me...</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Driven by a genuine passion for assisting others, I find immense fulfillment in guiding individuals and families through the exciting journey of finding their dream home. Whether it's matching them with the perfect property or helping them envision the potential of a space, I thrive on making their real estate aspirations a reality.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  With a decade of living in the vibrant community of Charlotte, I bring a unique blend of expertise to the table. With over 15 years immersed in customer service and interior design, I've honed my skills in understanding clients' needs and crafting spaces that resonate with them on a personal level.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Beyond the confines of the real estate world, I find solace and inspiration in the great outdoors. From exploring the scenic beauty of Charlotte's parks to embarking on outdoor adventures with my husband and our spirited 8-year-old daughter, I cherish the moments spent surrounded by nature and loved ones.
                </p>
                <div className="pt-4">
                  <a
                    href="#contact"
                    className="inline-block bg-blue-900 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-800 transition font-semibold text-lg"
                  >
                    Let's Work Together
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Previously Sold Properties Section */}
        <section id="listings" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-semibold text-blue-900 mb-8 font-playfair">LISTINGS YOU'LL LOVE</h2>
            <div className="relative">
              <div className="overflow-x-auto pb-6 scrollbar-hide">
                <div className="flex space-x-6 min-w-max">
                  {/* Property Cards */}
                  <div className="w-80 flex-shrink-0 bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src="/house1.jpg"
                        alt="Luxury Home"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-blue-900 mb-2">1115 Maremont Court</h3>
                      <p className="text-gray-600 mb-2">Matthews, NC • 4 Beds • 3 Baths</p>
                      <div className="text-blue-900 font-semibold text-xl">$925,000</div>
                    </div>
                  </div>
                  {/* Add more property cards here */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-blue-900 text-white">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold mb-6 font-playfair">Let's Connect</h2>
            <p className="mb-8 text-lg">Ready to start your journey? Fill out the form below and I'll get back to you shortly.</p>
            
            <form 
              action="mailto:dana@tradetryonrealty.com"
              method="GET"
              className="space-y-4 text-left"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="subject"
                  placeholder="Your name"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  name="body"
                  rows={4}
                  placeholder="How can I help you?"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
              >
                Send Message
              </button>
            </form>

            <div className="mt-12 text-white/80">
              <p>Trade & Tryon Realty</p>
              <p>License ID: C29221</p>
              <p>1213 W Morehead St, Fl 5</p>
              <p>Charlotte, NC 28208</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
