import React from "react"
import "./Portfolio.css"
import Card from "./Card"
import Portfolio_data from "./Portfolio_data"

const Portfolio = () => {
  return (
    <>
      <section className='Portfolio top' id='portfolio'>
        <div className='container'>
          <div className='heading text-center '>
            <h4>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
            <h1>My Portfolio</h1>
          </div>

          <div className='content grid'>
            {Portfolio_data.map((value, index) => {
              return <Card key={index} image={value.image} category={value.category} date={value.date} title={value.title} desc={value.desc} image2 = {value.image1} image3 = {value.image2} link = {value.link}/>
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio
