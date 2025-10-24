function Nav(){
    return(
        <>
        <nav className="flex justify-center md:justify-between mt-5 container mx-auto ">
        <ul className="flex gap-3 pl-[71px] md:p-o">
            <li className="hover:cursor-pointer text-[14px]">home</li>
            <li className="hover:cursor-pointer text-[14px]">product</li>
            <li className="hover:cursor-pointer text-[14px]">company</li>
            <li className="hover:cursor-pointer text-[14px]">sale</li>
        </ul>
        <p className=" text-4xl hidden md:block">MEJIWOO</p>
        </nav>
        </>
    )
}

export default Nav;