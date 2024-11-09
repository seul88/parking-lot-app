'use client'

import ClipLoader from "react-spinners/ClipLoader";

export const  Loader = () => {
  return (
      <div
        style={{
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center", 
          height: "100%",
          border: "1px solid #D3D3D3",
          borderRadius: "6px"
        }}
      >
        <ClipLoader color={"#D3D3D3"} />
      </div>
  );
}