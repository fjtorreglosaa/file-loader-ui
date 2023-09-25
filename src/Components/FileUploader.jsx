import React, { useState } from "react";
import Axios from "axios";

export const FileUploader = () => {

    const [file, setFile] = useState(null);
    const [message, setMessage] = useState(''); 

    const onFileUpload = (e) => {
        setFile(e);
    };

    const insertFile = async()=>{
        
        const formData = new FormData();
        
        formData.append("file", file);

        await Axios.post("http://localhost:5179/api/TXT", formData,  {headers: {'Content-Type': 'multipart/form-data'}})
        .then(response => {
            console.log(response.data)
            setMessage(response.data);
        }).catch(error => {
            setMessage('Unable to continue, please choose a file to upload or check if the provided format is correct (.txt).');
        });

    }

  return (
        <>
            <div className="form-control">
            <h2>File Uploader</h2>
            <div className="input-group mb-3">
                <div>
                <label className="form-label p-2" htmlFor="customFile">
                    Please select the file you want to upload:
                </label>
                <input
                    className="form-control p-2"
                    id="customFile"
                    type="file"
                    onChange={(e) => onFileUpload(e.target.files[0])}
                />
                </div>
            </div>
            <div className="mb-3">
                <button type="button" className="btn btn-dark" onClick={() => insertFile()}>
                Upload
                </button>
            </div>
                <p>{message}</p>
            </div>
        </>
  );
};
