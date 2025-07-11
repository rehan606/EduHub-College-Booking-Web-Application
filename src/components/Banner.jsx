const Banner = () => {
  return (
    <section className="relative bg-gradient-to-br h-[500px] from-blue-500 to-indigo-900 text-white py-20 px-4 lg:px-16">
      {/* Optional background image overlay */}
            {/* <div className="absolute inset-0 bg-[url('https://w0.peakpx.com/wallpaper/146/911/HD-wallpaper-blue-abstract-waves-creative-blue-wavy-background-blue-backgrounds-abstract-waves-waves-textures.jpg')] bg-cover bg-center opacity-20"></div> */}

            <div className="relative z-10 max-w-4xl mx-auto  flex flex-col items-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-8">Discover & Book Your Ideal College</h1>
                <p className="text-lg md:text-xl mb-8">
                    EduHub helps you explore, compare, and reserve top colleges with ease.
                    </p>

                    {/* Search Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
                    <input
                        type="text"
                        placeholder="Search for a college..."
                        className="w-full  sm:w-80 px-4 py-3 rounded-lg text-white border border-white focus:outline-none shadow-lg"
                    />
                    <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition">
                        Search
                    </button>
                </div>
            </div>
    </section>
  );
};

export default Banner;
