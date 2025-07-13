'use client'; // Only if using Next.js App Router

import { useState } from 'react';

const colleges = [
  'Oxford University',
  'Harvard College',
  'Stanford College',
  'MIT',
  'Cambridge University',
];

const Admission = () => {
  const [selectedCollege, setSelectedCollege] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    phone: '',
    address: '',
    dob: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', { ...formData, college: selectedCollege });

    // TODO: Add your API call to save the data to DB
    // Example: await fetch('/api/admission', { method: 'POST', body: formData })

    alert('Admission Form Submitted!');
    setSelectedCollege('');
    setFormData({
      name: '',
      subject: '',
      email: '',
      phone: '',
      address: '',
      dob: '',
      image: null,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-16">
      <h1 className="text-3xl font-bold text-center text-gray-600 uppercase mb-6">Apply for Admission</h1>

      {/* College list */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {colleges.map((college, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedCollege(college)}
            className={`px-5 py-2 rounded-full text-white transition ${
              selectedCollege === college ? 'bg-purple-700' : 'bg-purple-500 hover:bg-purple-600'
            }`}
          >
            {college}
          </button>
        ))}
      </div>

      {/* Admission form */}
      {selectedCollege && (
        <form
          onSubmit={handleSubmit}
          className="bg-white max-w-3xl mx-auto shadow-md rounded-lg p-6 space-y-4"
        >
          <h2 className="text-xl font-semibold mb-4 text-purple-600">
            Admission Form for {selectedCollege}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Candidate Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border p-3 rounded"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="border p-3 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border p-3 rounded"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="border p-3 rounded"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
              className="border p-3 rounded md:col-span-2"
            />
            <input
              type="date"
              name="dob"
              placeholder="Date of Birth"
              value={formData.dob}
              onChange={handleChange}
              required
              className="border p-3 rounded"
            />
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              required
              className="border p-3 rounded"
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded font-semibold"
          >
            Submit Application
          </button>
        </form>
      )}
    </div>
  );
};

export default Admission;
