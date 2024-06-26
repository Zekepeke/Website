import { NavLink } from "react-router-dom"

const Navbar = () => {
    const bolded = 'w-30 h-10 rounded-lg purple-gradient_bg items-center justify-center flex p-1 text-green-600 font-bold';
    const nonbolded = 'w-30 h-10 items-center justify-center flex text-green-600';
  return (
    <header className =" header">
        <div className="container mx-auto flex justify-between items-center p-5">
            <NavLink to = "/" className = "w-10 h-10 rounded-lg bg-purple-600 items-center justify-center flex font-bold shadow-sm">
                <p className = "green-gradient_text">EL</p>
            </NavLink> 
            <nav className = "flex text-lg gap-7 font-poppins">
                <NavLink to = "/about" className={({ isActive }) => isActive ? bolded : nonbolded}   
                >
                    About
                </NavLink>
                <NavLink to = "/projects" className={({ isActive }) => isActive ? bolded : nonbolded}      
                >
                    Projects
                </NavLink>
            </nav>
        </div>
    </header>
  )
}
 
export default Navbar