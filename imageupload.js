import React, { useState } from 'react';

function ImageUpload({ onSubmit }) {
  const [imageFile, setImageFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setImageFile(file);
    } else {
      setImageFile(null);
      alert('Please select a valid image file.');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (imageFile) {
      const reader = new FileReader();
      reader.onload = (e) => onSubmit(e.target.result);
      reader.readAsDataURL(imageFile);
    } else {
      alert('Please select an image to upload');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="image-upload">Select an image:</label>
      <input type="file" id="image-upload" onChange={handleFileChange} />
      <button type="submit">Identify Species</button>
    </form>
  );
}

export default ImageUpload;
