import React from 'react'

const Home = ({navigate}) => {
  
  

  return (
    <header>
    <div className="hero">
            <div className="hero-cont">
                <button className="new-menu" onClick={()=>navigate('/newmenu')}>
                    Yangi menu
                </button>
                <h1 className="hero-head">
                    Web Burger
                </h1>
                <p className="hero-p">
                    Biz menyumizni yangiladik, mavsumiy yangi mahsulotlarni tatib ko'rishga shoshiling va burgerlarimizdan ajoyib ta'midan bahramand bo'ling. Biz siz uchun tanlangan marmar mol go'shtidan shaharning eng yaxshi burgerlarini tayyorlaymiz.
                </p>
                <button className="menu" onClick={()=>navigate('/menu')} >
                    Menuni ko'rish
                </button>
            </div>
        </div>
        </header>
  )
}

export default Home