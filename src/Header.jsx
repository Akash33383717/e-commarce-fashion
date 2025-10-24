import img1 from './assets/7.png'
import img2 from './assets/5.png'
import img3 from './assets/8.png'
import img4 from './assets/aa.png'
function Header(){
    return(
        <>
        <section className="container mx-auto bg-[#F7F6F0] h-auto mt-5 ">
        <div className='grid grid-cols-2 md:grid-cols-4 place-items-center p-2'>
            <img src={img2} alt=""  className='h-[540px] w-fit'/>
            <img src={img1} alt="" className='h-[540px] w-fit'/>
            <div className='col-span-2 md:col-span-1'><img src={img4} alt=""  className='py-10'/></div>
            <img src={img3} alt="" className='h-[540px] w-fit col-span-2 md:col-span-1'/>
        </div>
        </section>
        </>
    )
}

export default Header;