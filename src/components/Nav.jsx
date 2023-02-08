import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Nav = () => {

    const items = useSelector((state) => state.cart)
    console.log(items, 'this is selecrted data')
    return (
        <div className='bg-primary text-white d-flex justify-content-around ' style={{ height: '50px' }} >
            <Link to='/'> <div className='text-white fs-4' >Home</div> </Link>
            <Link to='/cart'><div className='text-white fs-4' >Cart</div></Link>
            <div className='fs-4' > Cart item :  {items.length}  </div>
        </div>
    )
}

export default Nav