import React from 'react'
import './Partniyorlar.css'
import sponsor from '../../images/sponsor.png'

const Partniyorlar = () => {
    return (
        <>
            <div className='partniyor-sec'>
                <div className='lorems'>
                    <h3 className='lorem-title'>Lorem ipsum dolor sit amet consectetur</h3>
                    <p className='p-title'>A videoconference was held with the
                        participation of the acting chairman of
                        the Customs Cooperation Council of the
                        World A videoconference was held with the
                        participation of the acting chairman of
                        the Customs Cooperation Council of the World</p>
                </div>
                <div className='loremboxs'>
                    <div className='lorembox'>
                        <div className='reqem-plus'>
                            <p className='reqem'>25</p>
                            <p className='plus'>+</p>
                        </div>
                        <p className='loremipsum'>Lorem Ipsum</p>
                    </div>
                    <div className='lorembox'>
                        <div className='reqem-plus'>
                            <p className='reqem'>105K</p>
                            <p className='plus'>+</p>
                        </div>
                        <p className='loremipsum'>Lorem Ipsum</p>
                    </div>
                    <div className='lorembox'>
                        <div className='reqem-plus'>
                            <p className='reqem'>20</p>
                            <p className='plus'>+</p>
                        </div>
                        <p className='loremipsum'>Lorem Ipsum</p>
                    </div>
                </div>
            </div>
            <div>
                <img className='sponsorimg' src={sponsor} alt="" />
            </div>
        </>
    )
}

export default Partniyorlar