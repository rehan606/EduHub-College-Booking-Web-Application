'use client';

import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const MyCollege = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [reviewText, setReviewText] = useState('');

  // Sample admission info (replace with dynamic data)
  const myCollege = {
    name: 'Oxford University',
    image: 'https://media.istockphoto.com/id/475456898/photo/yale-university-campus.jpg?s=612x612&w=0&k=20&c=Xkl1u3spsr3rSONsGODuwCua6yvcu5CwOGBQ_zZcyps=',
    subject: 'Computer Science',
    candidateName: 'Rehan Khan',
    email: 'rehan@example.com',
    phone: '0123456789',
    address: 'Chattogram, Bangladesh',
    dob: '1999-08-12',
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    console.log('Rating:', rating);
    console.log('Review:', reviewText);
    // Send review to backend here
    setReviewText('');
    setRating(0);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-12">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <img
            src={myCollege.image}
            alt={myCollege.name}
            className="w-full h-60 object-cover rounded-md"
          />

          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-purple-700">{myCollege.name}</h2>
            <p><strong>Candidate:</strong> {myCollege.candidateName}</p>
            <p><strong>Subject:</strong> {myCollege.subject}</p>
            <p><strong>Email:</strong> {myCollege.email}</p>
            <p><strong>Phone:</strong> {myCollege.phone}</p>
            <p><strong>Address:</strong> {myCollege.address}</p>
            <p><strong>Date of Birth:</strong> {myCollege.dob}</p>
          </div>
        </div>

        {/* Review Section */}
        <div className="border-t p-6 bg-gray-50">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Add Your Review</h3>

          <form onSubmit={handleReviewSubmit} className="space-y-4">
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, index) => {
                const starValue = index + 1;
                return (
                  <label key={index}>
                    <input
                      type="radio"
                      name="rating"
                      className="hidden"
                      value={starValue}
                      onClick={() => setRating(starValue)}
                    />
                    <FaStar
                      className={`cursor-pointer text-2xl ${
                        starValue <= (hover || rating) ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                      onMouseEnter={() => setHover(starValue)}
                      onMouseLeave={() => setHover(null)}
                    />
                  </label>
                );
              })}
            </div>

            <textarea
              placeholder="Write your feedback..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-purple-500"
              rows={4}
              required
            ></textarea>

            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md transition font-medium"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyCollege;
