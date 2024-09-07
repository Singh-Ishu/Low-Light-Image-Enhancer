import React from "react";
import { useState } from "react";
import'./uploader.css'
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { AiFillFileImage } from 'react-icons/ai'
import { useCursor } from "@react-three/drei";

function Uploader() {

    const[image, setImage] = useState(null);
    const[fileName, setFileName]= useState("No selected file")
    return(
        <>
        <main>
            <form action = ""
            onClick={()=>document.querySelector(".input-field").click()}>
                <input type="file" accept="image/*" className="input-field" hidden
                onChange={({target:{files}})=>{
                    files[0] && setFileName(files[0].name)
                    if(files){
                        setImage(URL.createObjectURL(files[0]))
                    }
                }}/>
                {image?
                    <img src={image} alt={fileName} />
                    :
                    <>
                    <MdCloudUpload color="white" size={60} />
                    <p>Browse Files to Upload</p>
                    </>
                    }
            </form>
            <section className="uploaded-row">
                <AiFillFileImage color="white"/>
                <span className="uploaded-content">
                    {fileName}
                    <MdDelete
                    onClick={()=>{
                        setFileName("No Selected File")
                        setImage(null)
                    }} />
                </span>
            </section>
        </main>
        </>
    )
}

export default Uploader