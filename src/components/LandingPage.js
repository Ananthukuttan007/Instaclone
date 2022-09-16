import React from 'react'
import './LandingPage.css'

function LandingPage() {
    return (
        <>
            <div className="container" >
                <div className="image">
                    <img src="images/landingPage.png" alt="EntryLogo" style={{ height: "90vh" }} />
                </div>
                <div className="entryBox">
                    <h1 className='enterText'>10x Team 04</h1>
                    <button className='enter'>Enter</button>
                </div>
            </div>
        </>
    )
}

export default LandingPage