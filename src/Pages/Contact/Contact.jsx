import React from 'react';
import { FaEnvelope, FaEnvelopeOpen, FaLocationArrow, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className='lg:px-32 pb-10'>
            <div className="">
                <div className="hero-content flex-col lg:flex-row justify-between">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Contact now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <div className="rounded-lg shadow-md p-5">
                            <div className='flex items-center gap-5'>
                                <div><FaLocationArrow className='text-[#FFA801] text-2xl'></FaLocationArrow> </div>
                                <div>
                                    <h2 className='text-2xl font-semibold'>Our Address</h2>
                                    <p>Bosila, Mohammadpur, Dhaka</p>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-lg shadow-md p-5">
                            <div className='flex items-center gap-5'>
                                <div><FaPhoneAlt className='text-[#FFA801] text-2xl'></FaPhoneAlt> </div>
                                <div>
                                    <h2 className='text-2xl font-semibold'>Our Phone</h2>
                                    <p>Personal: +880 1706084806</p>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-lg shadow-md p-5">
                            <div className='flex items-center gap-5'>
                                <div><FaEnvelopeOpen className='text-[#FFA801] text-2xl'></FaEnvelopeOpen> </div>
                                <div>
                                    <h2 className='text-2xl font-semibold'>Our Email</h2>
                                    <p>kaykobadyiasin@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form>
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
                                    <textarea required className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>

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