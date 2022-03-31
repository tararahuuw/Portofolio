import React, { useState } from "react"

const Card = (props) => {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add("active-modal")
  } else {
    document.body.classList.remove("active-modal")
  }
  return (
    <>
      <div className='box btn_shadow '>
        <div className='img'>
          <img src={require(`${props.image}`)} alt='' />
        </div>
        <div className='category d_flex'>
          <span onClick={toggleModal}>{props.desc_one}</span>
          <label>
            <i className='far fa-heart'></i> {props.date}
          </label>
        </div>
        <div className='title'>
          <h2 onClick={toggleModal}>{props.title_one}</h2>
          <a href='#popup' className='arrow' onClick={toggleModal}>
            <i class='fas fa-arrow-right'></i>
          </a>
        </div>
      </div>

      {/* Popup box */}
      {modal && (
        <div className='modal modal-blog'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content'>
            <div className='modal-img left'>
              <img src={require(`${props.image}`)} alt='' />
            </div>
            <div className='modal-img left'>
              <img src={require(`${props.image1}`)} alt='' />
            </div>
            <div className='modal-img left'>
              {props.image2 == "" ? null : <img src={require(`${props.image2}`)} alt='' />}
            </div>
            <div className='modal-text right'>
              <span>{props.date}</span>
              <h1>{props.title_one}</h1>
              <p>{props.desc_one}</p>

              <button className='close-modal btn_shadow' onClick={toggleModal}>
                X
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Card
