import React from 'react'

const Home = props => {
    return (
        <div className="Home Screen">
            {/* Logo */}
            <img className="logo" src={require('../assets/images/cqc-logo.png')} />
            <div className="content">
                {/* Timer Component */}
                {/* Info Text */}
                <p>To learn more about the ‘Stay at Home’ order issued by Governor Ron Desantis</p>
                {/* Info Button */}
                <input type="button" value="Click Here" />
            </div>
            {/* Ad Space */}
            <div className="ads-container"></div>
        </div>
    )
}

export default Home