import React, { useState } from 'react'

const Modal = ({setOpenModal, onePizza}) => {
    const [count, setCount] = useState(1) 
    const [price, setPrice] = useState(count) 
  return (
    <div className="modal-back">
        <div className='modal'>
            <button onClick={() => setOpenModal(false)}><h1><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path></svg></h1></button>
            <div className="modal-main">
                <div className="modal-main_img">
                        <img src={onePizza.image} alt="" />
                </div>
                <div className="modal-main_text">
                    <div className="desc">

                                <h1>{onePizza.title}</h1>
                                <p>{onePizza.description}</p>
                    </div>
                    <div className="counts">
                    <button onClick={() => setCount((count) => count - 1, price * count)}>-</button>
                        <h2>{count}</h2>
                    <button onClick={() => setCount((count) => count + 1)}>+</button>         
                    </div>
                    <div className="prices">
                        <h2>{onePizza.price }.000 UZS</h2>
                        {/* <a href="">dfrs</a> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Modal;