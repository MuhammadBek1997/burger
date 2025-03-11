import React from 'react'

const Order = () => {
  return (
    <div className='order-section'>
        <h2 className="order-top-text">
                Buyurtma berish
            </h2>
            <div className="img-box">
                <img src="/box.png" alt=""/>
            </div>
            <div className="order-cont">
                <div style={{width:'250px'}}>
                    <h3>
                        Barcha ma'lumotlarni to'ldiring va menejerimiz buyurtmani tasdiqlash uchun siz bilan bog'lanadi    
                    </h3>
                </div>
                <br/>
                <div className="input-grad">
                    <input type="text" className="order-input"/>
                </div>
                <div className="input-grad">
                    <input type="text" className="order-input"/>
                </div>
                <div className="input-grad">
                    <input type="text" className="order-input"/>
                </div>
                <button className="orderBtn">
                    Buyutma berish
                </button>
            </div>
    </div>
  )
}

export default Order