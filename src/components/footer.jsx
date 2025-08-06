import { FaLocationArrow , FaLinkedin , FaInstagram , FaFacebook } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { LiaChevronRightSolid } from "react-icons/lia"

export default function Footer(){

    const links = ["home" , "about" , "contact" ,"blog"]

    return(
        <>
          <div className="night px-8 py-16 grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="flex flex-col space-y-4">
                <h1 className="text-3xl font-semibold capitalize">car rental</h1>
                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, sint?</p>

                 <div className="flex flex-col space-y-2.5">
                    <div className="flex gap-4 items-center">
                        <FaLocationArrow/>
                        <p>Annaba , Algeria</p> 
                    </div>
                    <div className="flex gap-4 items-center">
                        <IoPhonePortraitOutline/>
                        <p>+213 6 78 32 23 12</p>
                    </div>
                 </div>

                 <div className="flex gap-4 text-3xl">
                    <FaInstagram className="hover:text-[#ffc727] cursoor-pointer"/>
                    <FaFacebook className="hover:text-[#ffc727] cursor-pointer"/>
                    <FaLinkedin className="hover:text-[#ffc727] cursor-pointer"/>
                 </div>
              </div>

              <div className="flex flex-col space-y-4">
                <h1 className="text-2xl font-semibold capitalize">important links</h1>

                <ul className="flex flex-col space-y-2 capitalize">
                    {links.map((ele , ind) => (
                        <li className="flex gap-2 items-center cursor-pointer hover:text-[#ffc727]">
                            <LiaChevronRightSolid/>
                            {ele}
                        </li>
                    ))}
                </ul>
              </div>

              <div>
                 <h1 className="text-2xl font-semibold capitalize">important links</h1>

                <ul className="flex flex-col space-y-2 capitalize">
                    {links.map((ele , ind) => (
                        <li className="flex gap-2 items-center cursor-pointer hover:text-[#ffc727]">
                            <LiaChevronRightSolid/>
                            {ele}
                        </li>
                    ))}
                </ul>
              </div>

              <div>
                 <h1 className="text-2xl font-semibold capitalize">important links</h1>

                <ul className="flex flex-col space-y-2 capitalize">
                    {links.map((ele , ind) => (
                        <li className="flex gap-2 items-center cursor-pointer hover:text-[#ffc727]">
                            <LiaChevronRightSolid/>
                            {ele}
                        </li>
                    ))}
                </ul>
                </div>  
          </div>
        </>
    )
}