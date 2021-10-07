import React, { useState } from "react";
import ReactCrop from "react-image-crop";
import Axios from "axios";
import 'react-image-crop/dist/ReactCrop.css';


const Cropper = () => {

    const [file, setFile] = useState(null);
    const [image, setImage] = useState(null);
    const [crop, setCrop] = useState({ aspect: 1 / 1 });
    const [newImage, setNewImage] = useState(null);
    const [test, setTest] = useState(null);

    const url = 'http://localhost:3001/profils';

//$$$$$$$$$$$$$$$$$$$$$$$$ Fonction permettant l'affichage de l'image $$$$$$$$$$$$$$$$$$$$$ 

    function getCroppedImg(e) {
        e.preventDefault();
        const canvas = document.createElement("canvas");
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext("2d");
      
        // New lines to be added
        const pixelRatio = window.devicePixelRatio;
        canvas.width = crop.width * pixelRatio;
        canvas.height = crop.height * pixelRatio;
        ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        ctx.imageSmoothingQuality = "high";
      
        ctx.drawImage(
          image,
          crop.x * scaleX,
          crop.y * scaleY,
          crop.width * scaleX,
          crop.height * scaleY,
          0,
          0,
          crop.width,
          crop.height
        )

        const base64Image = canvas.toDataURL("image/jpeg");
        setNewImage(base64Image);
    
    
    };

//$$$$$$$$$$$$$$$$$$$$$$$$ FIN Fonction permettant l'affichage de l'image $$$$$$$$$$$$$$$$$$$$$        

    const handleFile = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]));
        setTest(e.target.files[0]);
    }

    const handleClick = (e) => {
        e.preventDefault();
        localStorage.setItem('img', JSON.stringify(newImage));
    }

    // test $$$$$$$$$$$$$$$$$$$

    let formData = new FormData();
    formData.append("file", test);


    const testFile = (e) => {
        e.preventDefault();
        Axios.put(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }


    return(
        <div className="cropper">
            {file}
            <input type="file" accept="image/*" onChange={handleFile} className="cropper--in" name="image"></input>
            {file && (
                <div>
                    <ReactCrop src={file} onImageLoaded={setImage} crop={crop} onChange={setCrop}/>
                    <button onClick={getCroppedImg}>recadrer</button>
                </div>
            )}

            {newImage && (
                <div>
                    <img src={newImage} />
                </div>
            )}
            <button onClick={handleClick}>bouton de test</button>
            <button onClick={testFile}>test server</button>
            

        </div>
    )
}

export default Cropper;