import  images  from './image/image'

const Projects = () => {
  return (
    <div className="min-h-screen text-white px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <p className='text-red-500 text-center italic'>Projects authentication are not working correctly right now.</p>
        <h1 className="text-4xl font-bold mb-4 text-center">Projects</h1>
        <p className="text-lg mb-6 text-center">
          Here are some projects developed by me:
        </p>

        {/* Project 1 */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Personal Dashboard</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <img src={images.noteHome} alt="Login" className="rounded-lg w-full" />
            <img src={images.noteRegister} alt="Login" className="rounded-lg w-full hidden md:block" />
            <img src={images.abc} alt="Home" className="rounded-lg w-full hidden md:block" />
          </div>

          <p className="mb-2">
            This project is built using <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong> for the frontend, along with <strong>Node.js</strong> and <strong>MongoDB</strong> for the backend.
          </p>
          <p className="mb-2">
            One of its main features is <strong>user authentication</strong>. Unauthorized users cannot create notes—only authenticated users have access.
          </p>
          <p>
            Users can perform full <strong>CRUD</strong> (Create, Read, Update, Delete) operations on their notes.
          </p>
          <p className='text-center font-bold text-blue-400 text-2xl '>
            <a href="https://github.com/Mayank-dev-app/PersonalNotes"
              target="_blank"
              rel="noopener noreferrer">Source code</a>
          </p>
          <p className='text-center font-bold text-blue-400 text-2xl animate-bounce'>
            <a href="https://personalnote-rbzo.onrender.com/"
              target="_blank"
              rel="noopener noreferrer">Lime Demo</a>
          </p>
        </div>

        {/* Project 2 */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Reastaurent App</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <img src={images.loginrest} alt="Login" className="rounded-lg w-full" />
            <img src={images.Reasthome} alt="Login" className="rounded-lg w-full hidden md:block" />
            <img src={images.Reastmenu} alt="Home" className="rounded-lg w-full hidden md:block" />
          </div>

          <p className="mb-2">
            This project is built using <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong> for the frontend, along with <strong>Node.js</strong> and <strong>MongoDB</strong> for the backend.
          </p>
          <p className="mb-2">
            The goal was to make restaurent operations degital such as reserver table, order booking, pay bill etc....
          </p>
          <p className="mb-2">
            One of the main features is <strong>Usre Authenticatio</strong> a unauthorize user can not book table, pay bils etc.
          </p>
          <p className="mb-2">
            A user can login using their email Id in vase if user forget their password it can be reset by emailID.
          </p>
          <p className="mb-2">
            For security I use <strong>bcryptjs</strong> to protect user password.
          </p>
          <p>This is my college project my role was <strong className='text-blue-600'>Backemd Developer</strong> in this project.</p>
          <p className='text-center font-bold text-blue-400 text-2xl '>
            <a href="https://github.com/Mayank-dev-app/FinalYearProjectORReastuernt"
              target="_blank"
              rel="noopener noreferrer">Source code</a>
          </p>
          <p className='text-center font-bold text-blue-400 text-2xl animate-bounce'>
            <a href="https://reastuernt.onrender.com/"
              target="_blank"
              rel="noopener noreferrer">Lime Demo</a>
          </p>
          <p className='text-red-500 text-center italic'>For better performance use Laptop or tabs because it is not responsive</p>
        </div>

        {/* Project 3 */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">My PortFolio App</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <img src={images.AboutportFolio} alt="Login" className="rounded-lg w-full hidden md:block" />
            <img src={images.projectPortFolio} alt="Home" className="rounded-lg w-full hidden md:block" />
            <img src={images.ContactportFolio} alt="Projects" className="rounded-lg w-full" />
          </div>

          <p className="mb-2">
            This project is built using <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong> for the frontend, along with <strong>Node.js</strong> and <strong>MongoDB</strong> for the backend.
          </p>
          <p className="mb-2">It have three sections About, Projects and Contact.</p>
          <p className="mb-2">In <strong>About</strong> have some informations about my knowledge and skills.</p>
          <p className="mb-2">In <strong>Projects</strong> have some projects details. There are only two projects <strong>Personal Dashboard</strong> and <strong> Reastaurent App</strong></p>
          <p className="mb-2">In <strong>Contact</strong> have three flelds name, email and message which is used to give some feedback about my work.</p>
          <p className='text-center font-bold text-blue-400 text-2xl '>
            <a href="https://github.com/Mayank-dev-app/Portfolio2"
              target="_blank"
              rel="noopener noreferrer">Source code</a>
          </p>
          <p className='text-center font-bold text-blue-400 text-2xl animate-bounce'>
            <a href="https://portfolio-ennw.onrender.com/"
              target="_blank"
              rel="noopener noreferrer">Lime Demo</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
