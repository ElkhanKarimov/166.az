import React, { useState } from 'react'
import './Navbar.css'
import { PiCreditCard } from "react-icons/pi";
import { FaAngleDown } from "react-icons/fa6";
import { PiPhoneLight } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {

    const [isHamburgerSidebarVisible, setHamburgerSidebarVisible] = useState(false);

    const toggleHamburgerSidebar = () => {
        setHamburgerSidebarVisible(!isHamburgerSidebarVisible);
    };
    return (
        <div>
            <nav className='navbar'>
                <div className='up-navbar'>
                    <button className='fk-btn'><button className='f-btn'>Fərdi müştərilər</button><p className='kor'>Korporativ müştirilər</p></button>
                    <div className='odenis-eng'>
                        <div>
                            <p className='odenis'><span className='creditcard'><PiCreditCard /></span> Onlayn ödəniş</p>
                        </div>
                        <div>
                            <p className='eng'>Eng <span className='dropdown'><FaAngleDown /></span></p>
                        </div>
                    </div>
                </div>
                <div className='down-navbar'>
                    <Link to=""><div><img src={logo} alt="" /></div></Link>
                    <div class="search-container">
                        <i><IoSearch className='fsearch' /></i>
                        <input type="text" placeholder="Search" />
                    </div>
                    <div className='menu-btn'>
                        <div className='menuLinks'>
                            <Link to=""><p className='menuLink'>Əsas səhifə</p></Link>
                            <Link to="/sirketimiz/komandamiz/sirketimiz"><p className='menuLink'>Şirkətimiz <span className='svg'><FaAngleDown /></span></p></Link>
                            <Link to="transport"><p className='menuLink'>Xidmətlər <span className='svg'><FaAngleDown /></span></p></Link>
                            <Link><p className='menuLink2'>Blog <span className='svg'><FaAngleDown /></span></p></Link>
                            <Link><p className='menuLink2'>Əlaqə</p></Link>
                        </div>
                        <div><button className='call-btn'><span className='phone'><PiPhoneLight className='phone' /></span> Book a call</button></div>
                    </div>
                    <div className='hamburger'>
                        <RxHamburgerMenu className='hambIcon' onClick={toggleHamburgerSidebar} />
                    </div>
                    <div className={`hamburger-sidebar ${isHamburgerSidebarVisible ? 'visible' : ''}`}>
                        <div className='close-hamsidebar'>
                            <IoMdClose className='close' onClick={toggleHamburgerSidebar} />
                        </div>
                        <div className='hamburgerLinks'>
                            <Link to=""><p className='menuLink'>Əsas səhifə</p></Link>
                            <Link to="/sirketimiz/komandamiz/sirketimiz"><p className='menuLink'>Şirkətimiz <span className='svg'><FaAngleDown /></span></p></Link>
                            <Link to="transport"><p className='menuLink'>Xidmətlər <span className='svg'><FaAngleDown /></span></p></Link>
                            <Link><p className='menuLink'>Blog <span className='svg'><FaAngleDown /></span></p></Link>
                            <Link><p className='menuLink'>Əlaqə</p></Link>
                        </div>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Navbar