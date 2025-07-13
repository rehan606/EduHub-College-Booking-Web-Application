// import Link from "next/link";


// const colleges = [
//   {
//     id: '1',
//     name: 'Greenfield University',
//     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxCQ4Igb_4RCm5UUosYRred71-aMHRr-Qtag&s',
//     admissionDates: 'July 15 – August 30',
//     events: 'Science Fair, Cultural Fest',
//     research: '50+ published papers',
//     sports: 'Football, Basketball, Cricket',
//   },
//   {
//     id: '2',
//     name: 'Summit Engineering College',
//     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD7gy4iC_IQf0PPqoJpEZHShARm39aYWYRSg&s',
//     admissionDates: 'June 20 – August 15',
//     events: 'Tech Talks, Hackathons',
//     research: '30+ tech projects',
//     sports: 'Robotics Club, Badminton',
//   },
//   {
//     id: '3',
//     name: 'National Arts & Humanities',
//     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRelnMGrba_oVJgQEwIQQmYvUawP2AFQY27bg&s',
//     admissionDates: 'May 10 – July 25',
//     events: 'Art Expo, Literature Fest',
//     research: '75+ theses and journals',
//     sports: 'Theater, Debate, Tennis',
//   },
// ];

// const CollegeCards = () => {
//   return (
//     <section className="py-16 px-4 md:px-12 bg-gray-50 ">
//       <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
//         Featured Colleges
//       </h2>

//       <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//         {colleges.map((college) => (
//           <div
//             key={college.id}
//             className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition"
//           >
//             <img
//               src={college.image}
//               alt={college.name}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-6 space-y-2">
//               <h3 className="text-xl font-semibold">{college.name}</h3>
//               <p>
//                 <span className="font-medium">Admission Dates:</span>{' '}
//                 {college.admissionDates}
//               </p>
//               <p>
//                 <span className="font-medium">Events:</span> {college.events}
//               </p>
//               <p>
//                 <span className="font-medium">Research:</span> {college.research}
//               </p>
//               <p>
//                 <span className="font-medium">Sports:</span> {college.sports}
//               </p>

//               <Link
//                 href={`/college/${college.id}`}
//                 className="inline-block mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
//               >
//                 Details
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default CollegeCards;


import Link from "next/link";

const colleges = [
  {
    id: '1',
    name: 'Greenfield University',
    image: 'https://wallpapers.com/images/hd/college-background-0x6jn1ekfdotl5wo.jpg',
    admissionDates: 'July 15 – August 30',
    events: 'Science Fair, Cultural Fest',
    research: '50+ published papers',
    sports: 'Football, Basketball, Cricket',
  },
  {
    id: '2',
    name: 'Summit Engineering College',
    image: 'https://png.pngtree.com/thumb_back/fh260/background/20220831/pngtree-modern-college-campus-buildings-educational-application-hall-photo-image_19709694.jpg',
    admissionDates: 'June 20 – August 15',
    events: 'Tech Talks, Hackathons',
    research: '30+ tech projects',
    sports: 'Robotics Club, Badminton',
  },
  {
    id: '3',
    name: 'National Arts & Humanities',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/049/172/328/small_2x/view-of-architecture-of-american-school-building-exterior-concept-free-photo.jpeg',
    admissionDates: 'May 10 – July 25',
    events: 'Art Expo, Literature Fest',
    research: '75+ theses and journals',
    sports: 'Theater, Debate, Tennis',
  },
  {
    id: '4',
    name: 'American Engineering College',
    image: 'https://media.istockphoto.com/id/473668710/photo/the-hill-on-the-university-of-tennessee-campus-in-knoxville.jpg?s=612x612&w=0&k=20&c=ZNWm8z6SssT6d7kfPe3FVsn74eUlDE172BzLD7XG4K0=',
    admissionDates: 'June 20 – August 15',
    events: 'Tech Talks, Hackathons',
    research: '30+ tech projects',
    sports: 'Robotics Club, Badminton',
  },
];

const CollegeCards = () => {
  return (
    <section className="py-16 px-4 md:px-12 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-purple-500 uppercase">College Features</h2>
        <p className="text-gray-500 text-xl mt-2">
          Here is college Features
        </p>
      </div>
      

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {colleges.map((college) => (
          <div
            key={college.id}
            className="bg-white shadow-md hover:shadow-xl rounded-2xl overflow-hidden group transition duration-300"
          >
            <div className="overflow-hidden">
              <img
                src={college.image}
                alt={college.name}
                className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="p-5 flex flex-col h-full">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-600 transition">
                {college.name}
              </h3>
              <p className="text-sm">
                <span className="font-medium">Admission Dates:</span>{' '}
                {college.admissionDates}
              </p>
              <p className="text-sm">
                <span className="font-medium">Events:</span> {college.events}
              </p>
              <p className="text-sm">
                <span className="font-medium">Research:</span> {college.research}
              </p>
              <p className="text-sm mb-4">
                <span className="font-medium">Sports:</span> {college.sports}
              </p>
              
              <Link
                 href={`/college/${college.id}`}
                 className=" w-full inline-block text-center px-4 py-2 bg-purple-600 text-white font-medium rounded-md hover:bg-yellow-500 transition"
               >
                 View Details
               </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CollegeCards;
