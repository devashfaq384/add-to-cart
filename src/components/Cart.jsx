import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { remove } from '../store/CartSlice'


const Cart = () => {
  const items = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  console.log(items)

  const handleRemove = (id) => {
    // console.log(id)
    dispatch(remove(id))
  }

  if (items.length === 0) {
    return <div className='text-danger fs-3' >There is nothing in cart go to <Link to='/' className='text-success' >Home</Link> and add to cart products </div>
  }

  return (
    <div>
      <div>
        {
          items.map((item) => {
            return (
              <>
                <section style={{ backgroundColor: "#eee" }}>
                  <div className="container py-5">
                    <div className="row justify-content-center mb-3">
                      <div className="col-md-12 col-xl-10">
                        <div className="card shadow-0 border rounded-3">
                          <div className="card-body">
                            <div className="row">
                              <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                                <div className="bg-image hover-zoom ripple rounded ripple-surface">
                                  <img
                                    src={item.image}
                                    height='130px'
                                  />
                                  <a href="#!">
                                    <div className="hover-overlay">
                                      <div
                                        className="mask"
                                        style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                                      />
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 col-xl-6">
                                <h5>{item.title}</h5>

                                <div className="mb-2 text-muted small">
                                  <span className="text-primary"> • </span>
                                  <span>{item.category}</span>
                                </div>
                                <p className="text-truncate mb-4 mb-md-0">
                                  {item.description}
                                </p>
                              </div>
                              <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                                <div className="d-flex flex-row align-items-center mb-1">
                                  <h4 className="mb-1 me-1">$13.99</h4>
                                </div>
                                <div className="d-flex flex-column mt-4">
                                  <button className="btn btn-primary btn-sm" onClick={() => { handleRemove(item.id) }} >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

              </>
            )
          })
        }
      </div>
    </div>
  )
}

export default Cart
{/* <button onClick={() => { handleRemove(item.id) }} >remove</button> */ }