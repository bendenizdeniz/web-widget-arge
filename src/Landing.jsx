import React from 'react'
import LandingLogo from "./registerlogo.svg"
import Stoneity from "./Stoneity.svg"
import "./Landing.css"

const Landing = () => {
    return (
        <>
            <div className="landing">
                <img id="logo" src={LandingLogo} />
                <img id="stoneity" src={Stoneity} />
            </div>
        </>
    )
}

export default Landing