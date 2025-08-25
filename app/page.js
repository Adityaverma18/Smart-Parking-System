"use client";
import Navbar from '../components/Navbar';
import ParkingMap from '../components/ParkingMap';


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="max-w-7xl mx-auto py-10">
        {/* --- Hero Section Start --- */}
        <section className="flex flex-col md:flex-row items-center justify-between bg-gray-800 rounded-2xl shadow-2xl px-10 py-16 mb-12">

          <div className="flex-1">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-gray-900 leading-tight">
              Find & Reserve Parking Effortlessly
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 mb-8">
              Discover available parking lots, view analytics, and manage your parking with ease.
            </p>
            <a
              href="/parking-lots"
              className="inline-block px-8 py-4 bg-cyan-700 text-white rounded-lg hover:bg-cyan-800 transition font-bold text-lg shadow"
            >
              View Parking Lots
            </a>
          </div>
          {/* Optional: Hero Image */}
          <div className="flex-1 mt-12 md:mt-0 md:ml-12 flex justify-center">
            <img
              src="/car-parking1.jpg"
              alt="Parking illustration"
              className="w-200 h-auto rounded-xl shadow-lg"
            />
          </div>
        </section>
        {/* --- Hero Section End --- */}

        <h2 className="text-2xl font-bold mb-4">Parking Map</h2>
        <ParkingMap />
        
      </main>
    </div>
  );
}