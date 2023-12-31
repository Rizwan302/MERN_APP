import React from 'react'

export default function Card() {
  return (
    <div>
    <div className="card mt-3 m-3" style={{"width": "18rem", "maxHeight":"360px"}}>
      <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" className="card-img-top" alt="..."/>
        <div className="card-body">
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div className="container w-100">
            <select name=" " className='m-2 h-100 bg-success rounded' id="">
              {Array.from(Array(6), (e, i)=>{
                return(
                  <option key={i+1} value={i+1}>{i+1}</option>
                )
              })}
            </select>
            <select name=" " className='m-2 h-100 bg-success rounded' id="">
              <option value="half">Half</option>
              <option value="full">Full</option>
            </select>

            <div className=" d-inline fs-5">
              Total Price
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}
