import React from 'react'
import './Avtopark.css'
import yellowtruck from '../../images/yellowtruck.png'

const Avtopark = () => {
    return (
        <>
            <div className='avtopark-sec'>
                <h3 className='lorem-title'>Bizim avtopark</h3>
            </div>
            <div className='truckboxs'>
                <div className='truckbox'>
                    <p className='soyuduculu'>Soyuduculu</p>
                    <p className='metr'>5.1 metr / 5 ton</p>
                    <img className='ytruck' src={yellowtruck} alt="" />
                </div>
                <div className='truckbox'>
                    <p className='soyuduculu'>Soyuduculu</p>
                    <p className='metr'>5.1 metr / 5 ton</p>
                    <img className='ytruck' src={yellowtruck} alt="" />
                </div>
                <div className='truckbox'>
                    <p className='soyuduculu'>Soyuduculu</p>
                    <p className='metr'>5.1 metr / 5 ton</p>
                    <img className='ytruck' src={yellowtruck} alt="" />
                </div>
                <div className='truckbox'>
                    <p className='soyuduculu'>Soyuduculu</p>
                    <p className='metr'>5.1 metr / 5 ton</p>
                    <img className='ytruck' src={yellowtruck} alt="" />
                </div>
            </div>
        </>
    )
}

export default Avtopark