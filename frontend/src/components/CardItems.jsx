import React from 'react'
import logo from '../assets/dragon.jpg'


const CardItems = (/* {id, logo, title, description} */) => {

/* const claimIt = (e) => {
  axios.patch("http://localhost:4000/dashboard/claimit", {
  
  giftawayId: key,
  consumerId: userId //TODO fetch the user cookie

  })
  .then()
  .catch(err => console.log(err))
  

}  */

  return (
    
    <div style={{ display: "flex", flexDirection: "row" }} >
      <div className='leftCardItem'>
        <img src={logo} style={{ width: "100px", height: "100px", margin: "5px", borderRadius: "10px" }} />
      </div>
      <div className='rightCardItem' style={{ textAlign: "left", paddingLeft: "10px" }}>
        <h2>Dragon Giftaway</h2>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <p style={{ flex: 1, padding: "2px" }}>
          Big Green Dangerous Dragon
          </p>
          <button className="btn btn-warning" style={{ height: "40px", marginLeft: "10px" }}>
            Claim it!
          </button>
        </div>
      </div>

    </div>
  )
}

export default CardItems