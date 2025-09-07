import { FaArrowRightLong, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6"

const Footer = () => {
    const now = new Date();
    const year = now.getFullYear();
  return (
    <>
      {/* Newsletter Section */}
      <div data-aos="fade-up" data-aos-duration="1500" className="bg-[#1064e6] px-2 py-10 md:py-14 rounded-xl max-w-5xl mx-auto mt-8 md:mt-12 mb-0 md:mb-8">
        <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-8">Subscribe To Our Newsletter</h2>
        <form className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto bg-white p-3 rounded-full">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 w-full rounded-full px-6 sm:py-2 text-lg focus:outline-none"
          />
          <button
            type="submit"
            className="hidden text-white bg-[#1064e6] rounded-full w-12 h-12 md:flex items-center justify-center text-xl shadow-md hover:bg-blue-100 transition-all"
            aria-label="Subscribe"
          >
            <span className="text-lg"><FaArrowRightLong className="" /></span>
          </button>
        </form>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#1064e6]  text-white pt-12 pb-4 mt-5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between gap-12">
            {/* E-sheba */}
            <div data-aos="fade-left" data-aos-duration="2000" className="flex-1 min-w-[220px]">
              <h3 className="font-bold text-3xl mb-2">E-sheba</h3>
              <p className="text-xs mt-4 mb-2 opacity-90 w-3/4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus feugiat lectus risus sed ullamcorper. Auctor semper fermentum</p>
              <p className="text-xs mt-4 mb-2 opacity-90 w-3/4">volutpat integer vel. In rhoncus elementum nunc, malesuada mi sed. Nibh est sit lobortis id semper.</p>
              <div className="flex gap-3 mt-4">
                <a href="#" aria-label="Facebook" className="hover:text-blue-200"><FaFacebookF /></a>
                <a href="#" aria-label="Twitter" className="hover:text-blue-200"><FaTwitter /></a>
                <a href="#" aria-label="Instagram" className="hover:text-blue-200"><FaInstagram /></a>
              </div>
            </div>
            {/* Useful Links */}
            <div data-aos="fade-up" data-aos-duration="2000" className="flex-1 min-w-[180px]">
              <h3 className="font-semibold text-xl mb-2">Useful Links</h3>
              <ul className="space-y-1 text-sm mt-4">
                <li><a href="#about" className="hover:underline text-xs">About Us</a></li>
                <li><a href="#privacy" className="hover:underline text-xs">Privacy Policy</a></li>
                <li><a href="#mission" className="hover:underline text-xs">Our Mission</a></li>
                <li><a href="#team" className="hover:underline text-xs">Our Team</a></li>
              </ul>
            </div>
            {/* Address */}
            <div data-aos="fade-right" data-aos-duration="2000" className="flex-1 min-w-[180px]">
              <h3 className="font-semibold text-xl mb-2">Address</h3>
              <div className="rounded-lg overflow-hidden w-full h-28 md:h-32 mt-4">
                <img
                  src="/Rectangle-18.png"
                  alt="Map"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <hr className="my-6 border-blue-300 opacity-40" />
          <div className="text-center text-xs opacity-80">© {year} All Right Reserved | Made by Rania Khan</div>
        </div>
      </footer>
    </>
  )
}

export default Footer