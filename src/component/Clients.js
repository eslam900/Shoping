import React from 'react'
import { Link } from 'react-router-dom'

const Clients = () => {
  return (
    <section className='container mt-5'>
    <div className='text-center mb-5'>
    <p className='text-danger fw-bold'>PARTNER</p>
    <h1 className='fw-bold'>Happy Clients</h1>
    </div>
    <div className='d-flex flex-wrap'>
    <Link className='col-lg-3 col-sm-4 col-6 mb-5 text-center' to="#"><img src={require("../img/clients/client-1.png")} alt="..."/></Link>
    <Link className='col-lg-3 col-sm-4 col-6 mb-5 text-center' to="#"><img src={require("../img/clients/client-2.png")} alt="..."/></Link>
    <Link className='col-lg-3 col-sm-4 col-6 mb-5 mt-sm-0 mt-5 text-center' to="#"><img src={require("../img/clients/client-3.png")} alt="..."/></Link>
    <Link className='col-lg-3 col-sm-4 col-6 mb-5 mt-lg-0 mt-5 text-center' to="#"><img src={require("../img/clients/client-4.png")} alt="..."/></Link>
    <Link className='col-lg-3 col-sm-4 col-6 mb-5 mt-5 text-center' to="#"><img src={require("../img/clients/client-5.png")} alt="..."/></Link>
    <Link className='col-lg-3 col-sm-4 col-6 mb-5 mt-5 text-center' to="#"><img src={require("../img/clients/client-6.png")} alt="..."/></Link>
    <Link className='col-lg-3 col-sm-4 col-6 mb-5 mt-5 text-center' to="#"><img src={require("../img/clients/client-7.png")} alt="..."/></Link>
    <Link className='col-lg-3 col-sm-4 col-6 mb-5 mt-5 text-center' to="#"><img src={require("../img/clients/client-8.png")} alt="..."/></Link>
    </div>
    </section>
  )
}

export default Clients