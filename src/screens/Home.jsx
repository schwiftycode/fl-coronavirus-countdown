import React, { useEffect } from 'react'
import AdSense from 'react-adsense'
import { Timer } from '../components'

const Home = props => {

    return (
        <div className="Home Screen">
            {/* Logo */}
            <img className="logo" src={require('../assets/images/cqc-logo@2x.png')} />
            <div className="content">
                {/* Timer Component */}
                <Timer />
                {/* Info Text */}
                <p>To learn more about the ‘Stay at Home’ order issued by Governor Ron Desantis</p>
                {/* Info Button */}
                {/* <input type="button" value="Click Here" /> */}
                <a href="https://ocalacep.com/images/uploads/site_files/EO_20-91_Safer_At_Home_4-1-20_v1.pdf" target="_blank">Click Here</a>
            </div>
            {/* Ad Space */}
            <div className="ads-container">

                <AdSense.Google className="adsbygoogle"
                    client="ca-pub-9490678581055546"
                    slot="6385376263"
                    format="fluid"
                    responsive="true" />

            </div>
        </div>
    )
}

export default Home