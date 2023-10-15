import React from 'react';
import testy1 from '../../assets/testimonial/client2.jpg'
import testy2 from '../../assets/testimonial/client5.jpg'
import testy3 from '../../assets/testimonial/client3.jpg'
import testy4 from '../../assets/testimonial/client4.jpg'
import testy5 from '../../assets/testimonial/client1.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Testimonial = () => {
    return (
        <div className='lg:px-32 py-20'>

            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="card w-96 mx-auto bg-base-100 shadow-xl pt-5">
                        <figure><img className="mask mask-circle w-8/12" src={testy1} /></figure>
                        <div className="card-body">
                            <h2 className="text-center font-bold text-2xl">
                                Samuel Raita
                            </h2>
                            <p className='text-center'>Very good person and profetional work</p>
                            <div className="rating rating-md rating-half justify-center">
                                <input type="radio" name="rating-10" className="rating-hidden" />
                                <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" checked />
                                <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card w-96 mx-auto bg-base-100 shadow-xl pt-5">
                        <figure><img className="mask mask-circle w-8/12" src={testy2} /></figure>
                        <div className="card-body">
                            <h2 className="text-center font-bold text-2xl">
                                Fred Moon
                            </h2>
                            <p className='text-center'>Very good person and profetional work</p>
                            <div className="rating rating-md rating-half justify-center">
                                <input type="radio" name="rating-10" className="rating-hidden" />
                                <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" checked />
                                <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card w-96 mx-auto bg-base-100 shadow-xl pt-5">
                        <figure><img className="mask mask-circle w-8/12" src={testy3} /></figure>
                        <div className="card-body">
                            <h2 className="text-center font-bold text-2xl">
                                Elizeu Dias
                            </h2>
                            <p className='text-center'>Very good person and profetional work</p>
                            <div className="rating rating-md rating-half justify-center">
                                <input type="radio" name="rating-10" className="rating-hidden" />
                                <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" checked />
                                <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card w-96 mx-auto bg-base-100 shadow-xl pt-5">
                        <figure><img className="mask mask-circle w-8/12" src={testy4} /></figure>
                        <div className="card-body">
                            <h2 className="text-center font-bold text-2xl">
                                Jenean Newcomber
                            </h2>
                            <p className='text-center'>Very good person and profetional work</p>
                            <div className="rating rating-md rating-half justify-center">
                                <input type="radio" name="rating-10" className="rating-hidden" />
                                <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" checked />
                                <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card w-96 mx-auto bg-base-100 shadow-xl pt-5">
                        <figure><img className="mask mask-circle w-8/12" src={testy5} /></figure>
                        <div className="card-body">
                            <h2 className="text-center font-bold text-2xl">
                                Jany Medison
                            </h2>
                            <p className='text-center'>Very good person and profetional work</p>
                            <div className="rating rating-md rating-half justify-center">
                                <input type="radio" name="rating-10" className="rating-hidden" />
                                <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" checked />
                                <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Testimonial;