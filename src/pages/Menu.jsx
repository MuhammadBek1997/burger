import React from 'react'

const Menu = ({menuData}) => {
  return (
    <div className='menu-section'>
        <h2 class="menu-top-text">
                O'z Burgeringizni Tanlang
            </h2>
            <div class="menu-list">
                {
                    menuData.map((item)=>{
                        return(
                            <div class="menu-item">
                            <img src={item.img} alt=""/>
                            <h3 class="item-head">
                                {item.title}
                            </h3>
                            <p class="item-info">
                                {item.desc}
                            </p>
                            <div class="menu-item-bottom">
                                <div class="prices">
                                    <h3 class="price">
                                        {item.price}$
                                    </h3>
                                    <p class="massa">
                                        {item.netto} gr
                                    </p>
                                </div>
                                <button class="order-btn">
                                    Buyurtma berish
                                    <img src="/Vector.png" alt=""/>
                                </button>
                            </div>
                        </div>
                        )
                    })
                }
            </div>
    </div>
  )
}

export default Menu