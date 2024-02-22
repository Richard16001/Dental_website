import React from 'react'
import { close, logo, menu }  from '../assets'
import { navLinks } from '../constants'
import { useState } from 'react'

const NavBar = () => {
  // useStateSnippet for mobile view 
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      
      {/* Renders a small logo icon */}
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]"/>

      {/* NavBar Items */}
      <u1 className="list-none sm:flex hidden justify-end items-center flex-1">
        
        {/* map over navlinks and instantly return something*/}
        {navLinks.map((nav, index) => (
          <li 
            // Every list item has a key since we are inside a map
            key={nav.id}
            // Assigns font and size to NavBar links with proper spacing inbetween 
            //  -Also the dynamic ${index === ...} portion of code makes sure the last element
            //   in the NavBar does not share the extra spacing used to separate each element.
            //   Dynamic code portion simulates an if else statement. $ == if, ? == then, : == else.
            className={`font-poppins font-normal cursor-pointer text-[32px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}
          >
            {/* renders a reference in order to go to a specific point when we click on the link*/}
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </u1>
      
      {/* Hides the NavBar items in mobile view */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        {/* menu image, if toggle is off, show menu icon, else show X icon */}
        <img 
          src={toggle ? close : menu} 
          alt="menu" 
          className="w-[28px] h-[28px] object-contain" 
          onClick={() => setToggle((prev) => !prev)}
        />

        {/* opens the drop down menu after pressing menu button*/}
        <div className={`${toggle ? 'flex' : 'hidden' } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          
          {/* Same code from Normal website view NavBar*/}
          <u1 className="list-none flex flex-col justify-start items-center flex-1">
            {navLinks.map((nav, index) => (
              <li 
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[32px] ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'} text-white`}
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </u1>
          {/* Same code from Normal website view NavBar*/}
        </div>
      </div>
    </nav>
  )
}

export default NavBar