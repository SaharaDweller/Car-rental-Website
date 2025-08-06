import carLight from '../assets/images/carlight.png'
import carNight from '../assets/images/carNight.png'

export default function Content(props){
    return(
        <>
          <div className="px-8 space-y-4 grid grid-cols-1 md:grid-cols-2 justify-between items-center">
               <div className='space-y-8 px-4 order-2 md:order-1' >
                    <h1 data-aos="fade-up" data-aos-delay="300" className='primary text-xl' >Effortless</h1>
                    <h1 data-aos="fade-up" data-aos-delay="500" className='text-6xl font-semibold'>Car Rental</h1>
                    <p data-aos="fade-up" data-aos-delay="700" className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ut
                         culpa nesciunt aliquam error quas quam praesentium in sit sint!
                    </p>

                    <button data-aos="fade-up" data-aos-delay="900" className='bg-primary tracking-wider px-4 py-2 rounded-lg hover:scale-105 transition-all duration-300 btn2' >Get Started</button> 
               </div>

               <div data-aos="fade-up" data-aos-delay="1000" className='relative justify-center order-1 md:order-2'> 
                  <img className='items-center w-full max-w-[450px] h-auto mx-auto' src= {props.theme === "light" ? carLight : carNight}/>
               </div>
          </div>
        </>
    )
}