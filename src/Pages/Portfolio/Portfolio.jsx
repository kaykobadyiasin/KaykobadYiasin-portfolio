import React from 'react';
import project1 from '../../assets/projects/Yoga.png';
import './Portfolio.css'

const Portfolio = () => {
    return (
        <div className='lg:px-32 px-10 min-h-screen'>
            <h2 className='text-4xl font-bold mt-10 bg-[#FFA801] p-2'>My Projects</h2>
            <div className='grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-5 my-10'>
                <div className=" card h-[500px] shadow-xl  w-full">
                    {/* <figure className=''> */}
                    <div className='bgProject3 rounded-lg'>
                        {/* <img src={project1} className='absolute' alt="Shoes" /> */}
                    </div>
                    {/* </figure> */}
                    <div className="card-body">
                        <h2 className="card-title">Freedom Yoga</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <a href='https://github.com/kaykobadyiasin/Image-Gallery-Task' className="btn bg-[#040330] text-white hover:bg-[#FFA801] text-[10px]" target='blank'>Source Code Link</a>
                            <a href='https://65480900f16551161d26235f--magenta-taiyaki-9e2cc9.netlify.app/' className="btn text-[#040330] hover:text-white hover:bg-[#040330] bg-[#FFA801] text-[10px]" target='blank'>Live Site Link</a>
                        </div>
                    </div>
                </div>
                <div className=" card h-[500px] shadow-xl  w-full">
                    {/* <figure className=''> */}
                    <div className='bgProject rounded-lg'>
                        {/* <img src={project1} className='absolute' alt="Shoes" /> */}
                    </div>
                    {/* </figure> */}
                    <div className="card-body">
                        <h2 className="card-title">Freedom Yoga</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">

                            <a href='https://freedom-yoga-6b25a.web.app/' className="btn text-[#040330] hover:text-white hover:bg-[#040330] bg-[#FFA801] text-[10px]" target='blank'>Live Site Link</a>

                        </div>
                    </div>
                </div>
                <div className=" card h-[500px] shadow-xl  w-full">
                    {/* <figure className=''> */}
                    <div className='bgProject2  image-full'>
                        {/* <img src={project1} className='absolute' alt="Shoes" /> */}
                    </div>
                    {/* </figure> */}
                    <div className="card-body">
                        <h2 className="card-title">Toys Animal Car</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <a href='https://toy-animal-car.web.app/' className="btn text-[#040330] hover:text-white hover:bg-[#040330] bg-[#FFA801] text-[10px]" target='blank'>Live Site Link</a>

                        </div>
                    </div>
                </div>
                {/* <div className=" card h-[500px] shadow-xl rounded-lg w-full">
                        <div className='bgProject3 rounded-lg'>
                            
                        </div>
                    <div className="card-body">
                        <h2 className="card-title">Chef Info</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-between">
                            <a href='https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-client-side-kaykobadyiasin' className="btn bg-[#040330] text-white hover:bg-[#FFA801] text-[10px]" target='blank'>Client Side</a>
                            <a href='https://chef-info.web.app/' className="btn text-[#040330] hover:text-white hover:bg-[#040330] bg-[#FFA801] text-[10px]" target='blank'>Live Site</a>
                            <a href='https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-server-side-kaykobadyiasin' className="btn bg-[#040330] text-white hover:bg-[#FFA801] text-[10px]" target='blank'>Server Side</a>
                            
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Portfolio;