import React from 'react';
import bannerImg from '../../assets/Kaykobad-Yiasin-Photo.jpg'
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='container mx-auto'>
            <div className=" min-h-screen">
                <div className="flex-col items-center lg:gap-80 lg:flex-row-reverse py-10 xl:mx-0 lg:mx-5 mx-5">
                    <div className='lg:w-8/12 text-justify'>
                        <h1 className="text-3xl font-bold leading-tight	">Dear, <span className='text-[#FFA801]'>Hiring Manager</span></h1>
                        <p className="py-5">I am writing to express my strong interest in the Web Development position at MULTISKILL IT. With a
                            proven track record as a web developer, well-versed in HTML, CSS, JavaScript, React.js, and API
                            integration, I am confident in my ability to bring valuable contributions to your team.
                            <br /><br />

                            I am currently pursuing my Diploma in Engineering, specializing in Graphic Design, and have
                            completed professional training in Comprehensive Web Development through Programming Hero.
                            My skill set encompasses a wide range of front-end technologies, including React.js, Bootstrap, and
                            Tailwind, along with valuable back-end experience in MongoDB, Express.js, and Node.js.

                            <br /><br />

                            While I acknowledge that English communication is my basic skill, I am dedicated to delivering highquality, user-friendly web applications. My proficiency extends to utilizing Firebase for authentication
                            and hosting, along with a strong command of essential tools such as Npm and Git, ensuring efficient
                            and collaborative teamwork.
                            <br /><br />
                            In addition to my technical expertise, I am committed to keeping pace with the ever-evolving trends
                            in the web development industry, continually refining my skills to ensure the success of the projects I
                            undertake.

                            <br /><br />
                            I would be delighted to discuss further how my skills and passion for web development can
                            contribute to MULTISKILL IT's continued success. Please find my resume attached for your review.
                            <br /><br />
                            Sincerely, Kaykobad Yiasin
                            </p>
                        <Link to='/contact' className="btn bg-[#FFA801] border-0" >Hire Me</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;