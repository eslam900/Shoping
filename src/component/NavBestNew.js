import React, { useEffect, useState } from 'react'
import { data } from "../data/data";
import CardShop from "./CardShop";


const NavBestNew = () => {
const [Item, Setitem] = useState([])
useEffect(()=>{
  Setitem(data.filter((el)=>el.status !== undefined))
},[])

const HandelClick = (type)=>{
  if(type !== "All"){
    Setitem(data.filter((el)=>el.status === type))
  }else{
    Setitem(data.filter((el)=>el.status !== undefined))
  }
}
  return (
    <section className='container mt-5'>
    <ul className='navbar mb-0 justify-content-center gap-5 p-0'>
    <li className='nav_Best fs-3 fw-bold text-secondary opacity-50 list-unstyled Activ' onClick={()=>HandelClick("All")} role='button'>Best Sellers</li>
    <li className='nav_Best fs-3 fw-bold text-secondary opacity-50 list-unstyled' onClick={()=>HandelClick("new")} role='button'>New Arrivals</li>
    <li className='nav_Best fs-3 fw-bold text-secondary opacity-50 list-unstyled' onClick={()=>HandelClick("sale")} role='button'>Hot Sales</li>
    </ul>
    <div className=" container-sm d-flex flex-wrap align-items-center mt-2 justify-content-center">{Item.map((el,ind)=> <CardShop key={ind} item={el} id={el.id}/> )}</div>
    </section>
  )
}

export default NavBestNew