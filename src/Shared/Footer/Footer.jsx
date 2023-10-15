import React from 'react';
import { Roll } from 'react-awesome-reveal';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="footer items-center px-32 py-4 bg-gradient-to-r from-[#04032B] to-[#040239] text-neutral-content text-center">
                <div className="items-center grid-flow-col">

                    <p>Copyright © 2023 - All right reserved</p>
                </div>
                
                    <div className="grid-flow-col gap-10 md:place-self-center md:justify-self-end">
                        <Roll>
                        <a href='https://www.facebook.com/kaykobadyiasin' className='text-4xl' target='blank'>
                            <FaFacebook></FaFacebook>
                        </a>
                        </Roll>
                        <Roll>
                        <a href='https://www.linkedin.com/in/kaykobadyiasin/' className='text-4xl' target='blank'>
                            <FaLinkedin></FaLinkedin>
                        </a>
                        </Roll>
                        <Roll>
                        <a href='https://twitter.com/kaykobadyiasin' className='text-4xl' target='blank'>
                            <FaTwitter></FaTwitter>
                        </a>
                        </Roll>
                        <Roll>
                        <a href='https://github.com/kaykobadyiasin?tab=stars' className='text-4xl' target='blank'>
                            <FaGithub></FaGithub>
                        </a>
                        </Roll>
                    </div>
                
            </footer>
        </div>
    );
};

export default Footer;