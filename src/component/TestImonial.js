import React from 'react'
import "./TestImonial.css"

const TestImonial = () => {
  return ( 
    <section className='container-fluid mt-5'>
    <div className='row'>
    <div className='TestImonial_text col-lg-6 col-12 text-center d-flex flex-column justify-content-center gap-2' style={{"backgroundColor":"rgb(243,242,238)"}}>
    <div className=' text-danger fs-1'>,,</div>
    <p className='text-center fst-italic' style={{"fontSize":"21px"}}>“Going out after work? Take your butane curling iron with you to the office, heat it up, style your hair before you leave the office and you won’t have to make a trip back home.”</p>
    <div className='d-flex align-items-center gap-4 justify-content-center'>
    <img className="rounded-circle" src={require("../img/about/testimonial-author.jpg")} alt="..."/>
    <h5 className='fw-bold mb-0'>Augusta Schultz <div className='text-secondary text-opacity-50 fst-italic mt-1'>Fashion Design</div></h5>
    </div>
    </div>
    <div className='TestImonial_pic col-lg-6 p-0'></div>
    </div>
    </section>
  )
}

export default TestImonial