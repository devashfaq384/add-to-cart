import { computeHeadingLevel } from '@testing-library/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../store/CartSlice'
import { fetchProducts, statuses } from '../store/ProductSlice'


const Products = () => {

    const { data: products, status } = useSelector((state) => state.product)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchProducts())
    }, [])


    const handleAdd = (item) => {
        dispatch(add(item))
    }

    if (status === statuses.LAODING) {
        return <h2>Loading....</h2>
    }

    if (status === statuses.ERROR) {
        return <h2>something went worng error occured</h2>
    }

    return (
        <div className='row'>
            {
                products.map((item) => {
                    return <div key={item.id} className="col-lg-4 col-md-6 mb-4" >
                        <div className="card">
                            <div
                                className="bg-image hover-zoom ripple ripple-surface ripple-surface-light py-4"
                                data-mdb-ripple-color="light"

                            >
                                <img
                                    src={item.image}
                                    style={{ height: '100px' }}
                                />
                                <a href="#!">
                                    <div className="mask">
                                        <div className="d-flex justify-content-start align-items-end h-100" />
                                    </div>
                                    <div className="hover-overlay">
                                        <div
                                            className="mask"
                                            style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                        />
                                    </div>
                                </a>
                            </div>
                            <div className="card-body" style={{ background: '#eee' }}  >
                                <a href="" className='text-decoration-none text-dark' >
                                    <h5 className="card-title mb-3">{item.title.length > 35 ? item.title.slice(0, 10) + "..." : item.title}</h5>
                                </a>
                                <a href="" className='text-decoration-none text-dark' >
                                    <p>{item.category}</p>
                                </a>
                                <h6 className="mb-3">${item.price}</h6>
                                <button className='btn btn-primary' onClick={() => handleAdd(item)}>Add to Cart</button>
                            </div>
                        </div>
                    </div>

                })
            }
        </div>
    )
}

export default Products