'use client';

import { Swiper, SwiperSlide} from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaQuoteLeft } from 'react-icons/fa';

const feedbacks = [
  {
    name: 'John Doe',
    college: 'Oxford University',
    review:
      'EduHub made my college search process super smooth! I found the perfect college and the admission was hassle-free.',
  },
  {
    name: 'Maria Khan',
    college: 'Harvard College',
    review:
      'The review section helped me a lot. I was able to choose a great college based on feedback from others.',
  },
  {
    name: 'Samuel Roy',
    college: 'Stanford College',
    review:
      'The booking process is well-designed. Super intuitive and responsive layout!',
  },
];

const Reviews = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-600">Student Reviews</h2>
        <p className="text-gray-500 text-xl">What our students are saying</p>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
      >
        {feedbacks.map((review, idx) => (
          <SwiperSlide key={idx}>
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 text-center">
              <FaQuoteLeft className="text-purple-600 text-4xl mx-auto mb-4" />
              <p className="text-lg text-gray-700 mb-4">"{review.review}"</p>
              <h4 className="text-lg font-bold text-gray-800">{review.name}</h4>
              <p className="text-sm text-gray-500">{review.college}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Reviews;
