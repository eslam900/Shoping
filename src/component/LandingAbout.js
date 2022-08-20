import React from 'react'


const LandingAbout = () => {
  return (
    <section className='container mt-5'>
    <img className='w-100 mb-5' src={require("../img/about/about-us.jpg")} alt= "...."/>
    <div className='row'>
    <div className='col-md-4 col-sm-6'>
    <h4 className='fw-bold'>Who We Are ?</h4>
    <p>Contextual advertising programs sometimes have strict policies that need to be adhered too. Let’s take Google as an example.</p>
    </div>
    <div className='col-md-4 col-sm-6 mt-3 mt-sm-0'>
    <h4 className='fw-bold'>Who We Do ?</h4>
    <p>In this digital generation where information can be easily obtained within seconds, business cards still have retained their importance.</p>
    </div>
    <div className='col-md-4 col-sm-6 mt-3 mt-sm-0'>
    <h4 className='fw-bold'>Why Choose Us</h4>
    <p>A two or three storey house is the ideal way to maximise the piece of earth on which our home sits, but for older or infirm people.</p>
    </div>
    </div>
    </section>
  )
}

export default LandingAbout