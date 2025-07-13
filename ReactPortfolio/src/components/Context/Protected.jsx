import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Protected = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("please create your account to access this page");
      navigate("/signup");
    }
  }, []);

  return <>{children}</>;
};

export default Protected;
