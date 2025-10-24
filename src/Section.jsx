import img5 from './assets/4.png'
import img6 from './assets/1.jpg'
import img7 from './assets/2.jpg'
import img8 from './assets/6.png'
import img9 from './assets/3.jpg'

function Section(){
    return(
        <>
        <hr className='border border-gray-500/20 py-10 my-8' />
        <section className='container mx-auto mt-10 flex flex-col items-center justify-center'>
              <div className='text-2xl p-3 md:text-4xl font-bold'><p>Season Collections</p></div>
              <div className='mt-5 space-y-2 md:gap-5 lg:gap-51 grid grid-cols-1 md:grid-cols-3 w-full place-items-center text-center'>
                <div className='space-x-1 space-y-1'>
                  <img src={img5} alt="" className='h-[500px] rounded-2xl shadow-lg w-[400px]'/>
                  <p className='p-1 pt-5 text-xl lg:text-2xl'>SPRING</p>
                  <a className='text-sm  hover:font-bold hover:text-black hover:bg-blue-300/30 px-2 py-1 rounded-[20px] duration-400' href="">More</a>
                </div>
                <div className='space-x-1 space-y-1'>
                  <img src={img6} alt="" className='h-[500px] rounded-2xl shadow-lg w-[400px]'/>
                  <p className='p-1 pt-5 text-xl lg:text-2xl'>SUMMER</p>
                  <a className='text-sm  hover:font-bold hover:text-black hover:bg-blue-300/30 px-2 py-1 rounded-[20px] duration-400' href="">More</a>
                </div>
                <div className='space-x-1 space-y-1'>
                  <img src={img7} alt="" className='h-[500px] rounded-2xl shadow-lg w-[400px]'/>
                  <p className='p-1 pt-5 text-xl lg:text-2xl'>WINTER</p>
                  <a className='text-sm  hover:font-bold hover:text-black hover:bg-blue-300/30 px-2 py-1 rounded-[20px] duration-400' href="">More</a>
                </div>
              </div>
             </section>
             <hr className='border border-gray-400/20 py-10 my-5' />
             <section className='container mx-auto mt-10 flex flex-col items-center justify-center mb-30'>
              <div className='text-2xl p-3 md:text-4xl font-bold'><p>Our Best Seller</p></div>
              <div className='mt-5 space-y-2 md:gap-5 lg:gap-51 grid grid-cols-1 md:grid-cols-3 w-full place-items-center text-center'>
                <div className='space-x-1 space-y-1'>
                  <img src={img8} alt="" className='h-[500px] rounded-2xl shadow-lg w-[400px]'/>
                  <p className='p-1 pt-5 text-xl lg:text-2xl'>Euphoria Crop Blouse</p>
                  <a className='text-sm  hover:font-bold hover:text-black hover:bg-blue-300/30 px-2 py-1 rounded-[20px] duration-400' href="">Rp. 125.000</a>
                </div>
                <div className='space-x-1 space-y-1'>
                  <img src={img9} alt="" className='h-[500px] rounded-2xl shadow-lg w-[400px]'/>
                  <p className='p-1 pt-5 text-xl lg:text-2xl'>Venus Halter Dress</p>
                  <a className='text-sm  hover:font-bold hover:text-black hover:bg-blue-300/30 px-2 py-1 rounded-[20px] duration-400' href="">Rp. 180.000</a>
                </div>
                <div className='space-x-1 space-y-1'>
                  <img src={img5} alt="" className='h-[500px] rounded-2xl shadow-lg w-[400px]'/>
                  <p className='p-1 pt-5 text-xl lg:text-2xl'>Snap Pure Blouse</p>
                  <a className='text-sm  hover:font-bold hover:text-black hover:bg-blue-300/30 px-2 py-1 rounded-[20px] duration-400' href="">Rp. 129.000</a>
                </div>
              </div>
             </section>
        </>
    )
}

export default Section;