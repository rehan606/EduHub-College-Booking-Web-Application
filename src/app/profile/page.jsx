const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6 sm:p-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Profile Image */}
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-purple-500 shadow-md">
            <img
              src="https://i.pravatar.cc/300"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex-1 space-y-3 text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-800 uppercase">Rehan Khan</h2>
            <p className="text-blue-600 font-medium">Front-End Developer</p>
            <p className="text-gray-600">
              Passionate about building user-friendly and modern web applications. 
              Skilled in HTML, CSS, JavaScript, and React. Constantly learning new tech.
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="font-medium">Email:</span> rehan@email.com
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Phone:</span> +8801XXXXXXXXX
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Location:</span> Chattogram, Bangladesh
              </div>
            </div>

            {/* Socials */}
            <div className="flex justify-center md:justify-start gap-4 mt-5">
              <a href="https://github.com/rehan606" target="_blank" className="text-gray-500 hover:text-black text-xl">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/rehan" target="_blank" className="text-blue-600 hover:text-blue-800 text-xl">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-600 text-xl">
                <i className="fab fa-instagram"></i>
              </a>
            </div>

            {/* Button */}
            <div className="mt-6">
              <button className="w-full md:w-auto px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-yellow-600 transition">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
