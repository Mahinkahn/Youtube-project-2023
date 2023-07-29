import React from 'react';
import heroImg from '../../assets/images/hero.svg'
import CountUp from 'react-countup';

const Hero = () => {
    return (
        <section className='pt-0' id='about'>
            <div className="container pt-14">
                <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
                    {/* ========= hero-left-content =========== */}
                    <div className='w-full md:basis-1/2'>
                        <h5 data-aos='fade-right' data-aos-duration='1500' className=' text-headingColor font-semibold text-base'>Hell welcome</h5>
                        <h1 data-aos='fade-up' data-aos-duration='1500' className=' text-headingColor font-extrabold text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5'>I'm Mahin Kahn <br />Front-End Developer</h1>
                        <div className='flex items-center gap-6 mt-7' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1800'>
                            <a href="#contact">
                                <button className=' bg-primaryColor text-white font-medium flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'><i className='ri-mail-line'></i> Hire me</button>
                            </a>
                            <a href="#portfolio" className=' text-smallTextColor font-semibold text-base border-b border-solid border-smallTextColor'>See portfolio</a>
                        </div>

                        <p data-aos='fade-left' data-aos-duration='1500' className=' flex gap-2 text-headingColor font-medium mt-12 text-[15px] leading-7 sm:pl-14 sm:pr-10'>
                            <span><i className='ri-apps-2-line'></i></span>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam eos iste ullam? Temporibus mollitia, corrupti dolore suscipit sapiente architecto laboriosam.</p>

                        <div className='flex items-center gap-9 mt-14'>
                            <span className=' text-smallTextColor text-[15px] font-semibold'>Follow me:</span>
                            <span>
                                <a href="#youtube" className='text-smallTextColor text-[18px] font-semibold'><i className='ri-youtube-line'></i></a>
                            </span>
                            <span>
                                <a href="#github" className='text-smallTextColor text-[18px] font-semibold'><i className='ri-github-line'></i></a>
                            </span>
                            <span>
                                <a href="#facebook" className='text-smallTextColor text-[18px] font-semibold'><i className='ri-facebook-line'></i></a>
                            </span>
                            <span>
                                <a href="#instagram" className='text-smallTextColor text-[18px] font-semibold'><i className='ri-instagram-line'></i></a>
                            </span>
                        </div>
                    </div>
                    {/* ========= hero-left-end =========== */}

                    {/*============ hero-img =========== */}

                    <div className='basis-1/3 mt-10 sm:mt-0'>
                        <figure className='flex items-center justify-center'>
                            <img src={heroImg} alt="" />
                        </figure>
                    </div>

                    {/*============ hero-img-end =========== */}
                    {/*============ hero-content-right =========== */}
                    {/*============ hero-content-right-end =========== */}
                </div>
            </div>
        </section>
    );
};

export default Hero;