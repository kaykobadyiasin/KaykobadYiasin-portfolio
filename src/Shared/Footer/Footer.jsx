import React from 'react';
import { Roll, Slide } from 'react-awesome-reveal';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="footer items-center px-32 py-8 bg-gradient-to-r from-[#04032B] to-[#040239] text-neutral-content text-center">
                <div className="items-center grid-flow-col">

                    <p>Copyright © 2023 - All right reserved</p>
                </div>
                
                    <div className="grid-flow-col gap-10 md:place-self-center md:justify-self-end">
                        <Slide top>
                        <a href='https://www.facebook.com/kaykobadyiasin' className='text-2xl' target='blank'>
                            <FaFacebook></FaFacebook>
                        </a>
                        </Slide>
                        <Slide>
                        <a href='https://www.linkedin.com/in/kaykobadyiasin/' className='text-2xl' target='blank'>
                            <FaLinkedin></FaLinkedin>
                        </a>
                        </Slide>
                        <Slide>
                        <a href='https://twitter.com/kaykobadyiasin' className='text-2xl' target='blank'>
                            <FaTwitter></FaTwitter>
                        </a>
                        </Slide>
                        <Slide >
                        <a href='https://github.com/kaykobadyiasin?tab=stars' className='text-2xl' target='blank'>
                            <FaGithub></FaGithub>
                        </a>
                        </Slide>
                    </div>
                
            </footer>
        </div>
    );
};

export default Footer;