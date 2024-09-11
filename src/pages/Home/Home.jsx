import React from 'react'
import Xidmetlerimiz from '../../components/Xidmetlerimiz/Xidmetlerimiz'
import Partniyorlar from '../../components/Partniyorlar/Partniyorlar'
import Xidmetler from '../../components/Xidmetler/Xidmetler'
import Avtopark from '../../components/Avtopark/Avtopark'
import Media from '../../components/Media/Media'
import Comments from '../../components/Comments/Comments'
import Xerite from '../../components/Xerite/Xerite'
import Sale from '../../components/Sale/Sale'

const Home = () => {
  return (
    <div>
        <Xidmetlerimiz/>
        <Partniyorlar/>
        <Xidmetler/>
        <Avtopark/>
        <Media/>
        <Comments/>
        <Xerite/>
        <Sale/>
    </div>
  )
}

export default Home