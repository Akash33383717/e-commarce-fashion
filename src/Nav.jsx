function Nav(){
    return(
        <>
        <nav className="flex justify-center md:justify-between mt-5 container mx-auto h-auto">
        <ul className="flex gap-3 pl-[71px] md:p-o">
            <li className="text-center items-center hover:cursor-pointer text-[14px] hover:bg-blue-500/30 px-3 hover:font-semibold rounded-[50px] duration-350">home</li>
            <li className="text-center items-center hover:cursor-pointer text-[14px] hover:bg-blue-500/30 px-3 hover:font-semibold rounded-[50px] duration-350">product</li>
            <li className="text-center items-center hover:cursor-pointer text-[14px] hover:bg-blue-500/30 px-3 hover:font-semibold rounded-[50px] duration-350">company</li>
            <li className="text-center items-center hover:cursor-pointer text-[14px] hover:bg-blue-500/30 px-3 hover:font-semibold rounded-[50px] duration-350">sale</li>
        </ul>
        <p className=" text-4xl hidden md:block text-center items-center ">MEJIWOO</p>
        </nav>
        </>
    )
}

export default Nav;