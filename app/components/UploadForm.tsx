"use client"

import { useState, ChangeEvent } from "react"
import { Session } from "next-auth";

const UploadForm = ({user}: {user: Session["user"]}) => {
  const [description, setDescription] = useState("")
  const [image, setImage] = useState(null)
  
  const handleDescriptionChange = (e: 
    ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  }

  const handleImageChange = (event: 
    ChangeEvent<HTMLInputElement>) => {
    setImage(event.target.files[0])
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if(!image) {
      console.error("Please select an image");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("description", description);

    try {
      const response = await fetch ("/api/upload", {
        method: "POST",
        body: formData,
      });

      if(response.ok) {
        setDescription("")
        setImage(null)
      } else {
        console.error("Image upload has failed")
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      {user ? (
        <form className="flex flex-col gap-10" 
        onSubmit={handleSubmit}>
          <textarea 
          className="outline h-20 outline-blue-300"
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Description"
          maxLength={100}
          style={{ resize: "none" }}
          />
          <input type="file" onChange={handleImageChange} 
          name="image"/>
          <button className="self-start bg-blue-300 px-3 
          rounded-sm" type="submit">Upload</button>
        </form>
      ) : <div>
            <h2>Sign In to Upload</h2>
          </div>}
    </>
  );
};

export default UploadForm;

