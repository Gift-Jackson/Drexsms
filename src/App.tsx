import { Route, Routes } from "react-router-dom";
import Layout from "./Components/LandingPage/Layout";
import { useEffect, lazy, Suspense } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Loader from "./Components/Global/Loader";
import { Toaster } from "react-hot-toast";

const Home = lazy(() => import("./Components/LandingPage/Pages/Home"));
const About = lazy(() => import("./Components/LandingPage/Pages/About"));
const Contact = lazy(() => import("./Components/LandingPage/Pages/Contact"));
const Notfound = lazy(() => import("./Components/Global/Notfound"));

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Toaster position="top-center" />
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contact />} />
          </Route>
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
