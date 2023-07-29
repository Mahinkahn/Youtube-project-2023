import React from 'react';
import frontendImg from '../../assets/images/front-end.png'

const Services = () => {
    return (
        <section id="services">
            <div className="container lg:pt-5">
                <div className="text-center">
                    <h2 className=' text-headingColor font-extrabold text-[2.4rem] mb-5'>What do I help</h2>
                    <p className='lg:max-w-[600px] lg:mx-auto text-headingColor font-medium text-base leading-7'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia dicta eligendi magni unde. Officia voluptates facere nihil voluptatibus in velit excepturi repellat. Impedit ipsa quidem eos ipsam labore, ut explicabo.</p>
                </div>
            </div>
            <div className='flex flex-col justify-center sm:py-12'>
                <div className='w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0'>
                    <div className=' relative text-gray-700 antialiased text-sm  font-semibold'>
                        {/*=============== vertical line running through the middle ===== */}

                        <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2"></div>

                        {/*=============== vertical line running through the middle end ===== */}
                        <div className='mt-6 sm:mt-0 sm:mb12'>
                            <div className="flex items-center flex-col sm:flex-row">

                                <div className="flex justify-start w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pr-8">
                                        <div data-aos='fade-right' data-aos-duration='1200' className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                            <h3 className=' text-primaryColor font-bold mb-3 group-hover:text-white group-hover:font-semibold text-xl'>Front-End Developer</h3>
                                            <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-medium leading-7'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis at porro explicabo necessitatibus, corporis ex!</p>
                                        </div>
                                    </div>
                                </div>

                                <div className=" rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                    <figure>
                                        <img src={frontendImg} alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;