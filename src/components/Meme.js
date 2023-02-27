import React from "react";
import memesData from "../memesData.js"

export default function Meme() {

    // const [memeImage, setMemeImage] = React.useState("")

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage:"https://i.imgflip.com/30b1gx.jpg"
    })

    const [allMemeImages, setAllMemeImages]=React.useState(memesData)

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
        // const url = memesArray[randomNumber].url

    }

    return (
        <main>
            <div className="form">
                <input type="text" placeholder="Top text" className="form-input" />
                <input type="text" placeholder="Bottom text" className="form-input" />
                <button className="form-button" onClick={getMemeImage}>Get a new meme image</button>
            </div>
            <div className="div-image">
                <img src={memeImage} className="meme-image" />
            </div>
        </main>
    )
}