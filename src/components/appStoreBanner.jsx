import { FaGooglePlay } from "react-icons/fa";
import { ImAppleinc } from "react-icons/im";

export default function AppStoreBanner(){
    return(
        <>
          <div className="px-8 py-8">
            <div className="bg-[#ffc727] rounded-xl px-4 py-10 text-center text-black flex flex-col space-y-4" >
                <h1 data-aos="fade-up" data-aos-delay="300" className="capitalize text-4xl font-semibold">get started with your app</h1>
                <p data-aos="fade-up" data-aos-delay="500">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <p data-aos="fade-up" data-aos-delay="600">Lorem ipsum dolor sit.</p>

                <div data-aos="fade-up" data-aos-delay="900" className='grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto items-center'> 
                    <div className="flex gap-4 items-center bg-black rounded-xl text-white px-4 py-1 cursor-pointer">
                        <FaGooglePlay className="text-3xl"/>
                        <div className="flex flex-col">
                            <h1 className="text-sm">Get app on</h1>
                            <h1 className="font-semibold text-xl">GOOGLE PLAY</h1>
                        </div>
                    </div>

                    <div className="flex gap-4 items-center bg-black rounded-xl text-white px-4 py-1 cursor-pointe">
                        <ImAppleinc className="text-3xl"/>
                        <div className="flex flex-col">
                            <h1 className="text-sm">Download app on</h1>
                            <h1 className="text-2xl font-semibold">APP STORE</h1>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}