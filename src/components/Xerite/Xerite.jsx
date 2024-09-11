import React from 'react'
import './Xerite.css'
import map from '../../images/map.png'

const Xerite = () => {
  return (
    <div className='xerite-sec'>
        <h3 className='faliyet'>Fəaliyyət göstərdiyimiz ölkələr</h3>
        <div className='maps'><img className='map' src={map} alt="" /></div>
    </div>
  )
}

export default Xerite