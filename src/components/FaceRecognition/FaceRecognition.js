import React from "react";
import './FaceRecognition.css';

const FaceRecognition = ({ imageURL, box }) => {
    if (imageURL) {
        return (
            <div className="center ma">
                <div className="absolute mt2">
                    <img id='inputImage' src={imageURL} alt="img" width='500px' height='auto' />
                    <div className="bounding-box" style={{ top: box.top, right: box.right, left: box.left, bottom: box.bottom }}></div>
                </div>
            </div >
        );
    }
}

export default FaceRecognition;