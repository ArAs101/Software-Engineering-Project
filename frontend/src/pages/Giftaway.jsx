import React, { useState } from 'react'
import axios from "axios"


const GiftAway = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [selectedImage, setSelectedImage] = useState(null)
    const [category, setCategory] = useState("")

    const submitGiftAway = (e) => {
        e.preventDefault();

        const image = e.target.elements.avatar.files[0];

        const formData = new FormData()


        formData.append("title", title)
        formData.append("description", description)
        formData.append("categoryName", category)
        formData.append("image", image)


        axios.post("http://localhost:4000/giftaway", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })

            .then((res) => {
                console.log(res)
            })
            .catch(err => console.log("Giftaway creation error", err))



        console.log(image, title, description, category)

    }

    return (
       // <div style={{ display: "flex", flexDirection: "row" }}>

            <div style={{ display: "flex", height: "100vh", alignContent: "center", justifyContent: "center" }}>
                <div style={{ height: "50%", width: "30%", marginTop: "5rem", border: "2px", borderColor: "black", backgroundColor: "wheat", padding: "2rem", borderRadius: "2rem" }}>
                    <form onSubmit={submitGiftAway}>

                        <div className="mb-3">
                            <label htmlFor="avatar" className="form-label">Avatar</label>
                            <input type="file" id="avatar" accept="image/*" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-control" id="title" aria-describedby="emailHelp" value={title} onChange={e => setTitle(e.target.value)} required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <input type="text" className="form-control" id="description" value={description} onChange={e => setDescription(e.target.value)} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="category" className="form-label">Category</label>
                            <input type="text" className="form-control" id="category" value={category} onChange={(e) => setCategory(e.target.value)} required />
                        </div>


                        <button type="submit" className="btn btn-primary btn-lg" style={{ marginLeft: "40%", marginTop: "20px" }}>Submit</button>
                    </form>
                </div>
            </div>
            //<div>
           //     <ul>
             //      {/*  {const myGiftaways = axios.get("http://localhost:4000/giftaway", )} */}
         //       </ul>
         //   </div>
      //  </div>
    )
}

export default GiftAway