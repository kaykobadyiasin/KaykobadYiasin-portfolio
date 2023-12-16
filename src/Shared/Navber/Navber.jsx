
import { Link, NavLink } from "react-router-dom";
import resume from '../../assets/Resume-of-MD-Kaykobad-Yiasin-Khan.pdf'
import { Fade, Slide } from "react-awesome-reveal";

const Navber = () => {


    const navItems = <>
        <li><NavLink to='/' className="hover:text-[#FFA801]">Home</NavLink></li>
        {/* <li><NavLink to='/about' className="hover:text-[#FFA801]">About</NavLink></li> */}
        <li><NavLink to='/portfolio' className="hover:text-[#FFA801]">Portfolio</NavLink></li>
        {/* <li><NavLink to='/skills' className="hover:text-[#FFA801]">Skills</NavLink></li> */}
        {/* <li><NavLink to='/testimonial' className="hover:text-[#FFA801]">Testimonial</NavLink></li> */}
        <li><NavLink to='/contact' className="hover:text-[#FFA801]">Contact</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar bg-gradient-to-r from-[#04032B] to-[#040239] text-white lg:px-32 py-5">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu z-50 menu-sm dropdown-content mt-3 p-2 shadow bg-[#FFA801] rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Slide>

                        <Link to='/' className="text-xl font-bold text-[#FFA801]">Md <span className="text-white">Kaykobad Yiasin</span> Khan</Link>
                    </Slide>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Fade><a href={resume} download='Resume-Of-MD-Kaykobad-Yiasin-Khan' className="btn bg-[#FFA801] border-0" >Download Resume</a></Fade>
                </div>
            </div>
        </div>
    );
};

export default Navber;