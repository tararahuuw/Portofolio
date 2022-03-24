import React from "react"
import "./Home.css"
import hero from "../pic/hero.jpg"
import { Typewriter } from "react-simple-typewriter"
import { BsLinkedin,BsInstagram, BsGithub } from "react-icons/bs";
import { FaHtml5,FaAndroid,FaFigma } from 'react-icons/fa';

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Muhammad Fahmi Alamsyah</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter words={[" Frontend Developer", " Backend Developer", " Android Developer", " IOS Developer", " UI UX Designer", " Project Manager", " Founder of Lentera Rantau"]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>"Yesterday is History, Tomorrow is Mystery, and Today is a Gift"</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                  <button className='btn_shadow'>
                    <BsLinkedin />
                  </button>
                  <button className='btn_shadow'>
                    <BsInstagram />
                  </button>
                  <button className='btn_shadow'>
                    <BsGithub />
                  </button>
                </div>
              </div>
              <div className='col_1'>
                <h4>BEST SKILL ON</h4>
                <button className='btn_shadow'>
                  <FaAndroid />
                </button>
                <button className='btn_shadow'>
                  <FaHtml5 />
                </button>
                <button className='btn_shadow'>
                  <FaFigma />
                </button>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
