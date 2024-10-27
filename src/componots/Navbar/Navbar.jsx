const Navbar = () => {
return (
    <>
    <nav className="py-5 bg-[#4CC9FE] ">
        <div className="container">
            <div className="menu-row flex justify-between">
                <div className="logo">
                    <h1 className="text-[24px] text-[#3B1E54] font-bold">Alamin islam</h1>
                </div>
                <div className="navbar">
                    <ul className="flex gap-[15px]">
                        <li><a className="text-[18px] font-bold text-[#C62E2E]" href="/">Home</a></li>
                        <li><a className="text-[18px] font-bold text-[#C62E2E]" href="/About">About</a></li>
                        <li><a className="text-[18px] font-bold text-[#C62E2E]" href="/Blog">Blog</a></li>
                        <li><a className="text-[18px] font-bold text-[#C62E2E]" href="/Contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    </>
)
}

export default Navbar