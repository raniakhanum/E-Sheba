import { Typography } from "@mui/material"
import { FaArrowRightLong } from "react-icons/fa6"

const Quality = () => {
    return (
        <div
            className="my-10 mx-auto max-w-7xl flex lg:justify-between gap-8 flex-col-reverse lg:flex-row">

            <div data-aos="fade-left" data-aos-duration="1000" className="w-full lg:w-[40%] lg:h-[500px] lg:p-10 flex flex-col gap-8  p-5 items-center">
                <div className="text flex flex-col">
                    <h2 className="text-3xl lg:text-4xl font-bold text-center md:text-left  leading-tight ">
                        The Future <br/> of
                        <span className="relative text-[var(--darkBlue)] mx-3">Quality Health</span>
                    </h2>
                    <Typography data-aos="fade-up" data-aos-duration="1500" variant="body2" className='text-xs font-medium my-3! text-gray-800'>
                        Placeat adipisci voluptas.lorem20 Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore pariatur necessitatibus veritatis eos nam iste soluta at aut. Illum, quisquam.
                    </Typography>
                    <Typography data-aos="fade-up" data-aos-duration="2000" variant="body2" className='text-xs font-medium my-3! text-gray-800'>
                        Placeat adipisci voluptas.lorem20 Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore pariatur necessitatibus veritatis eos nam iste soluta at aut. Illum, quisquam.
                    </Typography>
                    <Typography data-aos="fade-up" data-aos-duration="2500" variant="body2" className='text-xs font-medium my-5! text-gray-800'>
                        Consectetur adipisicing elit. Labore pariatur necessitatibus veritatis eos nam iste soluta at aut. Illum, quisquam.
                    </Typography>
                    <p data-aos="fade-up" data-aos-duration="3000" className="text-[var(--darkBlue)] flex gap-3 items-center text-xs font-medium">Learn More <FaArrowRightLong className="" /></p>

                </div>

            </div>



            <div data-aos="fade-right" data-aos-duration="1000" className="w-full lg:w-[60%] lg:h-[500px] p-5 lg:p-15">
                <img className="h-full w-full object-cover rounded-3xl" src="/Rectangle-15.png" alt="Rectangle-15" />
            </div>




        </div>
    )
}

export default Quality