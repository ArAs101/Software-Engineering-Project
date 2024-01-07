import React from 'react'
import logo from '../assets/Cat03.jpg'

const ClaimedItems = (/* { logo, title, mail, phone } */) => {
    
    
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>

                <img src={logo} style={{ width: "50px", height: "50px", margin: "5px", borderRadius: "10px" }} />


                <h5 style={{ padding: "15px" }}>Cat Giftaway</h5>

            </div>
            <div style={{ display: "flex", width: "80%", marginLeft: "75px", textAlign: "left", flexDirection: "row", justifyContent: "space-between" }}>
                <div>
                    <p >mail: armin@mail.com</p>
                    <p >phone: 1234567</p>
                </div>
                <div>
                    <button className="btn btn-warning" style={{ height: "40px", marginTop: "4px" }}>
                        Unclaim
                    </button>
                </div>

            </div>


        </div>
    )
}

export default ClaimedItems