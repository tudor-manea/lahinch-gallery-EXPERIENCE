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
          className="outline h-20 outline-blue-300"/>
        </form>
      ) : null}
    </>
  );
};

export default UploadForm;

