import React, { useState } from "react"
import "./header.css"
import logo from "../pic/logo.png"

const Header = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })
  // Toogle Menu
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='logo'>
          <h1>Alamsyah</h1>
        </div>

        <div className='navlink'>
          <ul className="ul-link">
            <li>
              <a href='#home'>Home</a>
            </li>
            <li>
              <a href='#features'>Skills</a>
            </li>
            <li>
              <a href='#portfolio'>Portfolio</a>
            </li>
            <li>
              <a href='#resume'>Resume</a>
            </li>
            <li>
              <a href='#blog'>Certification</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header
