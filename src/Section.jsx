import img5 from './assets/4.png'
import img6 from './assets/1.jpg'
import img7 from './assets/2.jpg'

function Section(){
    return(
        <>
        <section className='container mx-auto mt-10 flex flex-col items-center justify-center'>
              <div className='text-2xl p-3 md:text-4xl font-bold'><p>Season Collections</p></div>
              <div className='mt-5 space-y-2 md:gap-5 lg:gap-51 grid grid-cols-1 md:grid-cols-3 w-full place-items-center text-center'>
                <div className='space-x-1 space-y-1'>
                  <img src={img5} alt="" className='h-[500px] rounded-2xl shadow w-[400px]'/>
                  <p className='p-1 text-2xl md:text-4xl'>SPRING</p>
                  <a className='text-sm md:text-2xl hover:font-bold hover:text-black hover:bg-blue-300/30 px-2 py-1 rounded-[20px] duration-400' href="">More</a>
                </div>
                <div className='space-x-1 space-y-1'>
                  <img src={img6} alt="" className='h-[500px] rounded-2xl shadow w-[400px]'/>
                  <p className='p-1 text-2xl md:text-4xl'>SUMMER</p>
                  <a className='text-sm md:text-2xl hover:font-bold hover:text-black hover:bg-blue-300/30 px-2 py-1 rounded-[20px] duration-400' href="">More</a>
                </div>
                <div className='space-x-1 space-y-1'>
                  <img src={img7} alt="" className='h-[500px] rounded-2xl shadow w-[400px]'/>
                  <p className='p-1 text-2xl md:text-4xl'>WINTER</p>
                  <a className='text-sm md:text-2xl hover:font-bold hover:text-black hover:bg-blue-300/30 px-2 py-1 rounded-[20px] duration-400' href="">More</a>
                </div>
              </div>
             </section>
        </>
    )
}

export default Section;