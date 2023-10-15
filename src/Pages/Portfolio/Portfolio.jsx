import React from 'react';
import project1 from '../../assets/projects/Yoga.png';
import './Portfolio.css'

const Portfolio = () => {
    return (
        <div className='lg:px-32 px-10'>
            <h2 className='text-4xl font-bold mt-10 bg-[#FFA801] p-2'>My Projects</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-10'>
                <div className="hero-content card w-96 h-[500px] shadow-xl rounded-lg">
                    {/* <figure className=''> */}
                        <div className='bgProject rounded-lg'>
                            {/* <img src={project1} className='absolute' alt="Shoes" /> */}
                        </div>
                    {/* </figure> */}
                    <div className="card-body">
                        <h2 className="card-title">Freedom Yoga</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-between">
                            <a href='https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-kaykobadyiasin' className="btn bg-[#040330] text-white hover:bg-[#FFA801] text-[10px]" target='blank'>Client Side</a>
                            <a href='https://freedom-yoga-6b25a.web.app/' className="btn text-[#040330] hover:text-white hover:bg-[#040330] bg-[#FFA801] text-[10px]" target='blank'>Live Site</a>
                            <a href='https://github.com/programming-hero-web-course1/b7a12-summer-camp-server_side-kaykobadyiasin' className="btn bg-[#040330] text-white hover:bg-[#FFA801] text-[10px]" target='blank'>Server Side</a>
                            
                        </div>
                    </div>
                </div>
                <div className="hero-content card w-96 h-[500px] shadow-xl rounded-lg">
                    {/* <figure className=''> */}
                        <div className='bgProject2 rounded-lg image-full'>
                            {/* <img src={project1} className='absolute' alt="Shoes" /> */}
                        </div>
                    {/* </figure> */}
                    <div className="card-body">
                        <h2 className="card-title">Toys Animal Car</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-between">
                            <a href='https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-client-side-kaykobadyiasin' className="btn bg-[#040330] text-white hover:bg-[#FFA801] text-[10px]" target='blank'>Client Side</a>
                            <a href='https://toy-animal-car.web.app/' className="btn text-[#040330] hover:text-white hover:bg-[#040330] bg-[#FFA801] text-[10px]" target='blank'>Live Site</a>
                            <a href='https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-server-side-kaykobadyiasin' className="btn bg-[#040330] text-white hover:bg-[#FFA801] text-[10px]" target='blank'>Server Side</a>
                            
                        </div>
                    </div>
                </div>
                <div className="hero-content card w-96 h-[500px] shadow-xl rounded-lg">
                    {/* <figure className=''> */}
                        <div className='bgProject3 rounded-lg'>
                            {/* <img src={project1} className='absolute' alt="Shoes" /> */}
                        </div>
                    {/* </figure> */}
                    <div className="card-body">
                        <h2 className="card-title">Chef Info</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-between">
                            <a href='https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-client-side-kaykobadyiasin' className="btn bg-[#040330] text-white hover:bg-[#FFA801] text-[10px]" target='blank'>Client Side</a>
                            <a href='https://chef-info.web.app/' className="btn text-[#040330] hover:text-white hover:bg-[#040330] bg-[#FFA801] text-[10px]" target='blank'>Live Site</a>
                            <a href='https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-server-side-kaykobadyiasin' className="btn bg-[#040330] text-white hover:bg-[#FFA801] text-[10px]" target='blank'>Server Side</a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;