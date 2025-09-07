import { CiSearch } from "react-icons/ci";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { FaCaretDown } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { PiMapPinArea } from "react-icons/pi";
const HeroSection = () => {
    const doctorOptions = ["Dr. Ayesha Khan", "Dr. Ahmed Ali", "Dr. Sara Malik", "Dr. Bilal Siddiqui"];
    const locationOptions = ["Lahore", "Karachi", "Islamabad", "Rawalpindi", "Multan"];

    return (
        <div className="w-full pt-20 lg:pt-15 overflow-hidden bg-[var(--lightBlue)]">
            <div className="relative flex flex-col gap-6 xl:flex-row items-center max-w-8xl  px-5 lg:px-20">
                <div className="w-full xl:w-[50%] sm:p-10  z-3">
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-center md:text-left leading-tight whitespace-nowrap" data-aos="fade-right" data-aos-duration="1500">
                        Find & Search Your <br/>
                        <span className="ml-0 relative text-[var(--darkBlue)] mx-3">Favorite
                            <img src="/Vector5.png" alt="Vector5" className="absolute -bottom-2 right-0" /></span>
                        Doctor
                    </h2>
                    <h3 data-aos="fade-right" data-aos-duration="1600"
                        className="mt-6 md:mt-10 text-sm lg:text-md text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed pr-50">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, labore.
                    </h3>
                    <div id="search-bar" data-aos="fade-right" data-aos-duration="1700" className="w-full max-w-2xl mx-auto mt-5 bg-white rounded-0 sm:rounded-full shadow-lg z-10 px-2">
                        <form className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0 p-2" onSubmit={e => e.preventDefault()}>
                            <Autocomplete
                                disablePortal
                                options={doctorOptions}
                                sx={{flex: 1, minWidth: { sm: 180, xs: '100%' }, background: 'white', borderRadius: 9999, mr: { sm: 2, xs: 0 } }}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        placeholder="Doctor's Name"
                                        InputProps={{
                                            ...params.InputProps,
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <VscAccount className="text-xl" />
                                                </InputAdornment>
                                            ),
                                            endAdornment: (
                                                <InputAdornment position="end" className="cursor-pointer">
                                                    <span className="text-gray-400 text-xs"><FaCaretDown /></span>
                                                </InputAdornment>
                                            )
                                        }}
                                        size="small"
                                        sx={{ background: 'white', borderRadius:9999 }}
                                    />
                                )}
                            />
                            <Autocomplete
                                disablePortal
                                options={locationOptions}
                                sx={{ flex: 1, minWidth: { sm: 180, xs: '100%' }, background: 'white', borderRadius: 9999, mr: { sm: 2, xs: 0 } }}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        placeholder="Location"
                                        InputProps={{
                                            ...params.InputProps,
                                            startAdornment: (
                                                <InputAdornment position="start" className="cursor-pointer">
                                                    <PiMapPinArea className="text-xl" />
                                                </InputAdornment>
                                            ),
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <span className="text-gray-400 text-xs"><FaCaretDown /></span>
                                                </InputAdornment>
                                            )
                                        }}
                                        size="small"
                                        sx={{ background: 'white', borderRadius: 9999 }}
                                    />
                                )}
                            />
                            <button type="submit"
                                className="hidden sm:flex items-center justify-center bg-[#1064e6] text-white rounded-full w-12 h-12 ml-0 sm:ml-2 mt-2 sm:mt-0 shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition-all">
                                <CiSearch size={24} />
                            </button>
                        </form>
                    </div>
                </div>
                <div className="w-full xl:w-[50%] flex justify-center md:justify-end" >
                    <img src="/Doc.png" className="w-full h-full object-cover z-10" alt="Doctor" />
                </div>


                <img src="/Ellipse14.png"  alt="Ellipse14" className="absolute bottom-0 -right-0 md:-right-30 md:h-120 w-full sm:w-auto z-1 object-contain" />
                <div className="hidden md:flex w-full gap-4 bg-[var(--darkBlue)] absolute bottom-0 left-0 z-2 py-4 px-20">
                    <span data-aos="zoom-out" data-aos-duration="1500" className="flex flex-col text-3xl sm:text-5xl font-bold text-white">
                        24/7
                        <span className="text-gray-200 text-xs pt-2 text-center font-medium">Online Support</span>
                    </span>
                    <div className="line w-[1px] bg-gray-400 h-auto mx-10 rounded-4xl"></div>
                    {/*  */}
                    <span data-aos="zoom-out" data-aos-duration="1500" className="flex flex-col text-3xl sm:text-5xl font-bold text-white">
                        100+
                        <span className="text-gray-200 text-xs pt-2 text-center font-medium">Doctors</span>
                    </span>
                    <div className="line w-[1px] bg-gray-400 h-auto mx-10 rounded-4xl"></div>
                    {/*  */}
                    <span data-aos="zoom-out" data-aos-duration="1500" className="flex flex-col text-3xl sm:text-5xl font-bold text-white">
                        1M+
                        <span className="text-gray-200 text-xs pt-2 text-center font-medium">Active Patients</span>
                    </span>
                    <div className="line w-[1px] bg-gray-400 h-auto mx-10 rounded-4xl"></div>
                    {/*  */}

                </div>
            </div>
        </div>
    )
}

export default HeroSection