import React from 'react';
import bannerImg from '../../assets/Kaykobad-Yiasin-Photo.jpg'
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='lg:px-32'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col items-center lg:gap-80 lg:flex-row-reverse">
                    <div className=' lg:w-12/12'>
                        <h1 className="text-5xl font-bold leading-tight	">Dear, <span className='text-[#FFA801]'>Hiring Manager</span></h1>
                        <p className="py-5">I am writing to express my keen interest in the junior web developer position at McKesson
                            Corporation. With a solid foundation in HTML, CSS, JavaScript, React, React Router, Firebase
                            Authentication, MongoDB, and Express, I am conf ident in my ability to contribute to McKesson
                            Corporation's web development initiatives and drive its digital presence to new heights.
                            <br /><br />

                            From my early explorations into web development, I quickly realized the power and potential of
                            creating dynamic and visually appealing websites. Over time, I have sharpened my skills and
                            expanded my knowledge in various web technologies, allowing me to conf idently tackle complex
                            coding challenges. My prof iciency in HTML, CSS, and JavaScript enables me to build interactive and
                            responsive user interfaces, while my experience with React and React Router empowers me to
                            develop robust and ef f icient web applications.

                            <br /><br />

                            I am particularly enthusiastic about utilizing Firebase Authentication for secure user
                            authentication and MongoDB for ef f icient data management. By leveraging these technologies, I
                            am able to create seamless user experiences and build scalable applications. Furthermore, my
                            familiarity with Express enables me to develop server-side applications and RESTful APIs, providing
                            a solid foundation for the complete web development lifecycle.
                            <br /><br />
                            During my previous experiences as a web developer, I have had the opportunity to work on diverse
                            projects, collaborating closely with multidisciplinary teams to deliver successful outcomes. This
                            exposure has strengthened my communication skills, fostered my ability to collaborate ef fectively,
                            and reinforced my commitment to meeting project deadlines. I thrive in fast-paced environments
                            and enjoy the thrill of problem-solving, using my creativity and technical expertise to overcome
                            challenges and deliver high-quality solutions.

                            <br /><br />
                            I am impressed by McKesson Corporation's reputation as a leader in the industry and its
                            commitment to innovation. Your focus on leveraging cutting-edge technologies aligns perfectly
                            with my passion for staying up-to-date with the latest advancements in web development. I am
                            eager to contribute my technical skills, creative mindset, and dedication to continuous learning to
                            drive McKesson Corporation's mission forward.

                            <br /><br />
                            Thank you for considering my application. I am excited about the opportunity to discuss how my
                            skills and experience align with McKesson Corporation's goals during an interview. I have attached
                            my resume for your review, and I look forward to the possibility of joining your talented team and
                            contributing to your success.</p>
                        <Link to='/contact' className="btn bg-[#FFA801] border-0" >Hire Me</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;