import React from 'react';
import bannerImg from '../../../assets/Kaykobad-Yiasin-Photo.jpg'
// import resume from '../../../assets/Kaykobad-Yiasin-resume.pdf'
import { Link } from 'react-router-dom';
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Bounce, Fade, Hinge, JackInTheBox, Roll, Slide } from 'react-awesome-reveal';


const Banner = () => {

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        console.log(container);
    }, []);


    return (
        <div>
            <div className="hero min-h-screen">

                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
                        // background: {
                        //     color: {
                        //         value: "#0d47a1",
                        //     },
                        // },
                        fpsLimit: 100,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 0.2,
                                },
                                repulse: {
                                    distance: 100,
                                    duration: 0.5,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#ffffff",
                            },
                            links: {
                                color: "#ffffff",
                                distance: 100,
                                enable: true,
                                opacity: 0.2,
                                width: 1,
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 2,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 500,
                                },
                                value: 100,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 1, max: 2 },
                            },
                        },
                        detectRetina: true,
                    }}
                />



                <div className="hero-content flex-col items-center lg:gap-80 lg:flex-row-reverse">
                    <div className='lg:w-6/12'>
                        <Slide>
                            <img src={bannerImg} className=" border-4 max-w-sm rounded-lg shadow-2xl" />
                        </Slide>
                    </div>
                    <div className='text-white lg:w-full'>
                        <Slide>
                            <h1 className="text-4xl font-bold leading-tight	"><span className='text-[#FFA801]'>Kaykobad Yiasin</span> Khan</h1>
                            <p className="py-5">Highly skilled web developer with extensive expertise in the MERN Stack, including HTML, CSS, JavaScript, Bootstrap, Tailwind, React, Firebase, Express, MongoDB, Node.js, Git, Netlify, and Vercel. Adept at designing, developing, and deploying dynamic web applications, combining a deep understanding of front-end and back-end technologies to create seamless and responsive user experiences.</p>
                            <Link to='/contact' className="btn bg-[#FFA801] border-0" >Hire Me</Link>
                        </Slide>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;