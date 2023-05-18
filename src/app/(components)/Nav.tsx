import { NextPage } from "next"

const Nav: NextPage = () => {
    return (
        <nav className="w-full h-16 flex justify-between bg-black px-4">
            <div className="flex flex-col justify-center">
                <h1 className="text-xl text-white">Anthony Scott</h1>
                
            </div>

            <div className="flex items-center gap-4 ">
                <p className="text-white">MENU</p>
                <div className="border-2 border-2 w-8 h-8 rotate-45"></div>
            </div>
            
        </nav>
    )
}

export default Nav;