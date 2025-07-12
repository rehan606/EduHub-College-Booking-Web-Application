import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-4 relative overflow-hidden">
      {/* Animated Background Blob */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30">
        <svg className="w-full h-full animate-pulse" viewBox="0 0 800 800">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
          <circle cx="400" cy="400" r="300" fill="url(#gradient)" />
        </svg>
      </div>

      {/* 404 Content */}
      <h1 className="text-9xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
        404
      </h1>
      <p className="text-2xl mt-4 font-semibold">Oops! Page not found.</p>
      <p className="text-gray-400 mt-2 text-center max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-6 inline-block bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
