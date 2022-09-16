import React from 'react'
import './PostView.css'

function PostView() {
    return (
        <>
            <div className="navBar">
                <img className='logoImg' src="images/icon.svg" alt="logo" />
                <h1 className='logo'>Instaclone</h1>
                <img className='camera' src="images/camera.png" alt="camera" />
            </div>
            <div className='post'>
                <div className="name">
                    <div className="nameAndlocation">
                        <h3>Siva</h3>
                        <h3>Bengaluru</h3>
                    </div>
                    <img src="images/more_icon.svg" alt="" />
                </div>
                <div className="postImg">

                </div>
                <div className="likeshare">
                    <div>
                        <img src="images/heart@2x.png" alt="like" />
                        <img src="images/share@2x.png" alt="like" />
                        <p>10 Jan 2021</p>
                    </div>
                    <p>64 likes</p>
                </div>
                <div className="description">
                    <h3>Kickstart your career with a bang</h3>
                </div>
            </div>
        </>
    )
}

export default PostView