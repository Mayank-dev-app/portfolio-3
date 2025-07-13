import { Outlet, Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./components/NavPages.jsx/Home"
import Footer from "./components/NavPages.jsx/Footer"
import Projects from "./components/NavPages.jsx/Projectes"
// import Login from "./components/NavPages.jsx/Login"
import CreateAccount from "./components/NavPages.jsx/CreateAccount"
import Protected from "./components/Context/Protected"



function App() {
  const Layout = () => (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Protected><Projects /></Protected>} />
        </Route>

        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/signup" element={<CreateAccount />} />
      </Routes>
    </>
  )
}

export default App
