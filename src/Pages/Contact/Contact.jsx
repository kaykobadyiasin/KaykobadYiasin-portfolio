import { Icon } from '@iconify/react';
import React from 'react';
import { FaEnvelope, FaEnvelopeOpen, FaLocationArrow, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className='lg:px-32 pb-10 min-h-screen'>
            <div className="">
                <div className="hero-content flex-col lg:flex-row justify-between gap-10">
                    <div className="">
                        <h1 className="text-5xl font-bold">Contact now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <div className="rounded-lg shadow-md p-5">
                            <div className='flex items-center gap-5'>
                                <div><FaLocationArrow className='text-[#FFA801] text-2xl'></FaLocationArrow> </div>
                                <div>
                                    <h2 className='text-2xl font-semibold'>Our Address</h2>
                                    <p>Bosila, Mohammadpur, Dhaka, 1207</p>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-lg shadow-md p-5 mt-10">
                            <div className='flex items-center gap-5'>
                                <div><FaPhoneAlt className='text-[#FFA801] text-2xl'></FaPhoneAlt> </div>
                                <div>
                                    <h2 className='text-2xl font-semibold'>Our Phone</h2>
                                    <p>Personal: +880 1706084806</p>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-lg shadow-md p-5 mt-10">
                            <div className='flex items-center gap-5'>
                                <div><FaEnvelopeOpen className='text-[#FFA801] text-2xl'></FaEnvelopeOpen> </div>
                                <div>
                                    <h2 className='text-2xl font-semibold'>Our Email</h2>
                                    <p>kaykobadyiasin@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" w-full  shadow-md bg-base-100 order-last">
                        <div className="card-body">
                            <form>
                                <h3 className='flex items-center gap-3 text-3xl'><Icon icon="fxemoji:left" className='text-5xl lg:block hidden' /> <Icon icon="fxemoji:up" className='text-5xl lg:hidden' /> Please contact </h3>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" required placeholder="name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" required placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Subject</span>
                                    </label>
                                    <input type="text" required placeholder="subject" className="input input-bordered" />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Massage</span>
                                    </label>
                                    <textarea required className="textarea textarea-bordered h-24" placeholder="Description"></textarea>

                                </div>
                                <div className="form-control mt-5">
                                    <input type="submit" value='Send Massage' className="input input-bordered btn bg-[#FFA801] hover:text-white hover:bg-[#040231]" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;