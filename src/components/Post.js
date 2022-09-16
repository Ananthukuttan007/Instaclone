import React, { useState } from 'react'
import './Post.css'

function Post() {
    const [fileName, setFileName] = useState("No File Chosen");
    return (
        <>
            <div className="navBar">
                <img className='logoImg' src="images/icon.svg" alt="logo" />
                <h1 className='logo'>Instaclone</h1>
                <img className='camera' src="images/camera.png" alt="camera" />
            </div>
            <div className="postForm">
                <form action="">
                    <input onChange={(e) => setFileName(e.target.value.split("\\").pop())}
                        type="file" name="file" id="file" class="inputfile" style={{ display: "none" }} />
                    <p style={{ display: 'inline-block' }} >{fileName}</p> &nbsp;&nbsp;
                    <label style={{ display: 'inline-block' }} for="file">Browse</label> <br />
                    <input style={{ display: 'inline-block' }} type="text" placeholder='Author' /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input style={{ display: 'inline-block' }} type="text" placeholder='Location' /> <br /> <br />
                    <input style={{ display: 'inline-block', width: '390px' }} type="text" placeholder='Description' />
                    <br /> <br />
                    <button style={{ marginLeft: '170px', paddingLeft: "10px", paddingRight: "10px" }} type="submit">Post</button>



                </form>
            </div>
        </>
    )
}

export default Post