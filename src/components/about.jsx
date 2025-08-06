import car from '../assets/images/car.png'

export default function About(){
    return(
        <>
          <div className='grid grid-cols-1 md:grid-cols-2 justify-between items-center px-8 pt-8 pb-4 night'>
            <div data-aos="slide-right" data-aos-delay="300">
                <img src={car}/>
            </div>

            <div className='felx felx-col space-y-5'>
                <h1 data-aos="fade-up" data-aos-delay="300" className='text-2xl sm:text-4xl font-semibold'>About Us</h1>
                <p data-aos="fade-up" data-aos-delay="500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sequi sunt doloribus?</p>
                <p data-aos="fade-up" data-aos-delay="700">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button data-aos="fade-up" data-aos-delay="800" className='btn px-4 py-2 rounded-lg cursor-pointer tracking-wider'>Get Started</button>
            </div>
          </div>
        </>
    )
}