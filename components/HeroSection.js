// components/HeroSection.js
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="
        relative
        w-full
        h-[420px] md:h-[520px] lg:h-[600px] xl:h-screen
        flex items-center justify-center
        overflow-hidden
        mt-0
        shadow-xl
        bg-white
      "
      style={{ minHeight: "420px" }} // fallback for small screens
    >
      {/* Background Image */}
      <Image
        src="/parking2.jpg"
        alt="Parking background"
        fill
        className="object-cover z-0"
        priority
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-blue-900/40 to-black/60 z-10" />
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center w-full px-4">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-lg animate-fade-in-up text-center">
          Find & Prebook Your Parking Spot
        </h1>
        <p className="text-base sm:text-lg md:text-2xl mb-8 text-blue-100 drop-shadow text-center max-w-2xl animate-fade-in-up delay-100">
          Hassle-free parking in your city. Reserve in advance and save time.
        </p>
        {/* Email Sign In Form */}
        <form className="flex flex-col md:flex-row gap-4 justify-center items-center bg-white/70 backdrop-blur-md rounded-xl p-4 shadow-2xl max-w-xl w-full animate-fade-in-up delay-200">
          <input
            type="email"
            placeholder="Type your email address"
            className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none text-gray-900 bg-white/80 placeholder-gray-500"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md shadow transition"
          >
            Sign In
          </button>
        </form>
      </div>
      {/* Decorative SVG wave (optional) */}
      <svg className="absolute bottom-0 left-0 w-full h-12 text-white/30 z-20" viewBox="0 0 1440 320">
        <path fill="currentColor" d="M0,224L48,197.3C96,171,192,117,288,117.3C384,117,480,171,576,197.3C672,224,768,224,864,197.3C960,171,1056,117,1152,122.7C1248,128,1344,192,1392,224L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </section>
  );
}