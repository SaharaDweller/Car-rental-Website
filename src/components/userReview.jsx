import { FaUserCircle } from "react-icons/fa";
import { GiDuration } from "react-icons/gi";

export default function UserReview(){
    const user =[{name : "kaya" , duration : "800"} , {name : "sara" , duration : "1200"} , {name : "jack" , duration : "1600"}]
    
    return(
        <>
          <div className="flex flex-col space-y-4 px-8 py-16">
            <h1 data-aos="fade-up" data-aos-delay="300" className="capitalize text-3xl font-semibold text-center">what our clients say about us</h1>
            <p data-aos="fade-up" data-aos-delay="500" className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, sequi!</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {user.map((ele , ind) => (
                     <div data-aos="fade-up" data-aos-delay={ele.duration} key={ind} className="flex flex-col space-y-4 text-center pt-8 review rounded-lg py-8">
                        <FaUserCircle className="mx-auto text-5xl"/>
                        <p className="text-2xl">⭐⭐⭐⭐⭐</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        <p className="text-xl">{ele.name}</p>
                     </div>
                ))}
            </div>
          </div>
        </>
    )
}