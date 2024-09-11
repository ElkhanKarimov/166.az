import React from 'react'
import './Footer.css'
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import facebook from '../../images/facebook.png'
import insta from '../../images/insta.png'
import youtube from '../../images/youtube.png'
import linkedin from '../../images/in.png'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='ftr-sec'>
        <div className='up-ftr'>
            <div className='ftr-links'>
                <h4 className='link-title'>Xidmətlər</h4>
                <Link to="transport"><a className='ftr-link' href="">Transport</a></Link>
                <a className='ftr-link' href="">Logistika</a>
                <a className='ftr-link' href="">Yükdaşıma</a>
                <a className='ftr-link' href="">Xalça yuma</a>
                <a className='ftr-link' href="">Karqo xidməti</a>
                <a className='ftr-link2' href="">Hamısına bax <LiaLongArrowAltRightSolid /></a>
            </div>
            <div className='ftr-links'>
                <h4 className='link-title'>Faydalı linklər</h4>
                <Link to="/sirketimiz/komandamiz/sirketimiz"><a className='ftr-link' href="">Haqqımızda</a></Link>
                <Link to="/sirketimiz/komandamiz"><a className='ftr-link' href="">Bizim komanda</a></Link>
                <Link to="/sirketimiz/media"><a className='ftr-link' href="">Mediada biz</a></Link>
                <a className='ftr-link' href="">Bloq</a>
                <a className='ftr-link' href="">Tez-tez verilən suallar</a>
                <a className='ftr-link' href="">Qalereya</a>
            </div>
            <div className='ftr-links2'>
                <h4 className='link-title'>Əlaqə</h4>
                <p className='ftr-link3'>Ünvan : Yeni Həyat plaza 55 Zərifə Əliyeva, Bakı, Azərbaycan</p>
                <p className='ftr-link'>Əlaqə nömrəsi : +994 (50) 253 46 16</p>
                <p className='ftr-link'>Elektron poçt : info@166.az</p>
                <div className='social'>
                    <a href=""><img src={facebook} alt="" /></a>
                    <a href=""><img src={insta} alt="" /></a>
                    <a href=""><img src={youtube} alt="" /></a>
                    <a href=""><img src={linkedin} alt="" /></a>
                </div>
            </div>
        </div>
        <div className='down-ftr'>
            <p className='closing'>© 2022 | 166.az | Bütün hüquqlar qorunur <a className='az' href="">166tech.az</a></p>
        </div>
    </div>
  )
}

export default Footer