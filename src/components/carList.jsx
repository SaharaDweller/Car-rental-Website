import { GiDuration } from 'react-icons/gi'
import car1 from '../assets/images/car.png'

export default function CarList(){
    const carList = [
        {img : car1 , name : "bmw ux" , price : "100" , duration : 700 } ,
        {img : car1 , name : "kia ux" , price : "120" , duration : 1100 } ,
        {img : car1 , name : "toyota ux" , price : "140" , duration : 1500 } ,
    ]

    return(
        <>
          <div className='flex flex-col space-y-8 px-8 py-16 night'>
                <h1 data-aos="fade-up" data-aos-delay="300"  className='text-4xl font-semibold'>Lorem, ipsum dolor.</h1>
                <p data-aos="fade-up" data-aos-delay="500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
                    {carList.map((ele , ind) => (
                        <div data-aos="fade-up" data-aos-delay={ele.duration} key={ind} className='border-2 border-gray-300 rounded-lg p-4 flex flex-col group hover:border-[#ffc727]'>
                             <h1 className='font-semibold text-xl'>12km</h1>
                             <img src={ele.img} className='list'/>
                             <p className='font-semibold text-xl text-[#ffc727]'>{ele.name}</p>
                             <div className='flex justify-between'>
                                <h1>${`${ele.price}/Day`}</h1>
                                <p className='font-semibold capitalize'>details</p>
                             </div>
                        </div>
                    ))}
                </div>

                <button data-aos="fade-up" data-aos-delay="1800" className='btn px-4 py-2 rounded-lg w-fit mx-auto cursor-pointer'>Get Started</button>
          </div>
        </>
    )
}