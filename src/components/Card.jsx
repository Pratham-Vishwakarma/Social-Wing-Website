// import { Button } from 'bootstrap'
import React from 'react'
import '../Styles/Card.css'

const Card = () => {
  return (
    <div>
      <div className="row mt-5 py-5" style={{ rowGap: '0', columnGap: '1rem' }}>
        <div className="col-md-5">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="p-4 text-bg-warning text-light d-flex flex-column rounded bg-image1" style={ { height: 300, width: "80%" } }>
              <h1 className="pt-5 ">General Information</h1>
              <a href='/Rules'><button type="button" className=" mt-5 btn btn-dark ">Know more</button></a>
            </div>
          </div>            
        </div>
        <div className="know-more col-md-5">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="p-4 text-bg-warning text-light d-flex flex-column rounded bg-image2" style={ { height: 300, width: "80%" } }>
              <h1 className="pt-5 ">Map Route</h1>
              <a href='/Location'><button type="button" className=" mt-5 btn btn-dark ">Know more</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
