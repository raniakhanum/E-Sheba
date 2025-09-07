import { FaArrowRightLong } from "react-icons/fa6";

const Choise = () => {
    return (
        <div
                className="my-10 -mt-20 mx-auto max-w-7xl flex lg:justify-between gap-8 flex-col-reverse lg:flex-row">



                <div className="w-full lg:w-[50%] lg:h-[450px] p-5 lg:p-15" data-aos="fade-up" data-aos-duration="1500">
                    <img className="h-full w-full object-cover rounded-3xl" src="/Rectangle-11.png" alt="Rectangle-11" />
                </div>


                <div className="w-full -mt-6 lg:w-[50%] lg:h-[450px] lg:p-15 flex flex-col gap-8  p-5 items-center">
                    <div className="text flex flex-col" data-aos="fade-up" data-aos-duration="1500">
                        <h1 className="text-2xl sm:text-4xl mt-5 font-bold leading-tight w-full max-w-4xl ">Why You Choose Us?</h1>
                    </div>
                    <div className="flex flex-col gap-7">
                        <div className="flex items-center gap-5 text-xs sm" data-aos="fade-up" data-aos-duration="1500">
                            <img src="/emojione.png" className="w-5 h-5 " alt="" />
                            <div className="  text-xs sm">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            </div>
                        </div>
                        <div className="flex items-center gap-5 text-xs sm" data-aos="fade-up" data-aos-duration="2000">
                            <img src="/emojione.png" className="w-5 h-5 " alt="" />
                            <div className="  text-xs sm">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            </div>
                        </div>
                        <div className="flex items-center gap-5 text-xs sm" data-aos="fade-up" data-aos-duration="2500">
                            <img src="/emojione.png" className="w-5 h-5 " alt="" />
                            <div className="  text-xs sm">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            </div>
                        </div>
                        <div className="flex items-center gap-5 text-xs sm" data-aos="fade-up" data-aos-duration="3000">
                            <img src="/emojione.png" className="w-5 h-5 " alt="" />
                            <div className="  text-xs sm">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            </div>
                        </div>
                        <div className="flex items-center gap-5 text-xs sm" data-aos="fade-up" data-aos-duration="3000">
                            <img src="/emojione.png" className="w-5 h-5 " alt="" />
                            <div className="  text-xs sm">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            </div>
                        </div>
                        <p data-aos="fade-up" data-aos-duration="3000" className="text-[var(--darkBlue)] flex gap-3 items-center text-xs font-medium">Learn More <FaArrowRightLong className=""/></p>
                    </div>

                </div>


            </div>
    );
}

export default Choise;