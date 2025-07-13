import { useState } from "react"
import { NameContext } from "../Context/UserName";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateAccount = () => {
    const { formValue, setformValues, setLogedIn } = useContext(NameContext);
    const [submitting, setSubmitting] = useState(false);
    const navigate = useNavigate();


    const handleForm = async (e) => {
        const { name, value } = e.target;
        setformValues((prev) => ({ ...prev, [name]: value }));
    }

    const handlsubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            const res = await axios.post('http://localhost:8000/user/createAccount', formValue);
            localStorage.setItem("token", res.data.token);
            setLogedIn(true);
            navigate("/");
        } catch (error) {
            console.log("the Error in Submitting: ", error);
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <div className='min-h-screen text-white flex justify-center items-center'>
            <div className='flex flex-nowrap  flex-col text-center p-4 shadow-2xl rounded-2xl shadow-black '>
                <h1 className='text-4xl text-orange-500 font-bold font-serif py-3'>Create Account</h1>
                <form action=""
                    onSubmit={handlsubmit}
                    className='flex flex-col flex-nowrap gap-8'
                >
                    <input type="text" name="Name"
                        placeholder='Name'
                        value={formValue.Name}
                        onChange={handleForm}
                        className="border outline-none h-12 font-serif px-3 text-xl rounded-xl text-gray-400 bg-transparent
                        transition-all duration-500 ease-in-out  focus:shadow-lg focus:scale-105"
                    />

                    <input type="text" name="Proffession"
                        placeholder='Proffession'
                        value={formValue.Proffession}
                        onChange={handleForm}
                        className="border outline-none h-12 font-serif px-3 text-xl rounded-xl text-gray-400 bg-transparent
                        transition-all duration-500 ease-in-out  focus:shadow-lg focus:scale-105"/>

                    <input type="email" name="Email"
                        placeholder='Email'
                        value={formValue.Email}
                        onChange={handleForm}
                        className="border outline-none h-12 font-serif px-3 text-xl rounded-xl text-gray-400 bg-transparent
                        transition-all duration-500 ease-in-out  focus:shadow-lg focus:scale-105"/>

                    <input type="password" name="Password" placeholder='Password'
                        value={formValue.Password}
                        onChange={handleForm}
                        className="border outline-none h-12 font-serif px-3 text-xl rounded-xl text-gray-400 bg-transparent
                        transition-all duration-500 ease-in-out  focus:shadow-lg focus:scale-105" />

                    <button
                        type="submit"
                        disabled={submitting}
                        className={`border h-12 font-serif px-3 text-xl rounded-xl text-white bg-indigo-500
                        transition-all duration-500 ease-in-out hover:bg-indigo-600
                        ${submitting ? "opacity-50 cursor-not-allowed" : "focus:shadow-lg focus:scale-105"}`}
                    >
                        {submitting ? "Submitting.." : "Submit"}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateAccount