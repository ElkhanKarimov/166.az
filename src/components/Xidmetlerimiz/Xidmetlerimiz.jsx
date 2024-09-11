import React from 'react'
import './Xidmetlerimiz.css'
import uzbek from '../../images/uzbek.png'
import kazak from '../../images/kazak.png'
import aze from '../../images/aze.png'
import poland from '../../images/poland.png'
import dubai from '../../images/dubai.png'
import rum from '../../images/rum.png'
import china from '../../images/china.png'
import truck from '../../images/truck.png'
import { PiArrowLineUpRightLight } from "react-icons/pi";
import { Link } from 'react-router-dom'


const Xidmetlerimiz = () => {
    return (
        <div className='xidmet-sec'>
            <div>
                <h2 className='lorem'>Lorem ipsum dolor sit amet consectetur. <span className='slorem'>Magna</span> tellus nibh lectus congue amet.</h2>
            </div>
            <div className='countries'>
                <div className='country'>
                    <img className='flag' src={uzbek} alt="" />
                    <p>Uzbekstan</p>
                </div>
                <div className='country'>
                    <img className='flag' src={kazak} alt="" />
                    <p>Kazakhstan</p>
                </div>
                <div className='country'>
                    <img className='flag' src={aze} alt="" />
                    <p>Azerbaijan</p>
                </div>
                <div className='country'>
                    <img className='flag' src={poland} alt="" />
                    <p>Poland</p>
                </div>
                <div className='country'>
                    <img className='flag' src={dubai} alt="" />
                    <p>Dubai</p>
                </div>
                <div className='country'>
                    <img className='flag' src={rum} alt="" />
                    <p>Romania</p>
                </div>
                <div className='country'>
                    <img className='flag' src={china} alt="" />
                    <p>China</p>
                </div>
            </div>
            <div className='infoboxs'>
                <div className='xidmetbox'>
                    <p className='box1-p'>Xidmətlərimiz</p>
                    <img className='truckpic' src={truck} alt="" />
                    <Link to="transport"><button className='send'><PiArrowLineUpRightLight /></button></Link>
                </div>
                <div className='phm'>
                    <div className='partniyorbox'>
                        <p className='box2-p'>Partnyorlar</p>
                        <button className='send'><PiArrowLineUpRightLight /></button>
                    </div>
                </div>
                <div className='hm'>
                    <div className='haqqbox'>
                        <p className='box2-p'>Haqqımızda</p>
                        <Link to="/sirketimiz/komandamiz/sirketimiz"><button className='send'><PiArrowLineUpRightLight /></button></Link>
                    </div>
                    <div className='haqqbox'>
                        <p className='box2-p'>Müştəri Rəyləri</p>
                        <button className='send'><PiArrowLineUpRightLight /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Xidmetlerimiz