import { FaGraduationCap } from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';
import { BsBullseye } from 'react-icons/bs';

const Features = () => {
  return (
    <section className="bg-[#0e131b] py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
        {/* Feature 1 */}
        <div className="flex flex-col items-center">
          <FaGraduationCap className="text-4xl mb-3 text-white" />
          <h3 className="text-lg font-semibold text-yellow-400">+200 courses</h3>
          <p className="text-gray-400 text-sm mt-1">Explore a variety of fresh topics</p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center">
          <GiTeacher className="text-4xl mb-3 text-white" />
          <h3 className="text-lg font-semibold text-yellow-400">Expert teachers</h3>
          <p className="text-gray-400 text-sm mt-1">Find the right instructor for you</p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center">
          <BsBullseye className="text-4xl mb-3 text-white" />
          <h3 className="text-lg font-semibold text-yellow-400">Focus on target</h3>
          <p className="text-gray-400 text-sm mt-1">Increase your personal expertise</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
