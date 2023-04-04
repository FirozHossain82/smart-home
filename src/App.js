import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {  RouterProvider } from "react-router-dom";
import router from "./Utilities/routes";


function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return <RouterProvider router={router} />
}

export default App;
