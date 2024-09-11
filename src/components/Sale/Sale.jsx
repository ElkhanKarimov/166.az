import React from 'react'
import './Sale.css'
import sale from '../../images/sale.png'

const Sale = () => {
    return (
        <div>
            <div className='sale'>
                <img className='saleimg' src={sale} alt="" />
            </div>
        </div>
    )
}

export default Sale