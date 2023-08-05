import React from 'react';

const Footer = () => {
    return <footer className='bg-[#12141e] pt-12'>
        {/* ======= footer-top ======= */}

        <div className="container">
            <div className="sm:flex items-center justify-between md:gap-8">
                <div className="w-full sm:w-1/2">
                    <h2 className=' text-[26px] leading-10 text-white font-semibold mb-6 md:text-[2rem]'>
                        Do you want to make beautiful products?
                    </h2>
                    <a href="#contact">
                        <button className=' bg-primaryColor text-white font-medium flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'><i className='ri-mail-line'></i> Hire me</button>
                    </a>
                </div>

                <div className="w-full sm:w-1/2">
                    <p className=' text-gray-300 leading-7 mt-4 sm:mt-0'>Lorem ipsum dolor sit, amet  adipisicing elit. Itaque qui ad id  non veritatis exercitationem deleniti voluptatum quia tenetur.</p>
                </div>

            </div>
        </div>

        {/* ======= footer-top-end ======= */}
    </footer>
};

export default Footer;