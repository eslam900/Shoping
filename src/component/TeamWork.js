import React from 'react'

const TeamWork = () => {
  return (
    <section className='container mt-5'>
    <div className='text-center mb-4'>
    <h6 className='text-danger fw-bold'>OUR TEAM</h6>
    <h1 className='fw-bold'>Meet Our Team</h1>
    </div>
    <div className='d-flex flex-wrap'>
    <div className='col-lg-3 col-sm-6 col-12 p-sm-4'>
    <img className='w-100 mb-4' src={require("../img/about/team-1.jpg")} alt="..."/>
    <h4 className='fw-bold'>John Smith</h4>
    <p className=' text-secondary opacity-50'>Fashion Design</p>
    </div>
    <div className='col-lg-3 col-sm-6 col-12 p-sm-4'>
    <img className='w-100 mb-4' src={require("../img/about/team-2.jpg")} alt="..."/>
    <h4 className='fw-bold'>Christine Wise</h4>
    <p className=' text-secondary opacity-50'>C.E.O</p>
    </div>
    <div className='col-lg-3 col-sm-6 col-12 p-sm-4'>
    <img className='w-100 mb-4' src={require("../img/about/team-3.jpg")} alt="..."/>
    <h4 className='fw-bold'>Sean Robbins</h4>
    <p className=' text-secondary opacity-50'>Manager</p>
    </div>
    <div className='col-lg-3 col-sm-6 col-12 p-sm-4'>
    <img className='w-100 mb-4' src={require("../img/about/team-4.jpg")} alt="..."/>
    <h4 className='fw-bold'>Lucy Myers</h4>
    <p className=' text-secondary opacity-50'>Delivery</p>
    </div>
    </div>
    </section>
  )
}

export default TeamWork