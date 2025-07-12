import { FaSearch } from 'react-icons/fa';

const images = [
  {
    url: 'https://www.ansonika.com/udema/img/gallery/pic_10.jpg',
    title: 'Science Building',
  },
  {
    url: 'https://www.ansonika.com/udema/img/gallery/pic_6.jpg',
    title: 'Computer Lab',
  },
  {
    url: 'https://www.ansonika.com/udema/img/gallery/pic_9.jpg',
    title: 'Library Area',
  },
  {
    url: 'https://www.ansonika.com/udema/img/gallery/pic_4.jpg',
    title: 'Main Campus',
  },
  {
    url: 'https://www.ansonika.com/udema/img/gallery/pic_5.jpg',
    title: 'Cultural Fest',
  },
  {
    url: 'https://www.ansonika.com/udema/img/gallery/pic_7.jpg',
    title: 'Conference Hall',
  },
  {
    url: 'https://www.ansonika.com/udema/img/gallery/pic_8.jpg',
    title: 'Sports Ground',
  },
  {
    url: 'https://www.ansonika.com/udema/img/gallery/pic_11.jpg',
    title: 'Graduation Day',
  },
];

const Gallery = () => {
  return (
    <section className="w-full py-16 px-4 md:px-16 bg-white ">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-500">Picture Gallery</h2>
        <p className="text-gray-500 mt-2 text-xl">
          Cum doctus civibus efficiantur in imperdiet deterruisset.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 grid-rows-2 gap-0 container mx-auto">
        {images.map((item, index) => (
          <div key={index} className="relative group w-full h-40 sm:h-52 overflow-hidden">
            <img
              src={item.url}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black z-50 bg-opacity-50 opacity-0 group-hover:opacity-50 transition duration-300 flex flex-col items-center justify-center text-white text-center px-2">
              <FaSearch className="text-2xl mb-2" />
              <p className="text-sm font-medium">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
