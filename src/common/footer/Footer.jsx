import { PiTiktokLogoLight } from "react-icons/pi";
import { FaInstagram, FaFacebook, FaYoutube  } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";




const Footer = () => {
    return (
        <div>
            <div className=' flex flex-col justify-center items-center mt-14 mb-5'>
            <button className=' px-5 py-2 font-bold bg-[#f5c518] text-black rounded-md'>Sign In For More Access</button>
            <div className=" flex gap-16 my-5 text-3xl">
                <PiTiktokLogoLight/> <FaInstagram/> <CiTwitter/> <FaFacebook/> <FaYoutube />
            </div>
            </div>
            <p className=" text-center w-full py-4 bg-slate-950">Copyright © 2024 - All right reserved</p>
        </div>
    );
};

export default Footer;