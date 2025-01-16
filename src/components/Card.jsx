// import { Button } from 'bootstrap'
import React from 'react'
import '../Styles/Card.css'

const Card = () => {
  return (
    <div>
      <div className="row mt-5 py-5">
        <div className="col-md-6 ">
            <div>
                <div className="m-5 p-5 text-bg-warning text-light d-flex flex-column rounded bg-image1" style={ { height: 300 } }  >
                <h1 className="pt-5 ">General Information</h1>
                <a href='/Rules'><button type="button" class=" mt-5 btn btn-dark ">Know more</button></a>
                </div>
            </div>
            
        </div>
        <div className="col-md-6">
            <div className="m-5 p-5 text-bg-warning text-light d-flex flex-column rounded bg-image2" style={ { height: 300 } }>
            <h1 className="pt-5 ">Map Route</h1>
            <a href='/Location'><button type="button" class=" mt-5 btn btn-dark ">Know more</button></a>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Card
