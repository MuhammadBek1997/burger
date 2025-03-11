import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
        <nav className="navbar" id="navbar">
            <img src="/Logo.png" alt="logo"/>
            <div className="nav-list">
                <Link to={'/'}>
                    Nega biz
                </Link>
                <Link to={'/menu'}>
                    Menu
                </Link>
                <Link to={'/order'}>
                    Buyurtma berish
                </Link>
            </div>
            <button>
                $
            </button>
        </nav>
  )
}

export default Navbar