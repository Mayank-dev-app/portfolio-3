
import { NavLink ,Link} from 'react-router-dom'
import { useState } from 'react'
import { NameContext } from './Context/UserName';
import { useContext } from 'react';



const NavBar = () => {

    const [display, setDisplay] = useState(false);
    const handlebutton = () => {
        setDisplay(!display);
    }
    const { formValue, islogedIn, setLoggedIn, setformValues } = useContext(NameContext);

    return (
        <div>
            <header>
                <nav className='h-10 flex justify-around text-white font-serif flex-row items-center'>
                    <h1 className='pl-5 text-3xl font-bold text-red-500 italic'>Mayan<span className='text-blue-500'>K.</span></h1>

                    <button onClick={handlebutton} className='lg:hidden relative text-3xl focus:outline-none'>
                        ☰
                    </button>

                    <div className={`rounded-xl absolute right-0 top-10 w-full bg-indigo-600 
                     flex flex-col items-center gap-3 font-bold pb-3 z-10
                            lg:flex lg:static lg:flex-row lg:justify-around lg:bg-transparent lg:rounded-none lg:mt-5  lg:w-auto lg:gap-5
                            lg:text-[18px] 
                       ${display ? 'block' : 'hidden'}`}>
                        <ul className='flex flex-col items-center text-xl gap-3 md:flex-row md:gap-5'>
                            <li>
                                <NavLink to="/" className={({ isActive }) =>
                                    `transition-colors duration-700 ${isActive ? 'text-orange-500' : 'hover:text-orange-400'
                                    }`
                                }>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/projects" className={({ isActive }) =>
                                    `transition-colors duration-700 ${isActive ? 'text-orange-500' : 'hover:text-orange-400'
                                    }`
                                }>Projects</NavLink>
                            </li>
                        </ul>

                        {islogedIn ? (
                            <div className="flex items-center gap-3 text-xl">
                                <p className="text-orange-400 font-bold">{formValue.Name}</p>

                                {/* Logout Button (manual state reset) */}
                                <button
                                    onClick={() => {
                                       localStorage.removeItem("token"); 
                                        setLoggedIn(false);
                                        setformValues({
                                            Name: '',
                                            Proffession: '',
                                            Email: '',
                                            Password: '',
                                        });
                                    }}
                                    className="border px-4 py-1 rounded-2xl bg-red-500 text-white hover:bg-red-600 cursor-pointer"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : <div className='flex items-center gap-3 mt-2 text-xl'>
                            <button className='border rounded-2xl 
                             px-6 py-1 bg-orange-500 cursor-pointer'>
                                <NavLink to="/signup" className={({ isActive }) =>
                                    ` ${isActive ? 'bg-orange-600' : ""
                                    }`
                                }>Signup</NavLink>
                            </button>
                        </div>
                        }

                    </div>
                </nav>
            </header>
        </div>
    )
}

export default NavBar
