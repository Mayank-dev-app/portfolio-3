import { Link } from 'react-router-dom';
import myImage from './image/myImage.jpg'
import { FaReact, FaNodeJs, FaJs, FaCss3Alt, FaDatabase } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter';
import { motion } from "framer-motion";
import images from './image/image';

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b  flex flex-col items-center justify-center gap-10 text-white px-6 mt-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
            
        <div className='flex flex-col items-center justify-center gap-10 lg:flex-row'>
          <div className='text-center max-w-2xl'>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white">
              {' '}
              <span className="text-orange-400">
                <Typewriter
                  words={['Mayank', 'Mayank Sharma']}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={70}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300">I Have a good knowledge in <span className="text-blue-400 font-semibold">React.js</span> and  <span className="text-green-400 font-semibold"> Node.js</span></p>
            <button className='px-6 py-2 mt-4 bg-indigo-600 font-bold text-[20px] rounded-xl shadow-2xl animate-bounce cursor-pointer '>
             <a href={images.mayankPDF} target="_blank" rel="noopener noreferrer">Download Resume</a>
            </button>
          </div>

          <img src={myImage} alt="My  Image" className="w-52 h-52 rounded-full object-cover shadow-xl border-4 border-indigo-500
            lg:w-100 lg:h-100 lg:mt-10 motion-safe:animate-spin " />

        </div>

        <motion.section className="py-6 bg-transparent text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>

          <h1 className="text-4xl font-bold mb-6 text-orange-400">Skills</h1>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-indigo-600 rounded-full text-lg shadow-md hover:bg-indigo-700 transition">
              <FaReact size={20} className="text-cyan-300" />
              React.js
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-green-600 rounded-full text-lg shadow-md hover:bg-green-700 transition">
              <FaNodeJs size={20} className="text-lime-300" />
              Node.js
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-yellow-600 rounded-full text-lg shadow-md hover:bg-yellow-700 transition">
              <FaJs size={20} className="text-black" />
              JavaScript
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-full text-lg shadow-md hover:bg-blue-700 transition">
              <FaCss3Alt size={20} className="text-white" />
              Tailwind CSS
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-red-600 rounded-full text-lg shadow-md hover:bg-red-700 transition">
              <FaDatabase size={20} className="text-white" />
              MongoDB
            </div>
          </div>
        </motion.section>

        <section className='bg-transparent py-6 lg:hidden'>
          <h1 className='text-orange-500 text-4xl text-center font-bold'>About Me</h1>
          <p>Hello I'm <span className='text-indigo-500 font-semibold'>Mayank Sharma</span>, a passionate and dedicated Full Stack Web Developer with a strong foundation in <span className="text-blue-400 font-semibold">React.js</span> and <span className="text-green-400 font-semibold">Node.js</span>. I love building responsive, scalable, and user-friendly web applications.</p>
          <p>I'm currently pursuing my Bachelor's in Computer Application and constantly learning new technologies to improve my skills. My goal is to create impactful software that solves real-world problems while keeping performance and user experience in focus.</p>
        </section>

        <section className="py-12 px-6 bg-gray-900 text-white text-center">
          <h1 className="text-4xl font-bold mb-8 text-orange-400">Projects</h1>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>

            {/* Projects Card 1*/}
            <div className='bg-gray-800 rounded-2xl  shadow-2xl p-4 '>
              <h1 className="text-2xl font-semibold mb-2 text-green-400">Personal Dashboard App</h1>
              <p className='font-semibold text-gray-300 mb-4'>A full-stack MERN personal dashboard application with user login, logout, create, update and more features.</p>
              <button className="text-blue-400 underline hover:text-blue-500 cursor-pointer"><Link to='/projectes' >View Project</Link></button>
            </div>

            {/* Project Card 2 */}
            <div className='bg-gray-800 rounded-2xl  shadow-2xl p-4 '>
              <h1 className="text-2xl font-semibold mb-2 text-orange-400 ">Reastaurent App</h1>
              <p className='font-semibold text-gray-300 mb-4'>A full-stack MERN Reastaurent app with user login, logout, create, update and more features.</p>
              <button className="text-blue-400 underline hover:text-blue-500 cursor-pointer"><Link to='/projectes' >View Project</Link></button>
            </div>


            {/* Project Card 3 */}
            <div className='bg-gray-800 rounded-2xl  shadow-2xl p-4 '>
              <h1 className="text-2xl font-semibold mb-2 text-indigo-400">PortFolio App</h1>
              <p className='font-semibold text-gray-300 mb-4'>A personal portfolio site built with React.js and Tailwind CSS showcasing my skills, projects, and resume.</p>
              <button className="text-blue-400 underline hover:text-blue-500 cursor-pointer"><Link to='/projectes' >View Project</Link></button>
            </div>
          </div>

          {/* View More Projects Button */}
          <div className="mt-10 cursor-pointer">
            <Link to="/projectes" className="text-blue-400 underline hover:text-blue-500 text-lg font-medium">
              View More Projects
            </Link>
          </div>
        </section>

      </div>
    </>
  );
};

export default Home;


