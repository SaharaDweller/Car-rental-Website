import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { LuNotebookPen } from "react-icons/lu";

export default function Services(){
    const servicesItem = [
        {icon : <FaCameraRetro/> , title : "Best Price" , descprition : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Learn More",duration : "300"},
        {icon : <GiNotebook/> , title : "Fast and Safe" , descprition : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Learn More" ,duration : "700"},
        {icon : <LuNotebookPen/> , title :"Experience Drivers" , descprition : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Learn More" ,duration : "1200"}
    ]   
    return(
        <>
          <div className="flex flex-col space-y-8 px-8 py-8">
              <h1 className="text-3xl text-center font-semibold">Why Choose Us</h1>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4" >
            
                {servicesItem.map((ele , ind)=>(
                <div data-aos="fade-up" data-aos-delay={ele.duration} className="flex flex-col space-y-8 rounded-lg px-4 py-16 info" key={ind}>
                    <h1 className="mx-auto text-5xl">{ele.icon}</h1>
                    <h1 className="text-center">{ele.title}</h1>
                    <p className="px-16 text-center ">{ele.descprition}</p>
                </div>
                ))}
              </div>
          </div>
        </>
    )
}