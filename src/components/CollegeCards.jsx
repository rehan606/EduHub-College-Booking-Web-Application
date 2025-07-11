import Link from "next/link";


const colleges = [
  {
    id: '1',
    name: 'Greenfield University',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxCQ4Igb_4RCm5UUosYRred71-aMHRr-Qtag&s',
    admissionDates: 'July 15 – August 30',
    events: 'Science Fair, Cultural Fest',
    research: '50+ published papers',
    sports: 'Football, Basketball, Cricket',
  },
  {
    id: '2',
    name: 'Summit Engineering College',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD7gy4iC_IQf0PPqoJpEZHShARm39aYWYRSg&s',
    admissionDates: 'June 20 – August 15',
    events: 'Tech Talks, Hackathons',
    research: '30+ tech projects',
    sports: 'Robotics Club, Badminton',
  },
  {
    id: '3',
    name: 'National Arts & Humanities',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRelnMGrba_oVJgQEwIQQmYvUawP2AFQY27bg&s',
    admissionDates: 'May 10 – July 25',
    events: 'Art Expo, Literature Fest',
    research: '75+ theses and journals',
    sports: 'Theater, Debate, Tennis',
  },
];

const CollegeCards = () => {
  return (
    <section className="py-16 px-4 md:px-12 bg-gray-50 ">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Featured Colleges
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {colleges.map((college) => (
          <div
            key={college.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition"
          >
            <img
              src={college.image}
              alt={college.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-xl font-semibold">{college.name}</h3>
              <p>
                <span className="font-medium">Admission Dates:</span>{' '}
                {college.admissionDates}
              </p>
              <p>
                <span className="font-medium">Events:</span> {college.events}
              </p>
              <p>
                <span className="font-medium">Research:</span> {college.research}
              </p>
              <p>
                <span className="font-medium">Sports:</span> {college.sports}
              </p>

              <Link
                href={`/college/${college.id}`}
                className="inline-block mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CollegeCards;
