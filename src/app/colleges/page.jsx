'use client'; // For Next.js App Router if needed

import { FaStar } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const colleges = [
  {
    id: 1,
    name: 'Oxford University',
    image: 'https://i.ibb.co/fY10Dyz/college-1.jpg',
    rating: 4.9,
    admissionDate: '2025-08-15',
    researchCount: 78,
  },
  {
    id: 2,
    name: 'Harvard College',
    image: 'https://i.ibb.co/yXmqMSk/college-2.jpg',
    rating: 4.8,
    admissionDate: '2025-09-01',
    researchCount: 92,
  },
  {
    id: 3,
    name: 'Stanford College',
    image: 'https://i.ibb.co/GtP5y9n/college-3.jpg',
    rating: 4.7,
    admissionDate: '2025-07-20',
    researchCount: 105,
  },
  {
    id: 4,
    name: 'MIT',
    image: 'https://i.ibb.co/x5brtzF/college-4.jpg',
    rating: 4.95,
    admissionDate: '2025-08-01',
    researchCount: 134,
  },
  {
    id: 5,
    name: 'Yale University',
    image: 'https://i.ibb.co/t8XVGSK/college-5.jpg',
    rating: 4.6,
    admissionDate: '2025-07-28',
    researchCount: 67,
  },
  {
    id: 6,
    name: 'Cambridge University',
    image: 'https://i.ibb.co/S0kMd0L/college-6.jpg',
    rating: 4.85,
    admissionDate: '2025-09-10',
    researchCount: 89,
  },
  {
    id: 7,
    name: 'Princeton College',
    image: 'https://i.ibb.co/vhQZmxH/college-7.jpg',
    rating: 4.75,
    admissionDate: '2025-08-22',
    researchCount: 101,
  },
  {
    id: 8,
    name: 'Duke University',
    image: 'https://i.ibb.co/wQ9qx0M/college-8.jpg',
    rating: 4.65,
    admissionDate: '2025-07-18',
    researchCount: 73,
  },
];

const Colleges = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner */}
      <div className="bg-gradient-to-r from-purple-800 to-pink-600 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Explore Top Colleges</h1>
        <p className="text-lg text-white/90">Discover admission dates, ratings, and research excellence.</p>
      </div>

      {/* Colleges Grid */}
      <div className="max-w-7xl mx-auto py-12 px-4 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {colleges.map((college) => (
            <div
              key={college.id}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-300"
            >
              <img src={college.image} alt={college.name} className="w-full h-48 object-cover" />

              <div className="p-4 space-y-2">
                <h2 className="text-xl font-semibold text-gray-800">{college.name}</h2>

                <div className="flex items-center text-yellow-500">
                  <FaStar className="mr-1" /> <span>{college.rating}</span>
                </div>

                <p className="text-sm text-gray-500">
                  <span className="font-medium text-gray-700">Admission Date:</span>{' '}
                  {college.admissionDate}
                </p>

                <p className="text-sm text-gray-500">
                  <span className="font-medium text-gray-700">Research Works:</span>{' '}
                  {college.researchCount}
                </p>

                <button
                  onClick={() => router.push(`/college/${college.id}`)}
                  className="mt-3 inline-block w-full text-center bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-medium transition"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Colleges;
