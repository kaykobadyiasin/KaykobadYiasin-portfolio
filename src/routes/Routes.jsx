import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/About/About";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Skills from "../Pages/Skills/Skills";
import Testimonial from "../Pages/Testimonial/Testimonial";
import Contact from "../Pages/Contact/Contact";

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'about',
            element: <About></About>
        },
        {
            path: 'portfolio',
            element: <Portfolio></Portfolio>
        },
        {
            path: 'skills',
            element: <Skills></Skills>
        },
        {
            path: 'testimonial',
            element: <Testimonial></Testimonial>
        },
        {
            path: 'contact',
            element: <Contact></Contact>
        }
      ]
    },
  ]);

export default Routes;