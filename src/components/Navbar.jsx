import React, { useState } from 'react'
import { FaBars, FaSearch, FaShoppingBag, FaTimes, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    function toggleMenu(){
        setMenuOpen(!menuOpen)
    }
    const navItems = [
        {title: "Jewelry & Accessories", path: '/'},
        {title: "clothing & Shoes", path: '/'},
        {title: "Home & Living", path: '/'},
        {title: "Wedding & Party", path: '/'},
        {title: "Toys & Entertainment", path: '/'},
        {title: "Arts & Collections", path: '/'},
        {title: "Craft Supplies & Tools", path: '/'},
    ]
  return (
    <header className='max-w-screen-2xl xl:px-28 px-4 absolute top-0 right-0 left-0'>
        <nav className='flex justify-between items-center container md:py-4 pt-6 pb-3'>
            <h1 className='font-bold text-3xl ml-3'><Link to='/'>CartZone</Link></h1>
            <FaSearch className='text-black w-5 h-5 cursor-pointer hidden md:block'/>
            <div className='text-lg text-black sm:flex items-center gap-4 hidden'>
                <a href="/" className='flex items-center gap-2'><FaUser/>Account</a>
                <a href="/" className='flex items-center gap-2'><FaShoppingBag/>Shopping</a>
            </div>
            {/* navbar for smaller width */}
        <div>
            <button onClick={toggleMenu}>
                {menuOpen ? <FaTimes className='w-5 h-5 text-black'/> : <FaBars className='w-5 h-5 text-black'/>} 
            </button>
        </div>
        </nav>
        

        <hr/>
        {/* items */}
        <div className='pt-4'>
            <ul className='lg:flex justify-between items-center text-black hidden'>
                {navItems.map((item) => (
                    <li key={item.title} className='hover:text-orange-500'>
                        <Link to={item.path}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
        {/* mobile menu */}
        <div>
        <ul className={`bg-black text-white px-4 py-2 rounded ${menuOpen ? "" : "hidden"}`}>
                {navItems.map((item) => (
                    <li key={item.title} className='hover:text-orange-500 my-3 cursor-pointer'>
                        <Link to={item.path}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    </header>
  )
}

export default Navbar