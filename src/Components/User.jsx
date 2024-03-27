import React from 'react';
import personImage from "./img.png";
export default function User({ name }) {
  return (
    <div style={{ background: "#D3D3D3", height: "40vh", width: "40vh", marginTop: "8px",marginLeft:"70px",marginRight:"20px",marginBottom:"5px"}}>
      <p style={{textAlign:"center"}}>{name}</p>
    <img style={{height:"150px",marginTop:"20px",marginLeft:"60px"}} src={personImage} alt="pic" />
    </div>
  );
}
