import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import logoGA from '../../assets/image/GALogos.png'
// import GALogo from '../../assets/image/GA-logo.png'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  {
    path: '/',
    display: 'Home',
  },
  {
    path: '/about',
    display: 'About',
  },
  {
    path: '/services',
    display: 'Services',
  },
  {
    path: '/study',
    display: 'Study Abroad',
  },
  {
    path: '/scholarship',
    display: 'Scholarship',
  },
  {
    path: '/contact',
    display: 'Contact',
  },
]

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const topFunction = () => {
    setNav(!nav)
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
  return (
    <header className="flex fixed bg-[#000] z-10 items-center w-full h-[70px] leading-10 ">
      <div className="container">
        <div className="text-gray-500  text-sm flex justify-between items-center ">
          {/* logo  */}
          <div className="flex items-center gap-2 md:pl-1 pl-4">
            <Link to="/">
              <img className="w-16 h-12 cursor-pointer" src={logoGA} alt="" />
            </Link>
            <div>
              <h1 className="text-xl text-[#09adfe] font-bold ">
                Global Academia
              </h1>
              <p className="text-yellow-400">Education Consultants Firm</p>
            </div>
          </div>

          {/* nav item  */}
          <div className="flex items-center gap-4">
            <ul className="menu hidden md:flex items-center font-bold gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    onClick={topFunction}
                    to={link.path}
                    className={navClass =>
                      navClass.isActive
                        ? 'text-[#09adfe] text-[16px]  font-bold'
                        : 'text-[16px] text-[#ffffff] font-bold hover:text-[#09adfe]'
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
              <li>
                <NavLink to="/contact">
                  <button className="bg-[#09adfe] text-[#ffffff] text-[14px] py-2 px-5 rounded-lg">
                    Admission Open
                  </button>
                </NavLink>
              </li>
            </ul>
          </div>
          <div onClick={topFunction} className="md:hidden block  mr-8 ">
            {!nav ? (
              <AiOutlineMenu size={25} className="text-[#09adfe]" />
            ) : (
              <AiOutlineClose className="text-red-500" size={25} />
            )}
          </div>
        </div>

        {/* mobile menu  */}

        <div
          className={
            !nav
              ? 'hidden'
              : 'absolute z-10 bg-[#000] font-semibold w-full  h-screen md:hidden px-6 pt-4'
          }
        >
          <ul className="menu space-y-4  font-bold gap-[2.7rem]">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  onClick={topFunction}
                  to={link.path}
                  className={navClass =>
                    navClass.isActive
                      ? 'text-[#09adfe] text-[16px]  font-bold'
                      : 'text-[16px] text-[#ffffff] font-bold hover:text-[#09adfe]'
                  }
                >
                  {link.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Navbar
