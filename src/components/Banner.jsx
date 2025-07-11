const Banner = () => {
  return (
    <section className="relative h-[500px]  text-white py-20 px-4 lg:px-16 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://png.pngtree.com/background/20250103/original/pngtree-contemporary-white-school-classroom-with-an-empty-interior-rendered-in-3d-picture-image_11966050.jpg')",
        }}
      ></div>

      {/* Purple overlay */}
      <div className="absolute inset-0 bg-purple-900 opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto mt-10 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-8 uppercase">
            Book Your Ideal College
        </h1>
        <p className="text-lg md:text-xl mb-8">
          EduHub helps you explore, compare, and reserve top colleges with ease.
        </p>

        {/* Joined Search Bar */}
        <div className="flex w-full max-w-xl mx-auto shadow-lg">
          <input
            type="text"
            placeholder="Search for a college..."
            className="w-full px-4 py-3 text-gray-700 bg-white rounded-l-md focus:outline-none"
          />
          <button className="px-6 py-3 bg-[#92278F] text-white font-semibold rounded-r-md hover:bg-yellow-500 transition">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
