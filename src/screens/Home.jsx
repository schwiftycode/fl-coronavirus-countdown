import React, { useEffect } from 'react'
import { Timer } from '../components'

const Home = props => {

    useEffect(_ => {
        let adsbygoogle = window.adsbygoogle || []
        adsbygoogle.push({});
    }, [])

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
                <input type="button" value="Click Here" />
            </div>
            {/* Ad Space */}
            <div className="ads-container">

                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                <ins className="adsbygoogle"
                    data-ad-client="ca-pub-9490678581055546"
                    data-ad-slot="6385376263"
                    data-ad-format="auto"
                    data-full-width-responsive="true"></ins>

            </div>
        </div>
    )
}

export default Home