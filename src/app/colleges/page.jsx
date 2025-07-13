'use client'; // For Next.js App Router if needed

import { FaStar } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const colleges = [
  {
    id: 1,
    name: 'Oxford University',
    image: 'https://t4.ftcdn.net/jpg/03/00/77/75/360_F_300777542_tjLORGrPCEPkRmiaMFNaGz4sTgEwdEjM.jpg',
    rating: 4.9,
    admissionDate: '2025-08-15',
    researchCount: 78,
  },
  {
    id: 2,
    name: 'Harvard College',
    image: 'https://media.gettyimages.com/id/1224254349/video/harvard-university.jpg?s=640x640&k=20&c=pnW5WrjPiHz_-9X-wI9JFsw_HHNpBlIv4pX88iviIEI=',
    rating: 4.8,
    admissionDate: '2025-09-01',
    researchCount: 92,
  },
  {
    id: 3,
    name: 'Stanford College',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Stanford_University_Main_Quad_%28cropped%29.jpg',
    rating: 4.7,
    admissionDate: '2025-07-20',
    researchCount: 105,
  },
  {
    id: 4,
    name: 'MIT',
    image: 'https://e1.pxfuel.com/desktop-wallpaper/650/41/desktop-wallpaper-stanford-university-top-beautiful-stanford-university-stanford-university.jpg',
    rating: 4.95,
    admissionDate: '2025-08-01',
    researchCount: 134,
  },
  {
    id: 5,
    name: 'Yale University',
    image: 'https://media.istockphoto.com/id/475456898/photo/yale-university-campus.jpg?s=612x612&w=0&k=20&c=Xkl1u3spsr3rSONsGODuwCua6yvcu5CwOGBQ_zZcyps=',
    rating: 4.6,
    admissionDate: '2025-07-28',
    researchCount: 67,
  },
  {
    id: 6,
    name: 'Cambridge University',
    image: 'https://images.unsplash.com/photo-1623632306901-e509641e7191?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dW5pdmVyc2l0eSUyMG9mJTIwY2FtYnJpZGdlfGVufDB8fDB8fHww',
    rating: 4.85,
    admissionDate: '2025-09-10',
    researchCount: 89,
  },
  {
    id: 7,
    name: 'Princeton College',
    image: 'https://c1.wallpaperflare.com/preview/137/458/362/princeton-new-jersey-nassau-hall-university.jpg',
    rating: 4.75,
    admissionDate: '2025-08-22',
    researchCount: 101,
  },
  {
    id: 8,
    name: 'Duke University',
    image: 'https://media.istockphoto.com/id/1333637399/photo/duke-university-chapel-building-and-courtyard.jpg?s=612x612&w=0&k=20&c=rY2NSBALTl8zAZRyR9zbo4Ws4PU-ZCL1yuJ_gDQ9fJ0=',
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
