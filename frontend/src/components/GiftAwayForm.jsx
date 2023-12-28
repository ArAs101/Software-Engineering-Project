import React, { useState } from 'react';

const CreateEntryForm = () => {
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to handle the submission of form
        // You'll need to handle the image and form data according to your backend setup
        console.log(productName, description, image);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="productName">Product Name:</label>
                <input
                    type="text"
                    id="productName"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="imageUpload">Upload Image:</label>
                <input
                    type="file"
                    id="imageUpload"
                    onChange={handleImageChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default CreateEntryForm;
