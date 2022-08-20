import React from 'react'
import CountUp from 'react-countup';


const Countup = () => {
  return (
    <section className='container mt-5'>
    <div className='d-flex align-items-center mb-5 flex-wrap'>
    <div className='col-lg-3 col-sm-6 col-12 text-center'>
    <span className='fw-bold me-3' style={{"fontSize":"60px"}}><CountUp end={102}></CountUp></span>
    <span className=' d-inline-block fw-bold'>Our<br/>Clients</span>
    </div>
    <div className='col-lg-3 col-sm-6 col-12 text-center'>
    <span className='fw-bold me-3' style={{"fontSize":"60px"}}><CountUp end={30}></CountUp></span>
    <span className=' d-inline-block fw-bold'>Total<br/>Categories</span>
    </div>
    <div className='col-lg-3 col-sm-6 col-12 text-center'>
    <span className='fw-bold me-3' style={{"fontSize":"60px"}}><CountUp end={102}></CountUp></span>
    <span className=' d-inline-block fw-bold'>In<br/>Country</span>
    </div>
    <div className='col-lg-3 col-sm-6 col-12 text-center'>
    <span className='fw-bold me-3' style={{"fontSize":"60px"}}><CountUp end={98}></CountUp>%</span>
    <span className=' d-inline-block fw-bold'>Happy<br/>Customer</span>
    </div>
    </div>
    <hr/>
    </section>
  )
}

export default Countup