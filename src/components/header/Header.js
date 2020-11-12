import React, { useState } from 'react';

function Header() {
  const [isOpen, setOpen] = useState(false);

  const navClasses = isOpen ? 'block px-3 py-3 sm:flex' : 'hidden sm:flex';

  return (
    <header className="sm:flex items-center justify-between sm:py-3 pr-3">
      <div className="flex items-center justify-between">
        <article>
          <a href="/">
            <img src="/logo.png" alt="" className="h-20"/>
          </a>
        </article>
        <button type="button" className="text-gray-600 hover:text-gray-700 sm:hidden" onClick={() => setOpen(!isOpen)}>
          <svg className="h-6 w-6 fillCurrent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /> :
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            }

            </svg>
        </button>
      </div>
      <nav className={navClasses}>
        <ul className="sm:flex sm:justify-between">
          <li className="xs:rounded hover:bg-gray-200 px-1 py-2 sm:px-3 cursor-pointer">
            <a href="/" className="text-gray-700">Explore</a>
          </li>
          <li className="rounded hover:bg-gray-200 px-1 py-2 sm:px-3 cursor-pointer">
            <a href="/" className="text-gray-700">Designer</a>
          </li>
          <li className="rounded hover:bg-gray-200 px-1 py-2 sm:px-3 cursor-pointer">
            <a href="/" className="text-gray-700">Projects</a>
          </li>
        </ul>

      </nav>
    </header>
  )
}

export default Header;