const newsData = [
  {
    id: 1,
    title: 'Pri oportere scribentur eu',
    author: 'MARK TWAIN',
    date: '20.11.2017',
    desc:
      'Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius esse ullum vidisse....',
    img: 'https://www.ansonika.com/udema/img/news_home_1.jpg',
  },
  {
    id: 2,
    title: 'Duo eius postea suscipit ad',
    author: 'JHON DOE',
    date: '20.11.2017',
    desc:
      'Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius esse ullum vidisse....',
    img: 'https://www.ansonika.com/udema/img/news_home_4.jpg',
  },
  {
    id: 3,
    title: 'Elitr mandamus cu has',
    author: 'LUCA ROBINSON',
    date: '20.11.2017',
    desc:
      'Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius esse ullum vidisse....',
    img: 'https://www.ansonika.com/udema/img/news_home_3.jpg',
  },
  {
    id: 4,
    title: 'Id est adhuc ignota delenit',
    author: 'PAULA RODRIGEZ',
    date: '20.11.2017',
    desc:
      'Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius esse ullum vidisse....',
    img: 'https://www.ansonika.com/udema/img/news_home_2.jpg',
  },
];

const News = () => {
  return (
    <section className="py-16 px-4 md:px-16 bg-purple-50 text-gray-700">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-purple-500 uppercase">News and Events</h2>
        <p className="text-gray-500 text-xl mt-2">
          Cum doctus civibus efficiantur in imperdiet deterruisset.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {newsData.map((item) => (
          <div key={item.id} className="flex gap-4 flex-col md:flex-row">
            <div className="relative min-w-[200px]">
              <img
                src={item.img}
                alt={item.title}
                className="w-[200px] h-[150px] object-cover rounded-md"
              />
              <div className="absolute top-0 right-0 bg-yellow-400 text-center text-white text-lg p-4  font-bold">
                <p className="leading-none ">28</p>
                <p className="leading-none">Dec</p>
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase font-medium">
                {item.author} - {item.date}
              </p>
              <h4 className="font-bold text-lg text-gray-400 mt-1">
                {item.title}
              </h4>
              <p className="text-md font-semibold mt-1 text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm hover:bg-blue-700 transition">
          View all news
        </button>
      </div>
    </section>
  );
};

export default News;
