import React from 'react';
import project1 from '../../assets/projects/Yoga.png';
import './Portfolio.css'

const Portfolio = () => {
    return (
        <div className='lg:px-32 px-10 min-h-screen'>
            <h2 className='text-4xl font-bold mt-10 bg-[#FFA801] p-2'>My Projects</h2>
            <div className='grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-5 my-10'>
                <div className=" card min-h-[600px] shadow-xl  w-full">
                    {/* <figure className=''> */}
                    <div className='bgProject3 image-full rounded-t-lg' >
                        {/* <img src={project1} className='absolute' alt="Shoes" /> */}
                    </div>
                    {/* </figure> */}
                    <div className="card-body">
                        <h2 className="card-title">Image Gallery</h2>
                        <div className="card-actions my-4">

                            <a href='https://65480900f16551161d26235f--magenta-taiyaki-9e2cc9.netlify.app/' className="btn text-[#040330] hover:text-white hover:bg-[#040330] bg-[#FFA801] text-[10px]" target='blank'>Live Link</a>
                            <a href='https://github.com/kaykobadyiasin/Image-Gallery-Task' className="btn bg-[#040330] text-white hover:bg-[#FFA801] text-[10px]" target='blank'>Source Code </a>
                        </div>

                        <ul className='list-disc pl-5 space-y-3'>
                            <li>Developed a React.js-powered image gallery with seamless uploads and additions for a dynamic visual experience.</li>
                            <li>Implemented user-friendly controls for selecting and deleting specific or multiple images, enhancing user control.</li>
                            <li>Optimized gallery performance by saving uploaded images in local storage, ensuring responsiveness and efficiency.</li>
                        </ul>

                    </div>
                </div>
                <div className=" card min-h-[600px] shadow-xl  w-full">
                    {/* <figure className=''> */}
                    <div className='bgProject image-full rounded-t-lg'>
                        {/* <img src={project1} className='absolute' alt="Shoes" /> */}
                    </div>
                    {/* </figure> */}
                    <div className="card-body">
                        <h2 className="card-title">Freedom Yoga</h2>
                        <div className="card-actions my-4">

                            <a href='https://freedom-yoga-6b25a.web.app/' className="btn text-[#040330] hover:text-white hover:bg-[#040330] bg-[#FFA801] text-[10px]" target='blank'>Live Link</a>

                        </div>
                        <ul className='list-disc pl-5 space-y-3'>
                            <li>Engineered a secure entry point with Firebase Authentication for users on the Freedom Yoga platform. Simplified the user journey by enabling easy navigation to book classes offered by specific instructors.</li>
                            <li>Integrated Stripe for seamless and secure payment transactions for selected classes. Provided users with a user-friendly dashboard for centralized class and payment management.</li>
                        </ul>

                    </div>
                </div>
                <div className=" card min-h-[600px] shadow-xl  w-full">
                    {/* <figure className=''> */}
                    <div className='bgProject2 image-full rounded-t-lg'>
                        {/* <img src={project1} className='absolute' alt="Shoes" /> */}
                    </div>
                    {/* </figure> */}
                    {/* <div className="card-body">
                        <h2 className="card-title">Toys Animal Car</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <a href='https://toy-animal-car.web.app/' className="btn text-[#040330] hover:text-white hover:bg-[#040330] bg-[#FFA801] text-[10px]" target='blank'>Live Link</a>

                        </div>
                    </div> */}
                    <div className="card-body">
                        <h2 className="card-title">Matribhumi City</h2>
                        <div className="card-actions my-4">
                            <a href='https://6594a7e44383a52f0056e365--rococo-sunshine-5dcec9.netlify.app/' className="btn text-[#040330] hover:text-white hover:bg-[#040330] bg-[#FFA801] text-[10px]" target='blank'>Live Link</a>

                        </div>
                        <ul className='list-disc pl-5 space-y-3'>
                            <li>Real Estate recent completed project for Matribhumi City</li>
                            <li>Available plot booking system using form</li>
                            <li>Book visit live contact system</li>
                        </ul>

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
                            <a href='https://chef-info.web.app/' className="btn text-[#040330] hover:text-white hover:bg-[#040330] bg-[#FFA801] text-[10px]" target='blank'>Live</a>
                            <a href='https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-server-side-kaykobadyiasin' className="btn bg-[#040330] text-white hover:bg-[#FFA801] text-[10px]" target='blank'>Server Side</a>
                            
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Portfolio;