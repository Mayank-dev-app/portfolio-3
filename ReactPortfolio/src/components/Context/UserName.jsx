import { createContext, useState, useEffect } from "react";

export const NameContext = createContext();

export const NameProvider = ({ children }) => {
    const [formValue, setformValues] = useState({
        Name: '',
        Proffession: '',
        Email: '',
        Password: '',
    });

    const [islogedIn, setLogedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setLogedIn(true);
        }
    }, []);

    return (
        <NameContext.Provider value={{ formValue, setformValues, islogedIn, setLogedIn }}>
            {children}
        </NameContext.Provider>
    );
};
