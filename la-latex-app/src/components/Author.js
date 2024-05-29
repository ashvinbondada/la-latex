import React, { useState } from 'react';
import './Author.css';

function Author() {
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div className="author-page">
      <h1>Author</h1>
      <div className="author-content">
        <input type="file" onChange={handleImageChange} />
        {image && <img src={image} alt="Author HELLO" className="author-image" />}
        <textarea
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Write a description about the author"
          className="author-description"
        />
      </div>
    </div>
  );
}

export default Author;
